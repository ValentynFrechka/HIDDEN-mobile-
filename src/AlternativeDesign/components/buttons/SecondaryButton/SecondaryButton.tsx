import {
    TouchableOpacity,
    Text,
    View,
} from "react-native";
import { LinearShadowView } from "react-native-inner-shadow";
import { buttonConstants } from "../constants/buttonConstants";
import { LinearShadowStyle } from "../types/LinearShadowStyle";
import { ButtonProps } from "../types/ButtonProps";
import secondaryButtonStyles from "./styles/secondaryButton.styles";
import { unwrap } from "../../../../util/unwrap";
import { Color } from "@shopify/react-native-skia";

const SecondaryButton: React.FC<ButtonProps> = ({
    onPress,
    title,
    fontStyle,
    style,
    shadowColor = "rgba(203, 155, 112, 1)",
}) => {
    function getButtonStyle(
        _style: LinearShadowStyle | undefined
    ): LinearShadowStyle {
        if (!_style) return secondaryButtonStyles.button;

        const combinedStyle = [
            secondaryButtonStyles.button,
            _style,
            buttonConstants.NON_OVERRIDABLE_STYLES.BUTTON,
        ] as LinearShadowStyle;
        return combinedStyle;
    }

    function getShadowViewStyle(
        _style: LinearShadowStyle | undefined
    ): LinearShadowStyle {
        if (!_style) return secondaryButtonStyles.shadowView;

        const combinedStyle = [
            secondaryButtonStyles.shadowView,
            _style,
        ] as LinearShadowStyle;
        combinedStyle.borderRadius = _style.borderRadius
            ? _style.borderRadius
            : secondaryButtonStyles.shadowView.borderRadius;
        return combinedStyle;
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={getButtonStyle(style)}>
                <LinearShadowView
                    //inset
                    colors={[unwrap(style?.backgroundColor as Color, "rgba(247,196,151,1)",)]}
                    style={getShadowViewStyle(style)}
                    from="bottom"
                    to="top"
                    shadowOffset={{ width: 0, height: 3 }}
                    shadowBlur={0}
                    shadowColor={shadowColor}
                >
                    <Text style={[secondaryButtonStyles.text, fontStyle]}>
                        {title}
                    </Text>
                </LinearShadowView>
            </View>
        </TouchableOpacity>
    );
};

export default SecondaryButton;
