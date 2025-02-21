"use client";
import { useFormState } from "react-dom";
import { useState } from "react";
import styles from "./Form.module.scss";
import { expenseCategories, incomeCategories } from "@/utils/categories";
import { postTransaction } from "@/utils/actions";

export default function Form() {
	const initialState = { success: false, error: null };
	const [state, formAction] = useFormState(postTransaction, initialState);

	// ✅ Use React State for UI-only interactions
	const [type, setType] = useState("exp"); // Default to expense
	const [category, setCategory] = useState(expenseCategories[0]); // Default category

	// ✅ Change category list dynamically based on `type`
	const categories = type === "exp" ? expenseCategories : incomeCategories;

	return (
		<form className={styles.form} action={formAction}>
			<input type="number" name="amount" placeholder="Amount" required />
			<input
				type="text"
				name="description"
				placeholder="Description"
				required
			/>

			<select name="account">
				<option value="Checking">Checking</option>
				<option value="Savings">Savings</option>
			</select>

			{/* ✅ Controlled select for transaction type */}
			<select
				name="type"
				value={type}
				onChange={(e) => {
					setType(e.target.value);
					setCategory(
						e.target.value === "exp"
							? expenseCategories[0]
							: incomeCategories[0]
					);
				}}>
				<option value="inc">Income</option>
				<option value="exp">Expense</option>
			</select>

			{/* ✅ Controlled select for category, updates dynamically */}
			<select
				name="category"
				value={category}
				onChange={(e) => setCategory(e.target.value)}>
				{categories.map((cat, index) => (
					<option key={index} value={cat}>
						{cat}
					</option>
				))}
			</select>

			<button type="submit">Add</button>

			{/* ✅ Show success/error messages */}
			{state?.error && <p className="error">{state.error}</p>}
			{state?.success && <p className="success">Transaction added!</p>}
		</form>
	);
}
