import { View, Text, TouchableOpacity, Switch } from "react-native";
import profileScreenStyles from "../../styles/profileScreen.styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ProfileScreenIcons } from "../../../../icons/ProfileScreenIcons";
import DropDownPicker from "react-native-dropdown-picker";
import { CURRENCIES, LANGUAGES } from "../../constants/ui";
import preferencesViewStyles from "./styles/preferencesView.styles";

const PreferencesView = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) navigation.goBack();
    }, [isFocused]);

    const [isNightModeEnabled, setNightModeEnabled] = useState(false);

    const toggleNightMode = () => {
        setNightModeEnabled(!isNightModeEnabled);
    };

    const getLanguageList = (languages: Record<string, string>) => {
        return Object.entries(languages).map(([key, value]) => ({
            label: value,
            value: key,
        }));
    };

    const [isLanguageOpen, setLanguageOpen] = useState(false);
    const [languageValue, setLanguageValue] = useState("EN");
    const [languages, setLanguages] = useState(getLanguageList(LANGUAGES));

    const getCurrencyList = (currencies: Record<string, string>) => {
        return Object.entries(currencies).map(([key, value]) => ({
            label: value,
            value: key,
        }));
    };

    const [isCurrencyOpen, setCurrencyOpen] = useState(false);
    const [currencyValue, setCurrencyValue] = useState("USD");
    const [currencies, setCurrencies] = useState(getCurrencyList(CURRENCIES));

    return (
        <View style={profileScreenStyles.container}>
            <View style={profileScreenStyles.verticalContainer}>
                <Text style={profileScreenStyles.title}>My preferences</Text>

                <View style={profileScreenStyles.optionsContainer}>
                    <View style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.LanguageIcon size={profileScreenStyles.optionIcon.height}/>

                            <Text style={profileScreenStyles.optionText}>
                                Language
                            </Text>
                        </View>

                        <DropDownPicker
                            containerStyle={preferencesViewStyles.dropdownPickerContainer}
                            props={{style: preferencesViewStyles.dropdownPickerOpacity}}
                            labelProps={{style: preferencesViewStyles.dropdownPickerLabel}}
                            dropDownContainerStyle={preferencesViewStyles.dropdown}
                            theme="DARK"
                            open={isLanguageOpen}
                            value={languageValue}
                            items={languages}
                            setOpen={setLanguageOpen}
                            setValue={setLanguageValue}
                            setItems={setLanguages}
                            listItemContainerStyle={preferencesViewStyles.listItemContainer}
                            listItemLabelStyle={preferencesViewStyles.listItemLabel}
                            zIndex={3000}
                            zIndexInverse={1000}
                        />
                    </View>

                    <View style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.CurrencyIcon size={profileScreenStyles.optionIcon.height}/>

                            <Text style={profileScreenStyles.optionText}>
                                Currency
                            </Text>
                        </View>

                        <DropDownPicker
                            containerStyle={preferencesViewStyles.dropdownPickerContainer}
                            props={{style: preferencesViewStyles.dropdownPickerOpacity}}
                            labelProps={{style: preferencesViewStyles.dropdownPickerLabel}}
                            dropDownContainerStyle={preferencesViewStyles.dropdown}
                            theme="DARK"
                            open={isCurrencyOpen}
                            value={currencyValue}
                            items={currencies}
                            setOpen={setCurrencyOpen}
                            setValue={setCurrencyValue}
                            setItems={setCurrencies}
                            listItemContainerStyle={preferencesViewStyles.listItemContainer}
                            listItemLabelStyle={preferencesViewStyles.listItemLabel}
                            zIndex={2000}
                            zIndexInverse={2000}
                        />
                    </View>

                    <View style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <ProfileScreenIcons.AppThemeIcon size={profileScreenStyles.optionIcon.height}/>

                            <Text style={profileScreenStyles.optionText}>
                                App theme
                            </Text>
                        </View>

                        <Switch
                            thumbColor={
                                isNightModeEnabled
                                    ? "white"
                                    : "rgb(247, 243, 34)"
                            }
                            trackColor={{
                                false: "rgb(76, 186, 255)",
                                true: "rgb(0, 17, 168)",
                            }}
                            value={isNightModeEnabled}
                            onValueChange={toggleNightMode}
                            ios_backgroundColor={"rgb(76, 186, 255)"}
                        ></Switch>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PreferencesView;
