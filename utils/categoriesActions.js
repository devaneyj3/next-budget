"use server";
import { supabase } from "./supabase/server";
import { revalidatePath } from "next/cache";

export async function getCategoies() {
	const { data, error } = await supabase.from("Category").select("*");

	if (error) {
		return { error: error.message, categories: [] };
	}
	return {
		categories: data,
		error: null,
	};
}
