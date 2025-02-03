import { Falsy, RecursiveArray, RegisteredStyle, ViewStyle } from "react-native";

export type LinearShadowStyle = ViewStyle &
    (
        | false
        | ""
        | ViewStyle
        | RegisteredStyle<ViewStyle>
        | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>>
        | null
    );