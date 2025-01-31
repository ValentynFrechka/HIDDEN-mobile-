import { View } from "react-native";
import { SvgProps } from "react-native-svg";

type SvgIconType = {
    Icon: React.FC<SvgProps & { style?: { color?: string } }>;
    color?: string;
    size: number;
}

const SvgIcon = ({ Icon, size, color }: SvgIconType) => {
    return (
        <View style={{width: size, height: size}}>
            <Icon width={"100%"} height={"100%"} style={{color: color}} />
        </View>
    );
};

export default SvgIcon;