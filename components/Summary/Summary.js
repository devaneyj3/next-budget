"use client";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import styles from "./Summary.module.scss";
import { showMonthAndYear, transformMoney } from "@/utils/helper";

export default function Summary() {
	const { totalIncome, totalExpenses, projectedExpenses, projectedIncome } =
		useTransactionContext();
	const remainingBudget = Math.abs(projectedIncome - projectedExpenses);

	// output suplus or deficit budget amount
	const percent = Math.abs(
		100 - (projectedExpenses / projectedIncome) * 100
	).toFixed(1);

	let budgetAmount = (
		<p className={styles.value}>{transformMoney(remainingBudget)}</p>
	);
	if (projectedIncome < projectedExpenses) {
		budgetAmount = (
			<p className={styles.red}>
				{transformMoney(remainingBudget)} ({percent}%) over budget
			</p>
		);
	} else {
		budgetAmount = (
			<p className={styles.green}>
				{transformMoney(remainingBudget)} ({percent}%) left to budget
			</p>
		);
	}

	return (
		<div>
			<h3 className={styles.header}>
				Financial Summary for {showMonthAndYear(Date.now())}
			</h3>
			<div className={styles.row}>
				<div className={styles.card}>
					<p className={styles.label}>Projected Income</p>
					<p className={styles.value}>{transformMoney(projectedIncome)}</p>
				</div>
				<div className={styles.card}>
					<p className={styles.label}>Checking Income</p>
					<p className={styles.value}>{transformMoney(totalIncome)}</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.card}>
					<p className={styles.label}>Planned Expenses</p>
					<p className={styles.value}>{transformMoney(projectedExpenses)}</p>
				</div>
				<div className={styles.card}>
					<p className={styles.label}>Checking Expenses</p>
					<p className={styles.value}>{transformMoney(totalExpenses)}</p>
				</div>
			</div>
			<div className={styles.total}>
				<p className={styles.label}>Remaining Balance</p>
				{budgetAmount}
			</div>
		</div>
	);
}
