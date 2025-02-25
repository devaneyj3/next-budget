import { getCategories } from "@/utils/categoriesActions";

// Fetch categories
export async function fetchCategories() {
	const { categories, error } = await getCategories();

	if (error) {
		return { error: error.message, categories: [] };
	}

	return { categories: categories, error: null };
}
