import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string(),
    }))
})

export const SearchFilterSchema = z.object({
    ingredient: z.string().min(1, "El ingrediente es requerido"),
    category: z.string().min(1, "La categoría es requerida"),
})