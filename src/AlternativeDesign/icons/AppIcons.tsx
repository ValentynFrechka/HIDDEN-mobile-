import ProfileIcon from "../../../assets/icons/v2/navigationBar/profile-icon.svg";
import HomeIcon from "../../../assets/icons/v2/navigationBar/home-icon.svg";
import HomeActiveIcon from "../../../assets/icons/v2/navigationBar/home-active-icon.svg";
import ShopIcon from "../../../assets/icons/v2/navigationBar/shop-icon.svg";
import ShopActiveIcon from "../../../assets/icons/v2/navigationBar/shop-active-icon.svg";
import TransactionIcon from "../../../assets/icons/v2/navigationBar/transaction-icon.svg";
import TransactionActiveIcon from "../../../assets/icons/v2/navigationBar/transaction-active-icon.svg";
import RewardsIcon from "../../../assets/icons/v2/navigationBar/rewards-icon.svg";
import RewardsActiveIcon from "../../../assets/icons/v2/navigationBar/rewards-active-icon.svg";
import LeafIcon from "../../../assets/icons/v2/general/leaf-icon.svg";
import TokenIcon from "../../../assets/icons/v2/general/token-icon.svg";

import SvgIcon from "../components/SvgIcon/SvgIcon";
import { SvgSizeType } from "../types/SvgSizeType";
import { SvgColorType } from "../types/SvgColorType";

export const AppIcons: {[key: string]: React.FC | React.FC<SvgSizeType>} = {
    ProfileIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={ProfileIcon} />),
    HomeIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={HomeIcon} />),
    HomeActiveIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={HomeActiveIcon} />),
    ShopIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={ShopIcon} />),
    ShopActiveIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={ShopActiveIcon} />),
    TransactionIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TransactionIcon} />),
    TransactionActiveIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TransactionActiveIcon} />),
    RewardsIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={RewardsIcon} />),
    RewardsActiveIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={RewardsActiveIcon} />),
    LeafIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={LeafIcon} />),
    TokenIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TokenIcon} />),
};