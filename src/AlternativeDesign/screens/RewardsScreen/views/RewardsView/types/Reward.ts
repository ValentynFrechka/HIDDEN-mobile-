import { SvgProps } from "react-native-svg";
import { SvgSizeType } from "../../../../../types/SvgSizeType";
import { SvgColorType } from "../../../../../types/SvgColorType";

export type Reward = {
    icon: ({ size, color }: SvgSizeType & SvgColorType) => React.JSX.Element;
    title: string;
    description: string;
    size: number;
}