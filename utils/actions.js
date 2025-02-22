"use server";
import { supabase } from "./supabase/server";
import { revalidatePath } from "next/cache";

// Simulated DB interaction (replace with actual DB call)
export async function postTransaction(prevState, formData) {
	const description = formData.get("description");
	const amount = parseFloat(formData.get("amount"));
	const type = formData.get("type");
	const account = formData.get("account");
	const category = formData.get("category");

	if (!description || isNaN(amount)) {
		return { error: "Invalid input" };
	}

	const { data, error } = await supabase
		.from("Transaction")
		.insert([{ description, amount, type, account, category }]);

	if (error) throw error;
	console.log(error);

	console.log(data);

	// Revalidate cache for UI updates
	revalidatePath("/");

	return { success: true };
}
