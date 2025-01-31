import { AppIcons } from "../../../icons/AppIcons";
import { SCREEN_NAMES } from "../../../../constants/ui";
import { ReactNode } from "react";
import { appDimensions } from "../../../App/styles/app.styles";
export const useTabBarIconRenderer = () => {
    class TabBarIconRenderer {
        private constructor() {}
        static instance = new TabBarIconRenderer();

        public renderActiveIcon(route: string): ReactNode {
            switch (route) {
                case SCREEN_NAMES.HOME:
                    return (
                        <AppIcons.HomeActiveIcon
                            size={appDimensions.navigationButtonSize + 5}
                        />
                    );
                case SCREEN_NAMES.SHOP:
                    return (
                        <AppIcons.ShopActiveIcon
                            size={appDimensions.navigationButtonSize + 5}
                        />
                    );
                case SCREEN_NAMES.TRANSACTION:
                    return (
                        <AppIcons.TransactionActiveIcon
                            size={appDimensions.navigationButtonSize + 5}
                        />
                    );
                case SCREEN_NAMES.REWARDS:
                    return (
                        <AppIcons.RewardsActiveIcon
                            size={appDimensions.navigationButtonSize + 5}
                        />
                    );
                case SCREEN_NAMES.PROFILE:
                    return (
                        <AppIcons.ProfileIcon
                            size={appDimensions.navigationButtonSize + 5}
                        />
                    );
            }
        }
    }

    return TabBarIconRenderer.instance;
};
