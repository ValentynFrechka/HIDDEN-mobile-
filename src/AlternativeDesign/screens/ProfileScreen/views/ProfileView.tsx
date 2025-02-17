import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "../styles/profileScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PROFILE_VIEWS } from "../constants/ui";
import { ProfileScreenIcons } from "../../../icons/ProfileScreenIcons";
import NavigationOption from "../components/NavigationOption/NavigationOption";
import EthKeyService, { KeyPair } from "../../../../../services/EthKeyService";
import { Suspense, useEffect, useState, useTransition } from "react";
import useEthKeyService from "../../../../../services/EthKeyService";
import useContractInteractionService from "../../../../../services/ContractInteractionService";

type ProfileStackParamList = {
    [key in typeof PROFILE_VIEWS[keyof typeof PROFILE_VIEWS]]: undefined;
};

const ProfileView = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

    const contractInteractionService = useContractInteractionService();

    const ethKeyService = useEthKeyService();

    const [keys, setKeys] = useState<KeyPair | null>(null);
    const [loading, setLoading] = useState(false);

    const generateKeys = () => {
        setLoading(true);
        ethKeyService.generateKeys().then(async (newKeys) => {
            if (!newKeys) return;
            ethKeyService.saveKeysToFile(newKeys);
            setKeys(newKeys);
            setLoading(false);
        });
    };

    const [isKeysValid, setKeysValid] = useState<boolean>(false);

    useEffect(() => {
        if (!keys) return;
        setKeysValid(validateKeys(keys.address, keys.publicKey, keys.privateKey));
    }, [keys]);

    const validateKeys = (address: string, publicKey: string, privateKey: string) => {
        return ethKeyService.isAddressValid(address) && ethKeyService.isPublicKeyValid(publicKey) && ethKeyService.isPrivateKeyValid(privateKey)
    };

    useEffect(() => {
        ethKeyService.loadKeys().then((loadedKeys) => {
            setKeys(loadedKeys)
        });
    }, []);

    // Debug
    const [balance, setBalance] = useState<bigint>();
    // useEffect(() => {
    //     contractInteractionService.getBalances(0).then(value => {
    //         setBalance(value);
    //     })
    // }, []);
    const getBalance = async () => {
        contractInteractionService.getBalances(0).then(value => {
            if (!value) return;
            setBalance(value);
        })
    }
    //

    return (
        <View style={profileScreenStyles.container}>
            <View style={profileScreenStyles.verticalContainer}>
                <Text style={profileScreenStyles.title}>My profile</Text>

                <View style={profileScreenStyles.optionsContainer}>
                    <NavigationOption 
                        Icon={ProfileScreenIcons.PreferencesIcon} 
                        optionText="My preferences"
                        target={PROFILE_VIEWS.USER_PREFERENCES}                    
                    />

                    <NavigationOption 
                        Icon={ProfileScreenIcons.NFCManagementIcon} 
                        optionText="NFC Management"
                        target={PROFILE_VIEWS.NFC_MANAGEMENT}                    
                    />
                    
                    <NavigationOption 
                        Icon={ProfileScreenIcons.SupportIcon} 
                        optionText="Support & Legal"
                        target={PROFILE_VIEWS.SUPPORT}                    
                    />

                    {/* Temporary testing */}
                    <TouchableOpacity onPress={generateKeys} >
                        <Text style={profileScreenStyles.optionText}>Generate keys</Text>
                    </TouchableOpacity>

                    {!loading && keys && (
                        <>
                            <Text style={profileScreenStyles.optionText}>Address: {keys.address}</Text>
                            <Text style={profileScreenStyles.optionText}>Public: {keys.publicKey}</Text>
                            <Text style={profileScreenStyles.optionText}>Private: {keys.privateKey}</Text>
                            {isKeysValid ? 
                            (<Text style={profileScreenStyles.optionText}>Keys are valid</Text>)
                            :
                            (<Text style={profileScreenStyles.optionText}>Keys aren't valid</Text>)
                            }
                        </>
                    )}

                    <Text style={profileScreenStyles.optionText}>Balance: {balance?.toString()}</Text>
                    <TouchableOpacity onPress={getBalance} >
                        <Text style={profileScreenStyles.optionText}>Get balance</Text>
                    </TouchableOpacity>

                    {/* / Temporary testing */}
                </View>
            </View>
        </View>
    );
};

export default ProfileView;
