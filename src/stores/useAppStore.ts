import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipesSlice, type RecipeSliceType } from './recipeSlice';
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice';

export const useAppStore = create<RecipeSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})));