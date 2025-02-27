export function SelectField({
	name,
	value,
	onChange,
	children,
	className,
	required = false,
}) {
	return (
		<select
			className={className}
			name={name}
			value={value}
			onChange={onChange}
			required={required}>
			{children}
		</select>
	);
}
