import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import type { Drink, SearchFilter } from "../types";


export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios.get(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.ingredient}&c=${filters.category}`
    const { data } = await axios.get(url)
    const result = DrinksAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}

/* export const getDrinks = async (filters: SearchFilter) => {
    try {
        const ingredientUrl = `https://w w w.thecocktaildb. com/api/json/v1/1/filter.php?i=${filters.ingredient}`;
        const { data: ingredientData } = await axios.get(ingredientUrl);
        const ingredientResult = DrinksAPIResponseSchema.safeParse(ingredientData);

        const categoryUrl = `https://w w w.thecocktaildb. com/api/json/v1/1/filter.php?c=${filters.category}`;
        const { data: categoryData } = await axios.get(categoryUrl);
        const categoryResult = DrinksAPIResponseSchema.safeParse(categoryData);

        if (!ingredientResult.success || !categoryResult.success) {
            console.log("Error al recibir los datos");
            return;
        }
        const filteredDrinks = ingredientResult.data.drinks.filter((drink) => categoryResult.data.drinks.some((catDrink) => catDrink.idDrink === drink.idDrink));
        return { drinks: filteredDrinks, };

    } catch (error) {
        console.log(error);
    }
}; */

export async function getDrinkById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios.get(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if (result.success) {
        return result.data
    }
}