import NavigationRightIcon from "../../../assets/icons/profileScreen/navigation-right-icon.svg";
import PreferencesIcon from "../../../assets/icons/v2/profileScreen/profileView/preferences-icon.svg";
import NFCManagementIcon from "../../../assets/icons/v2/profileScreen/profileView/nfc-management-icon.svg";
import SupportIcon from "../../../assets/icons/v2/profileScreen/profileView/support-icon.svg";
import LanguageIcon from "../../../assets/icons/v2/profileScreen/preferencesView/language-icon.svg";
import CurrencyIcon from "../../../assets/icons/v2/profileScreen/preferencesView/currency-icon.svg";
import AppThemeIcon from "../../../assets/icons/v2/profileScreen/preferencesView/app-theme-icon.svg";
import ReadIcon from "../../../assets/icons/v2/profileScreen/nfcManagementView/read-icon.svg";
import WriteIcon from "../../../assets/icons/v2/profileScreen/nfcManagementView/write-icon.svg";
import OtherIcon from "../../../assets/icons/v2/profileScreen/nfcManagementView/other-icon.svg";
import GuidesIcon from "../../../assets/icons/v2/profileScreen/supportView/guides-icon.svg";
import FAQIcon from "../../../assets/icons/v2/profileScreen/supportView/faq-icon.svg";
import PrivacyPolicyIcon from "../../../assets/icons/v2/general/leaf-icon.svg";
import TermsNConditionsIcon from "../../../assets/icons/v2/profileScreen/supportView/terms-n-conditions-icon.svg";
import DataUsagePolicyIcon from "../../../assets/icons/v2/profileScreen/supportView/data-usage-policy-icon.svg";

import SvgIcon from "../components/SvgIcon/SvgIcon";
import { SvgSizeType } from "../types/SvgSizeType";
import { SvgColorType } from "../types/SvgColorType";
import { FitImage } from "../../components/FitImage/FitImage";

export const ProfileScreenIcons = {
    NavigationRightIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={NavigationRightIcon} />),

    PreferencesIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={PreferencesIcon} />),
    NFCManagementIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={NFCManagementIcon} />),
    SupportIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={SupportIcon} />),

    LanguageIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={LanguageIcon} />),
    CurrencyIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={CurrencyIcon} />),
    AppThemeIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={AppThemeIcon} />),

    ReadIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={ReadIcon} />),
    WriteIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={WriteIcon} />),
    OtherIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={OtherIcon} />),

    GuidesIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={GuidesIcon} />),
    FAQIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={FAQIcon} />),
    PrivacyPolicyIcon: (({ size, color }: SvgSizeType & SvgColorType) => <SvgIcon size={size} color={color} Icon={PrivacyPolicyIcon} />),
    TermsNConditionsIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={TermsNConditionsIcon} />),
    DataUsagePolicyIcon: (({ size }: SvgSizeType) => <SvgIcon size={size} Icon={DataUsagePolicyIcon} />),
};