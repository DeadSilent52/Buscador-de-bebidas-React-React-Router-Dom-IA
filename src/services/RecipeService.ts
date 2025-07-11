import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema"
import type { Drink, searchFilter } from "../types"
import api from "../lib/axios"

export async function getCategories() {
    const url = `${api.defaults.baseURL}/list.php?c=list`
    const { data } = await api.get(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export async function getRecipes(filters: searchFilter) {
    const url = `${api.defaults.baseURL}/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await api.get(url)
    const result = DrinksAPIResponse.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `${api.defaults.baseURL}/lookup.php?i=${id}`
    const { data } = await api.get(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if (result.success) {
        return result.data
    }
}