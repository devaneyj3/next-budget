import { SelectField } from "./SelectField";

export function TransactionTypeSelect({
	type,
	setType,
	setDefaultCategory,
	category,
	className,
}) {
	const handleChange = (e) => {
		const newType = e.target.value;
		setType(newType);
		setDefaultCategory(category);
	};

	return (
		<SelectField
			className={className}
			name="type"
			value={type}
			onChange={handleChange}>
			<option value="inc">Income</option>
			<option value="exp">Expense</option>
		</SelectField>
	);
}

// Reuse SelectField from the previous file.
