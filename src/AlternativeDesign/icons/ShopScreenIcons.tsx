import LeafIcon from "../../../assets/icons/v2/general/leaf-icon.svg";
import TokenIcon from "../../../assets/icons/v2/general/token-icon.svg";
import MinusIcon from "../../../assets/icons/shopScreen/fertilizers/minus-icon.svg";
import PlusIcon from "../../../assets/icons/shopScreen/fertilizers/plus-icon.svg";
import SadfaceIcon from "../../../assets/icons/v2/shopScreen/sadface-icon.svg";

import SvgIcon from "../components/SvgIcon/SvgIcon";
import { SvgSizeType } from "../types/SvgSizeType";
import { SvgColorType } from "../types/SvgColorType";

export const ShopScreenIcons = {
    LeafIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={LeafIcon} />),
    TokenIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TokenIcon} />),
    MinusIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={MinusIcon} />),
    PlusIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={PlusIcon} />),
    treeExampleImageSrc: require("../../../assets/icons/shopScreen/skin-example-icon.png"),
    SadfaceIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={SadfaceIcon} />),
    fertilizerOneIconSrc: require("../../../assets/icons/shopScreen/fertilizers/fertilizer-one-icon.png"),
    fertilizerThreeIconSrc: require("../../../assets/icons/shopScreen/fertilizers/fertilizer-three-icon.png"),
    fertilizerTenIconSrc: require("../../../assets/icons/shopScreen/fertilizers/fertilizer-ten-icon.png"),
};