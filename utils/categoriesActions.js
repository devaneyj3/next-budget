"use server";
import { supabase } from "./supabase/server";
import { revalidatePath } from "next/cache";

export async function getCategories() {
	const { data, error } = await supabase.from("Category").select("*");

	if (error) {
		return { error: error.message, categories: [] };
	}
	return {
		categories: data,
		error: null,
	};
}
export async function findCategory(categoryID) {
	const { data, nameError } = await supabase
		.from("Category")
		.select("*")
		.eq("id", categoryID);

	if (nameError) {
		return { nameError: error.message, category: null };
	}
	return {
		category: data[0].name,
		nameError: null,
	};
}

// Simulated DB interaction (replace with actual DB call)
export async function postCategory(prevState, formData) {
	const name = formData.get("name");
	const type = formData.get("type");

	if (!name) {
		return { error: "Invalid input" };
	}

	const { data, error } = await supabase
		.from("Category")
		.insert([{ name, type }]);

	if (error) throw error;

	// Revalidate cache for UI updates
	revalidatePath("/");

	return { success: true };
}
