import { createContext, useContext } from "react";
import { ERewardsView } from "../enum/ERewardsView";

export interface RewardsViewContextType {
    rewardsView: ERewardsView;
    setRewardsView: (nextView: ERewardsView) => void;
}

export const RewardsViewContext = createContext<RewardsViewContextType | undefined>(undefined);

export const useRewardsViewContext = () => {
    const context = useContext(RewardsViewContext);
    if (!context) {
        throw new Error("useRewardsViewContext must be used within a RewardsViewContextProvider");
    }
    return context;
}