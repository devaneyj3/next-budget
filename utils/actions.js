"use server";
import { findCategory } from "./categoriesActions";
import { supabase } from "./supabase/server";
import { revalidatePath } from "next/cache";

export async function getTransactions() {
	const { data, error } = await supabase
		.from("Transaction")
		.select("*, Category (name)");

	if (error) {
		return { error: error.message, transactions: [] };
	}
	return {
		transactions: data,
		error: null,
	};
}
// Simulated DB interaction (replace with actual DB call)
export async function postTransaction(prevState, formData) {
	const description = formData.get("description");
	const amount = parseFloat(formData.get("amount"));
	const type = formData.get("type");
	const account = formData.get("account");
	const categoryId = formData.get("categoryId");

	if (!description || isNaN(amount)) {
		return { error: "Invalid input" };
	}

	const date = new Date().toISOString();

	const { data, error } = await supabase
		.from("Transaction")
		.insert([{ description, amount, type, account, categoryId, date }]);

	if (error) throw error;

	// Revalidate cache for UI updates
	revalidatePath("/tracker");

	return { success: true };
}
