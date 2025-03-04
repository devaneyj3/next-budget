import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import React, { useEffect, useState } from "react";
import { transformMoney } from "@/utils/helper";
import styles from "./BudgetItem.module.scss";

import BudgetModal from "../Modal/Modal";

export default function BudgetItem({ category }) {
	const { transactionsData } = useTransactionContext();
	const [transactionsByCategory, setTransactionsByCategory] = useState([]);

	const [modal, setModal] = useState(false);

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
			<td className={styles.planned}>{transformMoney(2800)}</td>
			<td className={styles.received}>{transformMoney(totalReceived)}</td>
			<BudgetModal
				title={category.name}
				transactions={transactionsByCategory}
				modal={modal}
				toggle={toggle}
				totalRecieved={transformMoney(totalReceived)}
			/>
		</tr>
	);
}
