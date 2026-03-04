import type { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeService";
import type { Categories, SearchFilter } from "../types";

export type RecipeSliceType = {
    categories: Categories,
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories });
    },
    searchRecipes: async (filters) => {
        // TODO: Implement recipe search logic
        console.log(filters);
    }
});