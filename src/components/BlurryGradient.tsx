import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type BlurryGradientProps = {
    style?: StyleProp<ViewStyle>
    children?: ReactElement[] | ReactElement;
}

export const BlurryGradient: React.FC<BlurryGradientProps> = ({ style, children }) => {
    return (
        <LinearGradient 
            style={style}
            colors={[
                "rgba(182, 208, 247, 0.3)",
                "rgba(238, 244, 225, 0.3)", 
                "rgba(250, 252, 254, 0.3)", 
                "rgba(226, 193, 249, 0.3)", 
                "rgba(191, 209, 249, 0.3)",  
                "rgba(250, 252, 254, 0.3)",  
                "rgba(186, 228, 226, 0.3)",  
                "rgba(140, 107, 227, 0.3)",
            ]}
            start={{
                x: 0,
                y: 0.5
            }}
            end={{
                x: 1,
                y: 0.5,
            }}
        >
            {children}
        </LinearGradient>
    )
}