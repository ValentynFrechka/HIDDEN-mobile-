import { mySkinsDataMock, shopSkinsDataMock } from "../mocks/treeSkinsDataMock";

export class TreeSkinsDataProvider {
    // Singleton
    private static _instance: TreeSkinsDataProvider = new TreeSkinsDataProvider();
    private constructor() {}
    public static get instance(): TreeSkinsDataProvider {
        return this._instance;
    }

    // Mocks
    public get shopSkinsMock() {
        return shopSkinsDataMock;
    }

    public get mySkinsMock() {
        return mySkinsDataMock;
    }

    //  Properties
    public get shopSkins() { 
        // get skins list
        return [];
    }

    public get mySkins() {
        // get skins list
        return [];
    }
    
}