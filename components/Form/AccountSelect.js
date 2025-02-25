import { SelectField } from "./SelectField";

export function AccountSelect() {
	return (
		<SelectField name="account" defaultValue="Checking">
			<option value="Checking">Checking</option>
			<option value="Savings">Savings</option>
		</SelectField>
	);
}
