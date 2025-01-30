import { View } from "react-native";
import { SvgProps } from "react-native-svg";

type SvgIconType = {
    Icon: React.FC<SvgProps>;
    size: number;
}

const SvgIcon = ({ Icon, size }: SvgIconType) => {
    return (
        <View style={{width: size, height: size}}>
            <Icon width={"100%"} height={"100%"}/>
        </View>
    );
};

export default SvgIcon;