import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "../styles/profileScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PROFILE_VIEWS } from "../constants/ui";
import { ProfileScreenIcons } from "../../../icons/ProfileScreenIcons";
import NavigationOption from "../components/NavigationOption/NavigationOption";
import EthKeyService from "../../../../../services/EthKeyService";
import { useEffect, useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store/store";
import { generateKeys, loadKeys } from "../../../../../store/ethKeysSlice";

type ProfileStackParamList = {
    [key in typeof PROFILE_VIEWS[keyof typeof PROFILE_VIEWS]]: undefined;
};

const ProfileView = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { publicKey, privateKey, loading, error } = useSelector((state: RootState) => state.ethKeys);

    const navigation =
        useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

    const regenerateKeys = async () => {
        dispatch(generateKeys());
    }

    useEffect(() => {}, [dispatch])

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
                    <TouchableOpacity onPress={regenerateKeys} >
                        <Text style={profileScreenStyles.optionText}>Generate keys</Text>
                    </TouchableOpacity>

                    <Text style={profileScreenStyles.optionText}>Public: {publicKey}</Text>
                    <Text style={profileScreenStyles.optionText}>Private: {privateKey}</Text>

                    {/* / Temporary testing */}
                </View>
            </View>
        </View>
    );
};

export default ProfileView;
