import React, { useEffect, useState } from "react";
import styles from "./BudgetBox.module.scss";
import { Table } from "reactstrap";
import { useTransactionContext } from "@/context/transactionContext";
import { transformMoney } from "@/utils/helper";

export default function BudgetBox({ title, item }) {
	const { transactionsData } = useTransactionContext();
	const [transactionsByCategory, setTransactionsByCategory] = useState([]);

	useEffect(() => {
		const getTransactionsByCategory = (category) => {
			return transactionsData.filter(
				(transaction) =>
					transaction.Account === "Checking" &&
					transaction.Category === category
			);
		};

		setTransactionsByCategory(getTransactionsByCategory(title));
	}, [title, item, transactionsData]);

	// ✅ Use `.reduce()` to sum the total amount of transactions in this category
	const totalReceived = transactionsByCategory.reduce(
		(acc, transaction) => acc + transaction.Amount,
		0
	);

	return (
		<div className={styles.BudgetBox}>
			<Table borderless>
				<thead>
					<tr>
						<th>{title}</th>
						<th>Planned</th>
						<th>Received</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>{title}</th>
						<th>2800</th>
						<th>{totalReceived}</th>
					</tr>
				</tbody>
			</Table>
			<p>Add {item}</p>
		</div>
	);
}
