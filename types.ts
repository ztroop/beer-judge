interface Measurement {
    minimum: string;
    maximum: string;
}

export interface Beer {
    name: string;
    number: string;
    category: string;
    category_number: string;
    overall_impression: string;
    aroma: string;
    appearance: string;
    flavor: string;
    mouth_feel: string;
    comments: string;
    history?: string;
    characteristic_ingredients?: string;
    style_comparison?: string;
    international_bitterness_units?: Measurement;
    original_gravity?: Measurement;
    final_gravity?: Measurement;
    alcohol_by_volume?: Measurement;
    colour?: Measurement;
    commercial_examples?: string;
    tags: string;
    entry_instructions?: string;
    currently_defined_types?: string;
    strength_classifications?: string;
}

export type RootStackParamList = {
    MainPage: undefined;
    DetailsPage: { beer: Beer };
};
