import { View, Text, TouchableOpacity, Switch } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import profileScreenStyles from "../styles/profileScreen.styles";
import { ProfileScreenIcons } from "../../../icons/ProfileScreenIcons";

const NFCManagementView = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) navigation.goBack();
    }, [isFocused]);

    return (
        <View style={profileScreenStyles.container}>
            <View style={profileScreenStyles.verticalContainer}>
                <Text style={profileScreenStyles.title}>NFC Management</Text>

                <View style={profileScreenStyles.optionsContainer}>
                    <TouchableOpacity
                        style={profileScreenStyles.optionContainer}
                    >
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.ReadIcon size={profileScreenStyles.optionIcon.height} />

                            <Text style={profileScreenStyles.optionText}>
                                Read
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.WriteIcon size={profileScreenStyles.optionIcon.height} />

                            <Text style={profileScreenStyles.optionText}>
                                Write
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.OtherIcon size={profileScreenStyles.optionIcon.height} />

                            <Text style={profileScreenStyles.optionText}>
                                Other
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default NFCManagementView;
