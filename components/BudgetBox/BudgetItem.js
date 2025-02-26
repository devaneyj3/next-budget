import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import React, { useEffect, useState } from "react";
import { transformMoney } from "@/utils/helper";

export default function BudgetItem({ category }) {
	const { transactionsData } = useTransactionContext();
	const [transactionsByCategory, setTransactionsByCategory] = useState([]);

	useEffect(() => {
		const getTransactionsByCategory = (category) => {
			console.log(category);
			return transactionsData.filter(
				(transaction) =>
					transaction.account === "Checking" &&
					transaction.Category.name === category
			);
		};

		setTransactionsByCategory(getTransactionsByCategory(category.name));
	}, [category, transactionsData]);

	// ✅ Use `.reduce()` to sum the total amount of transactions in this category
	const totalReceived = transactionsByCategory.reduce(
		(acc, transaction) => acc + transaction.amount,
		0
	);
	return (
		<tr>
			<th>{category.name}</th>
			<th>2800</th>
			<th>{transformMoney(totalReceived)}</th>
		</tr>
	);
}
