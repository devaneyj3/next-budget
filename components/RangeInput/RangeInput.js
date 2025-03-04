import styles from "./RangeInput.module.scss";
const RangeInput = ({ category, value, max, onChange }) => (
	<>
		<input
			type="range"
			min="0"
			max={max}
			value={value}
			step="1"
			onChange={(e) => onChange(category.name, Number(e.target.value))}
		/>
		<span className={styles.percent}>{value}%</span>
	</>
);

export default RangeInput;
