import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "../styles/profileScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProfileStackParamList = {
    Profile: undefined;
    Preferences: undefined;
};

const ProfileView = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

    return (
        <View style={profileScreenStyles.container}>
            <View style={profileScreenStyles.verticalContainer}>
                <Text style={profileScreenStyles.title}>My profile</Text>

                <View style={profileScreenStyles.optionsContainer}>
                    <TouchableOpacity
                        style={profileScreenStyles.optionContainer}
                        onPress={() => navigation.navigate("Preferences")}
                    >
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}></View>

                            <Text style={profileScreenStyles.optionText}>
                                My preferences
                            </Text>
                        </View>

                        <Text style={profileScreenStyles.optionText}>
                            {">"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}></View>

                            <Text style={profileScreenStyles.optionText}>
                                NFC Management
                            </Text>
                        </View>

                        <Text style={profileScreenStyles.optionText}>
                            {">"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}></View>

                            <Text style={profileScreenStyles.optionText}>
                                Support & Legal
                            </Text>
                        </View>

                        <Text style={profileScreenStyles.optionText}>
                            {">"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfileView;
