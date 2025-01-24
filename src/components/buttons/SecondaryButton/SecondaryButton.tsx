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

const SecondaryButton: React.FC<ButtonProps> = ({
    onPress,
    title,
    fontStyle,
    style,
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
                    inset
                    colors={["white"]}
                    style={getShadowViewStyle(style)}
                    from="bottom"
                    to="top"
                    shadowOffset={{ width: 1, height: -3 }}
                    shadowBlur={4}
                    shadowColor="rgba(120, 25, 167, 1)"
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
