import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type GradientProps = {
    style?: StyleProp<ViewStyle>
    children?: ReactElement[] | ReactElement;
}

export const Gradient: React.FC<GradientProps> = ({ style, children }) => {
    return (
        <LinearGradient 
            style={style}
            colors={[
                "rgba(182, 208, 247, 1)",
                "rgba(238, 244, 225, 1)", 
                "rgba(250, 252, 254, 1)", 
                "rgba(226, 193, 249, 1)", 
                "rgba(191, 209, 249, 1)",  
                "rgba(250, 252, 254, 1)",  
                "rgba(186, 228, 226, 1)",  
                "rgba(140, 107, 227, 1)",
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