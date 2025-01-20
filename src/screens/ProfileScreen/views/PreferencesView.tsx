import { View, Text, TouchableOpacity, Switch } from "react-native";
import profileScreenStyles from "../styles/profileScreen.styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const PreferencesView = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [isNightModeEnabled, setNightModeEnabled] = useState(false);

    useEffect(() => {
        if (!isFocused) navigation.goBack();
    }, [isFocused])

    const toggleNightMode = () => {
        setNightModeEnabled(!isNightModeEnabled);
    }

    return (
        <View style={profileScreenStyles.container}>
            <View style={profileScreenStyles.verticalContainer}>
                <Text style={profileScreenStyles.title}>My preferences</Text>

                <View style={profileScreenStyles.optionsContainer}>
                    <View style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}></View>

                            <Text style={profileScreenStyles.optionText}>
                                Language
                            </Text>
                        </View>

                        <Text style={profileScreenStyles.optionText}>
                            {">"}
                        </Text>
                    </View>

                    <View
                        style={profileScreenStyles.optionContainer}
                    >
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}></View>

                            <Text style={profileScreenStyles.optionText}>
                                Currency
                            </Text>
                        </View>

                        <Text style={profileScreenStyles.optionText}>
                            {">"}
                        </Text>
                    </View>

                    <View style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}></View>

                            <Text style={profileScreenStyles.optionText}>
                                App theme
                            </Text>
                        </View>

                        <Switch
                            thumbColor={isNightModeEnabled ? "white" : "rgb(247, 243, 34)"}
                            trackColor={{false: "rgb(76, 186, 255)", true: "rgb(0, 17, 168)"}}
                            value={isNightModeEnabled}
                            onValueChange={toggleNightMode}
                            ios_backgroundColor={"rgb(76, 186, 255)"}
                        >
                            
                        </Switch>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PreferencesView;
