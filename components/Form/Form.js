"use client";
import { useActionState, useState } from "react";
import styles from "./Form.module.scss";
import { postTransaction } from "@/utils/actions";
import { TransactionTypeSelect } from "./TransactionTypeSelect";
import { CategorySelect } from "./CategorySelect";
import { AccountSelect } from "./AccountSelect";
import { InputField } from "./InputField";
import { FormFeedback } from "./FormFeedback";
import { useCategoryContext } from "@/context/CategoryContext/CategoryContext";
import AddCategoryForm from "./addCategoryForm";

export default function TransactionForm() {
	const initialState = { success: false, error: null };
	const [state, formAction] = useActionState(postTransaction, initialState);

	const { categories } = useCategoryContext();

	// UI-only state
	const [type, setType] = useState("exp");
	const [category, setCategory] = useState(categories[0].name);

	return (
		<>
			{categories.length > 0 ? (
				<form className={styles.form} action={formAction}>
					<InputField
						className={styles.input}
						type="number"
						name="amount"
						placeholder="Amount"
						step="0.01"
						required
					/>
					<InputField
						className={styles.input}
						type="text"
						name="description"
						placeholder="Description"
						required
					/>

					<AccountSelect className={styles.input} />

					<TransactionTypeSelect
						className={styles.input}
						type={type}
						category={category}
						setType={setType}
						setDefaultCategory={setCategory}
					/>

					<CategorySelect
						className={styles.input}
						category={category}
						setCategory={setCategory}
						categories={categories}
					/>

					<button type="submit" className={styles.submitButton}>
						Add
					</button>

					<FormFeedback error={state?.error} success={state?.success} />
				</form>
			) : (
				<AddCategoryForm />
			)}
		</>
	);
}
