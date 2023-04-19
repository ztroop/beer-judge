export interface Beer {
    name: string;
    number: string;
    category: string;
    categorynumber: string;
    overallimpression: string;
    aroma: string;
    appearance: string;
    flavor: string;
    mouthfeel: string;
    comments: string;
    history?: string;
    characteristicingredients?: string;
    stylecomparison?: string;
    ibumin?: string;
    ibumax?: string;
    ogmin?: string;
    ogmax?: string;
    fgmin?: string;
    fgmax?: string;
    abvmin?: string;
    abvmax?: string;
    srmmin?: string;
    srmmax?: string;
    commercialexamples?: string;
    tags: string;
    entryinstructions?: string;
    currentlydefinedtypes?: string;
    strengthclassifications?: string;
}

export type RootStackParamList = {
    BeerList: undefined;
    BeerDetails: { beer: Beer };
};
