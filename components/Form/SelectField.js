export function SelectField({
	name,
	value,
	onChange,
	children,
	required = false,
}) {
	return (
		<select name={name} value={value} onChange={onChange} required={required}>
			{children}
		</select>
	);
}
