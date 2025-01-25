import styles from "./Summary.module.scss";

export default function Summary({ income, expenses }) {
	const balance = income - expenses;

	return (
		<div className={styles.summary}>
			<div>Total Income: ${income}</div>
			<div>Total Expenses: ${expenses}</div>
			<div>Remaining Balance: ${balance}</div>
		</div>
	);
}
