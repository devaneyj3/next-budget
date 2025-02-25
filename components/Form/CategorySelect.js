import { SelectField } from "./SelectField";

export function CategorySelect({ category, setCategory, categories }) {
	return (
		<SelectField
			name="categoryId"
			value={category.id}
			onChange={(e) => setCategory(e.target.value)}>
			{categories.map((cat, index) => (
				<option key={index} value={cat.id}>
					{cat.name}
				</option>
			))}
		</SelectField>
	);
}
