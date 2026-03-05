import type { StateCreator } from "zustand";
import { getCategories, getDrinkById, getRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal: boolean,
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories });
    },
    modal: true,
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters);
        set({ drinks });
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getDrinkById(id);
        set({ selectedRecipe, modal: true });
    },
    closeModal: () => set({ modal: false, selectedRecipe: {} as Recipe })
});