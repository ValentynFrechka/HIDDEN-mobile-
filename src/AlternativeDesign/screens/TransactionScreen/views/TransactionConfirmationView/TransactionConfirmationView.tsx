import { View, Text, Button, TouchableOpacity } from "react-native"
import transactionConfirmationViewStyles from "./styles/transactionConfirmation.styles";
import { useTransactionFormValueContext } from "../../contexts/TransactionFormValuesContext";
import { useTransactionViewContext } from "../../contexts/TransactionViewContext";
import { ETransactionView } from "../../enum/ETransactionView";
import { ETransactionFormKeys } from "../../enum/ETransactionFormKeys";
import UserBalanceInfo from "../../../../components/UserBalanceInfo/UserBalanceInfo";
import PrimaryButton from "../../../../components/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../../components/buttons/SecondaryButton/SecondaryButton";
import { ECurrency } from "../../../../components/UserBalanceInfo/enum/ECurrency";
import useEthWalletService from "../../../../../../services/EthWalletService";
import useContractInteractionService from "../../../../../../services/ContractInteractionService";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Wallet } from "ethers";


const TransactionConfirmationView = () => {
    const { transactionFormValues, setTransactionFormValues } = useTransactionFormValueContext();
    const { setTransactionView } = useTransactionViewContext();
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

    const handleBackPress = () => {
        setTransactionView(ETransactionView.form);
    }

    const clearFormFields = () => {
        setTransactionFormValues(ETransactionFormKeys.recipientId, "");
        setTransactionFormValues(ETransactionFormKeys.amount, "");
    }

    const handleSendPress = () => {
        // Perform transaction
        clearFormFields();
        setTransactionView(ETransactionView.success);

    }

    return (
        <View style={transactionConfirmationViewStyles.verticalContainer}>
            <Text style={transactionConfirmationViewStyles.title}>Send tokens</Text>

            <View style={transactionConfirmationViewStyles.infoContainer}>
                <View style={transactionConfirmationViewStyles.infoSubcontainer}>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>To:</Text>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>{transactionFormValues.recipientId}</Text>
                </View>

                <View style={transactionConfirmationViewStyles.infoSubcontainer}>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>Amount:</Text>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>{transactionFormValues.amount} tokens</Text>
                </View>
            </View>

            <UserBalanceInfo balance={balance} currency={ECurrency.tokens} />

            <View style={transactionConfirmationViewStyles.buttonContainer}>
                <SecondaryButton 
                    style={transactionConfirmationViewStyles.button}
                    fontStyle={transactionConfirmationViewStyles.buttonText}
                    title="Back"
                    onPress={handleBackPress}
                />
                <PrimaryButton 
                    style={transactionConfirmationViewStyles.button}
                    fontStyle={transactionConfirmationViewStyles.buttonText}
                    title="Send" 
                    onPress={handleSendPress}
                />
            </View>
        </View>
    );
};

export default TransactionConfirmationView;