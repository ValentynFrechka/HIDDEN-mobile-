import { ShopScreenIcons } from "../../../icons/ShopScreenIcons";

export class FertilizersDataProvider {
    // Singleton
    private static _instance: FertilizersDataProvider = new FertilizersDataProvider();
    private constructor() {}
    public static get instance(): FertilizersDataProvider {
        return this._instance;
    }

    //  Properties
    public get fertilizers() { 
        return [
            { iconSrc: ShopScreenIcons.fertilizerOneIconSrc, name: "Fertilizer", description: "Fastens your tree growth", price: 2},
            { iconSrc: ShopScreenIcons.fertilizerThreeIconSrc, name: "Fertilizer x3 pack", price: 5},
            { iconSrc: ShopScreenIcons.fertilizerTenIconSrc, name: "Fertilizer x10 pack", price: 16},
        ];
    }
    
}