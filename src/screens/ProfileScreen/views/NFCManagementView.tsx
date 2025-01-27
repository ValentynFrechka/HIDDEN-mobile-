import { View, Text, TouchableOpacity, Switch } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import profileScreenStyles from "../styles/profileScreen.styles";
import { ProfileScreenIcons } from "../../../icons/ProfileScreen.icons";
import { FitImage } from "../../../components/FitImage/FitImage";

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
                            <View style={profileScreenStyles.optionIcon}>
                                <FitImage
                                    src={ProfileScreenIcons.readIcon}
                                />
                            </View>

                            <Text style={profileScreenStyles.optionText}>
                                Read
                            </Text>
                        </View>

                        <View style={profileScreenStyles.navigationArrow}>
                            <ProfileScreenIcons.NavigationRightIcon width={"100%"} height={"100%"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}>
                                <FitImage
                                    src={ProfileScreenIcons.writeIcon}
                                />
                            </View>

                            <Text style={profileScreenStyles.optionText}>
                                Write
                            </Text>
                        </View>

                        <View style={profileScreenStyles.navigationArrow}>
                            <ProfileScreenIcons.NavigationRightIcon width={"100%"} height={"100%"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}>
                                <FitImage
                                    src={ProfileScreenIcons.otherIcon}
                                />
                            </View>

                            <Text style={profileScreenStyles.optionText}>
                                Other
                            </Text>
                        </View>

                        <View style={profileScreenStyles.navigationArrow}>
                            <ProfileScreenIcons.NavigationRightIcon width={"100%"} height={"100%"} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default NFCManagementView;
