import LeafIcon from "../../../assets/icons/v2/general/leaf-icon.svg";
import TokenIcon from "../../../assets/icons/v2/general/token-icon.svg";
import WaterActionIcon from "../../../assets/icons/v2/homeScreen/water-action-icon.svg";
import FeedActionIcon from "../../../assets/icons/v2/homeScreen/feed-action-icon.svg";
import CareActionIcon from "../../../assets/icons/v2/homeScreen/care-action-icon.svg";
import CrossIcon from "../../../assets/icons/general/cross-icon.svg";

import SvgIcon from "../components/SvgIcon/SvgIcon";
import { SvgSizeType } from "../types/SvgSizeType";
import { SvgColorType } from "../types/SvgColorType";

export const HomeScreenIcons = {
    LeafIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={LeafIcon} />),
    TokenIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TokenIcon} />),
    WaterActionIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={WaterActionIcon} />),
    FeedActionIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={FeedActionIcon} />),
    CareActionIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={CareActionIcon} />),
    CrossIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={CrossIcon} />),
};