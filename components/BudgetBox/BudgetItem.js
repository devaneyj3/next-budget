import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import React, { useEffect, useState } from "react";
import { transformMoney } from "@/utils/helper";
import styles from "./BudgetItem.module.scss";

import BudgetModal from "../Modal/Modal";

export default function BudgetItem({ category, type, allocations }) {
	const { transactionsData, projectedIncome } = useTransactionContext();
	const [transactionsByCategory, setTransactionsByCategory] = useState([]);

	const [modal, setModal] = useState(false);

	let expenseAllocation = 0;
	if (type != "Income") {
		const itemPercent = allocations[category.name] / 100;
		expenseAllocation = transformMoney(itemPercent * projectedIncome);
	}

	const toggle = () => setModal(!modal);

	useEffect(() => {
		const getTransactionsByCategory = (categoryName) => {
			const filteredTransactions = transactionsData.filter((transaction) => {
				const isMatch =
					transaction.account === "Checking" &&
					transaction.Category.name === categoryName;
				return isMatch;
			});
			return filteredTransactions;
		};

		setTransactionsByCategory(getTransactionsByCategory(category.name));
	}, [category, transactionsData]);

	// Use `.reduce()` to sum the total amount of transactions in this category
	const totalReceived = transactionsByCategory.reduce(
		(acc, transaction) => acc + transaction.amount,
		0
	);

	return (
		<tr className={styles.row} onClick={() => toggle()}>
			<td className={styles.categoryName}>{category.name}</td>
			<td className={styles.planned}>
				{type === "Income"
					? transformMoney(projectedIncome)
					: expenseAllocation}
			</td>
			<td className={styles.received}>{transformMoney(totalReceived)}</td>
			<BudgetModal
				title={category.name}
				transactions={transactionsByCategory}
				modal={modal}
				toggle={toggle}
				totalRecieved={transformMoney(totalReceived)}
				projectedIncome={projectedIncome}
			/>
		</tr>
	);
}
