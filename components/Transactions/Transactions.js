"use client";
import React from "react";
import styles from "./Transactions.module.scss";
import { Table } from "reactstrap";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/transactionContext";

export default function Transactions() {
	const { transactionsData } = useTransactionContext();

	return (
		<div className={styles.transactions_container}>
			<h2>Transactions</h2>
			{transactionsData && (
				<Table hover bordered responsive striped className={styles.table}>
					<thead>
						<tr>
							<th>Date</th>
							<th>Amount</th>
							<th>Account</th>
							<th>Category</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{transactionsData.map((transaction, index) => {
							const { Date, Amount, Type, Account, Category, Description } =
								transaction;
							return (
								<tr key={index}>
									<td>{Date}</td>
									<td className={Type == "inc" ? styles.green : styles.red}>
										{transformMoney(Amount)}
									</td>
									<td>{Account}</td>
									<td>{Category}</td>
									<td>{Description}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			)}
		</div>
	);
}
