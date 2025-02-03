import { View, Text, ViewStyle, StyleProp } from "react-native";
import { AppIcons } from "../../icons/AppIcons";
import userBalanceInfoStyles from "./styles/userBalanceInfo.styles";

type UserBalanceInfoProps = {
    balance: number;
    style?: StyleProp<ViewStyle>
}

const UserBalanceInfo: React.FC<UserBalanceInfoProps> = ({ balance, style }) => {
    return (
        <View style={[userBalanceInfoStyles.balanceContainer, style]}>
            <Text style={userBalanceInfoStyles.balanceTitle}>Your current balance:</Text>

            <View style={userBalanceInfoStyles.balanceSubcontainer}>
                <AppIcons.LeafIcon size={userBalanceInfoStyles.balanceIcon.height} color={"white"} />
                
                <Text style={userBalanceInfoStyles.balanceLabel}>{balance}</Text>
            </View>
    </View>
    );
}

export default UserBalanceInfo;