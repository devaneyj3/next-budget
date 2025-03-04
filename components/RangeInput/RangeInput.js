const RangeInput = ({ category, value, max, onChange }) => (
	<div>
		<label>{value}%</label>
		<input
			type="range"
			min="0"
			max={max}
			value={value}
			step="1"
			onChange={(e) => onChange(category.name, Number(e.target.value))}
		/>
	</div>
);

export default RangeInput;
