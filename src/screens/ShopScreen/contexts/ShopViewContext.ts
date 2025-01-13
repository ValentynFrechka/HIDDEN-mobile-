import { createContext, useContext } from "react";
import { EShopView } from "../enum/EShopView";

export interface ShopViewContextType {
    shopView: EShopView;
    setShopView: (nextView: EShopView) => void;
}

export const ShopViewContext = createContext<ShopViewContextType | undefined>(undefined);

export const useShopViewContext = () => {
    const context = useContext(ShopViewContext);
    if (!context) {
        throw new Error("useShopViewContext must be used within a ShopViewContextProvider");
    }
    return context;
}