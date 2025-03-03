"use client";
import { useActionState } from "react";
import styles from "./Form.module.scss";
import { postCategory } from "@/utils/categoriesActions";
import { FormFeedback } from "./FormFeedback";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

export default function AddCategoryForm() {
	const initialState = { success: false, error: null };
	const [state, formAction] = useActionState(postCategory, initialState);

	return (
		<form className={styles.form} action={formAction}>
			<InputField
				className={styles.input}
				type="text"
				name="name"
				placeholder="Enter category name"
				required
			/>
			<select
				className={styles.input}
				type="text"
				name="type"
				placeholder="Enter category type"
				required>
				<option value="inc">Income</option>
				<option value="exp">Expense</option>
			</select>

			<button type="submit" className={styles.submitButton}>
				Add Category
			</button>

			<FormFeedback success={state?.success} error={state?.error} />
		</form>
	);
}
