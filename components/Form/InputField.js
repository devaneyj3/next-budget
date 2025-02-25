export function InputField({
	type = "text",
	name,
	placeholder,
	step,
	required = false,
}) {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			step={step}
			required={required}
		/>
	);
}
