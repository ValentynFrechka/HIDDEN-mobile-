import CrossIcon from "../../../assets/icons/general/cross-icon.svg";
import AvatarExampleIcon from "../../../assets/avatar-example-icon.svg";
import TokenIcon from "../../../assets/icons/v2/general/token-icon.svg";
import FireRewardIcon from "../../../assets/icons/v2/rewardsScreen/fire-reward-icon.svg";
import StarRewardIcon from "../../../assets/icons/v2/rewardsScreen/star-reward-icon.svg";
import TopRewardIcon from "../../../assets/icons/v2/rewardsScreen/top-reward-icon.svg";
import TreeRewardIcon from "../../../assets/icons/v2/rewardsScreen/tree-reward-icon.svg";
import ShareIcon from "../../../assets/icons/v2/rewardsScreen/share-icon.svg";

import SvgIcon from "../components/SvgIcon/SvgIcon";
import { SvgSizeType } from "../types/SvgSizeType";
import { SvgColorType } from "../types/SvgColorType";
import { FitImage } from "../../components/FitImage/FitImage";

export const RewardsScreenIcons = {
    CrossIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={CrossIcon} />),
    AvatarExampleIcon: (({ size }: SvgSizeType) => <FitImage src={require("../../../assets/avatar-example.png")} />),
    TokenIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={TokenIcon} />),

    FireRewardIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={FireRewardIcon} />),
    StarRewardIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={StarRewardIcon} />),
    TopRewardIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={TopRewardIcon} />),
    TreeRewardIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={TreeRewardIcon} />),
    ShareIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={ShareIcon} />),
};