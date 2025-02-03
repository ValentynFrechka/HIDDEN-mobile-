import { StyleProp, TextStyle } from "react-native";
import { LinearShadowStyle } from "./LinearShadowStyle";

export type ButtonProps = {
    onPress?: () => void;
    title: string;
    fontStyle?: StyleProp<TextStyle>;
    style?: LinearShadowStyle;
    shadowColor?: string;
};