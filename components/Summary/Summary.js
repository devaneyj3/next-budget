"use client";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import styles from "./Summary.module.scss";

export default function Summary() {
	const { totalIncome, totalExpenses, totalBalance } = useTransactionContext();
	return (
		<div className={styles.summary}>
			<p className={styles.income}>Projected Income: 0</p>
			<p className={styles.income}>Checking Income: {totalIncome}</p>
			<p className={styles.expenses}>Planned Expenses: 0</p>
			<p className={styles.expenses}>Checking Expenses: {totalExpenses}</p>
			<p>Remaining Balance: {totalBalance}</p>
		</div>
	);
}
