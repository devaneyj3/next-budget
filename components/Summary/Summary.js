"use client";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import styles from "./Summary.module.scss";
import { transformMoney } from "@/utils/helper";

export default function Summary() {
	const { totalIncome, totalExpenses, totalBalance } = useTransactionContext();
	return (
		<div className={styles.summary}>
			<h3 className={styles.header}>Financial Summary</h3>
			<div className={styles.row}>
				<div className={styles.card}>
					<p className={styles.label}>Projected Income</p>
					<p className={styles.value}>0</p>
				</div>
				<div className={styles.card}>
					<p className={styles.label}>Checking Income</p>
					<p className={styles.value}>{transformMoney(totalIncome)}</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.card}>
					<p className={styles.label}>Planned Expenses</p>
					<p className={styles.value}>0</p>
				</div>
				<div className={styles.card}>
					<p className={styles.label}>Checking Expenses</p>
					<p className={styles.value}>{transformMoney(totalExpenses)}</p>
				</div>
			</div>
			<div className={styles.total}>
				<p className={styles.label}>Remaining Balance</p>
				<p className={styles.value}>{transformMoney(totalBalance)}</p>
			</div>
		</div>
	);
}
