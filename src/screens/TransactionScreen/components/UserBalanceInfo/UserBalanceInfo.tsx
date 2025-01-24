import { View, Text, ViewStyle, StyleProp } from "react-native";
import { FitImage } from "../../../../components/FitImage/FitImage";
import { TransactionScreenIcons } from "../../../../icons/TransactionScreen.icons";
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
                <View style={userBalanceInfoStyles.balanceIcon}>
                    <FitImage src={TransactionScreenIcons.leafIcon} />
                </View>
                
                <Text style={userBalanceInfoStyles.balanceLabel}>{balance}</Text>
            </View>
    </View>
    );
}

export default UserBalanceInfo;