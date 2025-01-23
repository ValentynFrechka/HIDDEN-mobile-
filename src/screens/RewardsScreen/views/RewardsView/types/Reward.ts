import { SvgProps } from "react-native-svg";

export type Reward = {
    icon: React.FC<SvgProps>;
    title: string;
    description: string;
    size: number;
}