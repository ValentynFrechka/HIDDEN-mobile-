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
            { iconPath: "path/to/icon", name: "Fertilizer", description: "Fastens your tree growth", price: 2},
            { iconPath: "path/to/icon", name: "Fertilizer x3 pack", price: 5},
            { iconPath: "path/to/icon", name: "Fertilizer x10 pack", price: 16},
        ];
    }
    
}