import HomeIcon from "../../../assets/icons/v2/navigationBar/home-icon.svg";
import HomeActiveIcon from "../../../assets/icons/v2/navigationBar/home-active-icon.svg";
import ShopIcon from "../../../assets/icons/v2/navigationBar/shop-icon.svg";
import TransactionIcon from "../../../assets/icons/v2/navigationBar/transaction-icon.svg";
import RewardsIcon from "../../../assets/icons/v2/navigationBar/rewards-icon.svg";
import RewardsActiveIcon from "../../../assets/icons/v2/navigationBar/rewards-active-icon.svg";
import { FitImage } from "../../components/FitImage/FitImage";
import SvgIcon from "../components/SvgIcon/SvgIcon";
import { SvgSizeType } from "../types/SvgSizeType";

export const AppIcons: {[key: string]: React.FC | React.FC<SvgSizeType>} = {
    ProfileIcon: (() => <FitImage src={require("../../../assets/icons/navigationBar/profile-icon.png")}/>),
    HomeIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={HomeIcon} />),
    HomeActiveIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={HomeActiveIcon} />),
    ShopIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={ShopIcon} />),
    TransactionIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TransactionIcon} />),
    RewardsIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={RewardsIcon} />),
    RewardsActiveIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={RewardsActiveIcon} />),
};