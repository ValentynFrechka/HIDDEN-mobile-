import {
    TouchableOpacity,
    Text,
    View,
} from "react-native";
import { LinearShadowView } from "react-native-inner-shadow";
import { buttonConstants } from "../constants/buttonConstants";
import { LinearShadowStyle } from "../types/LinearShadowStyle";
import { ButtonProps } from "../types/ButtonProps";
import primaryButtonStyles from "./styles/primaryButton.styles";
import { unwrap } from "../../../../util/unwrap";
import { Color } from "@shopify/react-native-skia";

const PrimaryButton: React.FC<ButtonProps> = ({
    onPress,
    title,
    fontStyle,
    style,
    shadowColor = "rgba(146, 106, 169, 1)",
    children
}) => {
    function getButtonStyle(
        _style: LinearShadowStyle | undefined
    ): LinearShadowStyle {
        if (!_style) return primaryButtonStyles.button;

        const combinedStyle = [
            primaryButtonStyles.button,
            _style,
            buttonConstants.NON_OVERRIDABLE_STYLES.BUTTON,
        ] as LinearShadowStyle;
        return combinedStyle;
    }

    function getShadowViewStyle(
        _style: LinearShadowStyle | undefined
    ): LinearShadowStyle {
        if (!_style) return primaryButtonStyles.shadowView;

        const combinedStyle = [
            primaryButtonStyles.shadowView,
            _style,
        ] as LinearShadowStyle;
        combinedStyle.borderRadius = _style.borderRadius
            ? _style.borderRadius
            : primaryButtonStyles.shadowView.borderRadius;
        return combinedStyle;
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={getButtonStyle(style)}>
                <LinearShadowView
                    //inset
                    colors={[unwrap(style?.backgroundColor as Color, "rgba(171,131,195,1)")]}
                    style={getShadowViewStyle(style)}
                    from="bottom"
                    to="top"
                    shadowOffset={{ width: 0, height: 3 }}
                    shadowBlur={0}
                    shadowColor={shadowColor}
                >
                    {
                    children ? 
                        children 
                        : 
                        <Text style={[primaryButtonStyles.text, fontStyle]}>
                            {title}
                        </Text>
                    }
                </LinearShadowView>
            </View>
        </TouchableOpacity>
    );
};

export default PrimaryButton;
