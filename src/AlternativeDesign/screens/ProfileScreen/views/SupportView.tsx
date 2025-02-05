import { View, Text, TouchableOpacity, Switch } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import profileScreenStyles from "../styles/profileScreen.styles";
import { ProfileScreenIcons } from "../../../icons/ProfileScreenIcons";

const SupportView = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) navigation.goBack();
    }, [isFocused]);

    return (
        <View style={profileScreenStyles.container}>
            <View style={profileScreenStyles.verticalContainer}>
                <Text style={profileScreenStyles.title}>Support & Legal</Text>

                <View style={profileScreenStyles.optionsContainer}>
                    <TouchableOpacity
                        style={profileScreenStyles.optionContainer}
                    >
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.GuidesIcon size={profileScreenStyles.optionIcon.height} />

                            <Text style={profileScreenStyles.optionText}>
                                Guides for app usage
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.FAQIcon size={profileScreenStyles.optionIcon.height} />

                            <Text style={profileScreenStyles.optionText}>
                                FAQ
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.PrivacyPolicyIcon size={profileScreenStyles.optionIcon.height} color="white" />

                            <Text style={profileScreenStyles.optionText}>
                                iLeaf Privacy Policy
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.TermsNConditionsIcon size={profileScreenStyles.optionIcon.height} />

                            <Text style={profileScreenStyles.optionText}>
                                Terms & Conditions
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.DataUsagePolicyIcon size={profileScreenStyles.optionIcon.height} />

                            <Text style={profileScreenStyles.optionText}>
                                iLeaf Data usage Policy
                            </Text>
                        </View>

                        <ProfileScreenIcons.NavigationRightIcon size={profileScreenStyles.navigationArrow.height} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SupportView;