import { SelectField } from "./SelectField";
import { expenseCategories, incomeCategories } from "@/utils/categories";

export function TransactionTypeSelect({ type, setType, setDefaultCategory }) {
	const handleChange = (e) => {
		const newType = e.target.value;
		setType(newType);
		setDefaultCategory(
			newType === "exp" ? expenseCategories[0] : incomeCategories[0]
		);
	};

	return (
		<SelectField name="type" value={type} onChange={handleChange}>
			<option value="inc">Income</option>
			<option value="exp">Expense</option>
		</SelectField>
	);
}

// Reuse SelectField from the previous file.
