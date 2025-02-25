"use client";
import { useActionState } from "react";
import styles from "./Form.module.scss";
import { postCategory } from "@/utils/categoriesActions";
import { FormFeedback } from "./FormFeedback";

export default function AddCategoryForm() {
	const initialState = { success: false, error: null };
	const [state, formAction] = useActionState(postCategory, initialState);

	return (
		<form className={styles.form} action={formAction}>
			<div className={styles.field}>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter category name"
					required
				/>
			</div>

			<button type="submit">Add Category</button>

			<FormFeedback success={state?.success} error={state?.error} />
		</form>
	);
}
