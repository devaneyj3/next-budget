"use server";

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

	// Example: Save transaction (replace with DB insert)
	console.log("Saving transaction:", {
		description,
		amount,
		type,
		account,
		category,
	});

	// Revalidate cache for UI updates
	revalidatePath("/");

	return { success: true };
}
