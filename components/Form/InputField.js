export function InputField({
	type = "text",
	name,
	placeholder,
	step,
	required = false,
	className,
}) {
	return (
		<input
			className={className}
			type={type}
			name={name}
			placeholder={placeholder}
			step={step}
			required={required}
		/>
	);
}
