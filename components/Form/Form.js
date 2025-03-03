"use client";
import { useActionState, useEffect, useState } from "react";
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

	//state of categories options based on selected type
	const [filteredCategories, setFilteredCategories] = useState([]);

	// UI-only state
	const [type, setType] = useState("exp");
	const [category, setCategory] = useState(categories[0].name);

	useEffect(() => {
		const filterCategories = () => {
			setFilteredCategories(categories.filter((cat) => cat.type === type));
		};
		filterCategories();
	}, [type]);

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
						categories={filteredCategories}
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
