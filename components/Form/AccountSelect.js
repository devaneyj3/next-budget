import { SelectField } from "./SelectField";

export function AccountSelect({ className }) {
	return (
		<SelectField className={className} name="account" defaultValue="Checking">
			<option value="Checking">Checking</option>
			<option value="Savings">Savings</option>
		</SelectField>
	);
}
