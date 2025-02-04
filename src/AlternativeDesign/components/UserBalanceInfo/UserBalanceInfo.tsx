import { View, Text, ViewStyle, StyleProp } from "react-native";
import { AppIcons } from "../../icons/AppIcons";
import userBalanceInfoStyles from "./styles/userBalanceInfo.styles";
import { ECurrency } from "./enum/ECurrency";

type UserBalanceInfoProps = {
    balance: number;
    currency: ECurrency;
    style?: StyleProp<ViewStyle>;
}

const getIcon = (currency: ECurrency) => {
    switch (currency) {
        case ECurrency.leafs:
            return (<AppIcons.LeafIcon size={userBalanceInfoStyles.balanceIcon.height} color={"white"} />);
        case ECurrency.tokens:
            return (<AppIcons.TokenIcon size={userBalanceInfoStyles.balanceIcon.height} color={"white"} />);
        default: return (<View/>);
    }
}

const UserBalanceInfo: React.FC<UserBalanceInfoProps> = ({ balance, currency, style }) => {
    return (
        <View style={[userBalanceInfoStyles.balanceContainer, style]}>
            <Text style={userBalanceInfoStyles.balanceTitle}>Your current balance:</Text>

            <View style={userBalanceInfoStyles.balanceSubcontainer}>
                {getIcon(currency)}
                
                <Text style={userBalanceInfoStyles.balanceLabel}>{balance}</Text>
            </View>
    </View>
    );
}

export default UserBalanceInfo;