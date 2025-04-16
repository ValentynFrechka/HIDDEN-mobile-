import { View, Text, TextInput } from "react-native";
import transactionFormViewStyles from "./styles/transactionFormView.styles";
import { useTransactionFormValueContext } from "../../contexts/TransactionFormValuesContext";
import { ETransactionFormKeys } from "../../enum/ETransactionFormKeys";
import UserBalanceInfo from "../../../../components/UserBalanceInfo/UserBalanceInfo";
import PrimaryButton from "../../../../components/buttons/PrimaryButton/PrimaryButton";
import { ECurrency } from "../../../../components/UserBalanceInfo/enum/ECurrency";
import useEthWalletService from "../../../../../../services/EthWalletService";
import useContractInteractionService from "../../../../../../services/ContractInteractionService";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Wallet } from "ethers";

const TransactionFormView = () => {
    const { transactionFormValues, setTransactionFormValues, handleSubmit } =
        useTransactionFormValueContext();

    const walletService = useEthWalletService();
    const contractService = useContractInteractionService();

    const [balance, setBalance] = useState(BigInt(0));

    useFocusEffect(
        useCallback(() => {
            const updateBalances = async () => {
                const wallet = await walletService.getWallet();
                if (wallet) {
                    getBalances(wallet);
                }
            };

            const subscribeToEvents = async () => {
                const wallet = await walletService.getWallet();
                if (wallet) {
                    const burnLeafListener = (user: string, treeID: bigint, tokensEarned: bigint) => {
                        if (user.toLowerCase() === wallet.address.toLowerCase()) {
                            getBalances(wallet);
                        }
                    };

                    contractService.onBurnLeaf(wallet.address, burnLeafListener);
                }
            }

            const unsubscribeFromEvents = async () => {
                const wallet = await walletService.getWallet();
                if (wallet) {
                    const burnLeafListener = (user: string, treeID: bigint, tokensEarned: bigint) => {
                        if (user.toLowerCase() === wallet.address.toLowerCase()) {
                            getBalances(wallet);
                        }
                    };

                    contractService.offBurnLeaf(wallet.address, burnLeafListener);
                }
            }

            updateBalances();

            subscribeToEvents();

            return () => {
                setBalance(BigInt(0));
                unsubscribeFromEvents();
            };
        }, [])
    );
    

    const getBalances = async (wallet: Wallet) => {
        contractService.getTokenBalance(wallet.address).then(tokens => {
            if (!tokens) return;
            setBalance(tokens);
        })
    }

    return (
        <View style={transactionFormViewStyles.verticalContainer}>
            <Text style={transactionFormViewStyles.title}>Send tokens</Text>

            <View style={transactionFormViewStyles.formContainer}>
                <View style={transactionFormViewStyles.fieldBalanceContainer}>
                    <View
                        style={transactionFormViewStyles.inputFieldsContainer}
                    >
                        <TextInput
                            style={transactionFormViewStyles.inputField}
                            value={transactionFormValues.recipientId}
                            placeholder="Recipient ID"
                            placeholderTextColor={"rgba(255,255,255,0.5)"}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) =>
                                setTransactionFormValues(
                                    ETransactionFormKeys.recipientId,
                                    value
                                )
                            }
                        />

                        <TextInput
                            style={transactionFormViewStyles.inputField}
                            value={transactionFormValues.amount}
                            placeholder="Amount"
                            placeholderTextColor={"rgba(255,255,255,0.5)"}
                            autoCorrect={false}
                            autoCapitalize="none"
                            inputMode="numeric"
                            onChangeText={(value) =>
                                setTransactionFormValues(
                                    ETransactionFormKeys.amount,
                                    value
                                )
                            }
                        />
                    </View>

                    <UserBalanceInfo balance={balance} currency={ECurrency.tokens} />
                </View>

                <PrimaryButton
                    title={"Next"}
                    style={transactionFormViewStyles.nextButton}
                    fontStyle={transactionFormViewStyles.nextText}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
};

export default TransactionFormView;
