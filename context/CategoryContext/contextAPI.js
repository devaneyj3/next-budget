import { getCategoies } from "@/utils/categoriesActions";

// Fetch categories
export async function fetchCategories() {
	const { categories, error } = await getCategoies();

	if (error) {
		return { error: error.message, categories: [] };
	}

	return { categories: categories, error: null };
}
