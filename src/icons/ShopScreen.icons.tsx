import SadfaceIcon from "../../assets/icons/shopScreen/sadface-icon.svg";
import MinusIcon from "../../assets/icons/shopScreen/fertilizers/minus-icon.svg";
import PlusIcon from "../../assets/icons/shopScreen/fertilizers/plus-icon.svg";

import { SvgColorType } from "../AlternativeDesign/types/SvgColorType";
import { SvgSizeType } from "../AlternativeDesign/types/SvgSizeType";
import SvgIcon from "../AlternativeDesign/components/SvgIcon/SvgIcon";

export const ShopScreenIcons = {
    leafIcon: require("../../assets/icons/general/leaf-icon.png"),
    treeExampleImage: require("../../assets/icons/shopScreen/skin-example-icon.png"),
    SadfaceIcon: SadfaceIcon,
    fertilizerOneIcon: require("../../assets/icons/shopScreen/fertilizers/fertilizer-one-icon.png"),
    fertilizerThreeIcon: require("../../assets/icons/shopScreen/fertilizers/fertilizer-three-icon.png"),
    fertilizerTenIcon: require("../../assets/icons/shopScreen/fertilizers/fertilizer-ten-icon.png"),
    MinusIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={MinusIcon} />),
    PlusIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={PlusIcon} />),
};