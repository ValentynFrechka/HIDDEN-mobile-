import { View, Text } from "react-native";
import { FitImage } from "../../../../components/FitImage/FitImage";
import { TransactionScreenIcons } from "../../../../icons/TransactionScreen.icons";
import userBalanceInfoStyles from "./styles/userBalanceInfo.styles";

type UserBalanceInfoProps = {
    balance: number;
}

const UserBalanceInfo: React.FC<UserBalanceInfoProps> = ({ balance }) => {
    return (
        <View style={userBalanceInfoStyles.balanceContainer}>
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