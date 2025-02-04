import TransactionSuccessfulIcon from "../../../assets/icons/v2/transactionScreen/transaction-successful-icon.svg";
import TokenIcon from "../../../assets/icons/v2/general/token-icon.svg";

import SvgIcon from "../components/SvgIcon/SvgIcon";
import { SvgSizeType } from "../types/SvgSizeType";
import { SvgColorType } from "../types/SvgColorType";

export const TransactionScreenIcons = {
    TokenIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TokenIcon} />),
    TransactionSuccessfulIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TransactionSuccessfulIcon} />),
};