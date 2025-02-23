"use client";
import React from "react";
import styles from "./Transactions.module.scss";
import { Table } from "reactstrap";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/TransactionContext";

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
							const { date, amount, type, account, category, description } =
								transaction;
							let convertedDate = new Date(date);
							const readableDate = convertedDate.toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							});
							return (
								<tr key={index}>
									<td>{readableDate}</td>
									<td className={type == "inc" ? styles.green : styles.red}>
										{transformMoney(amount)}
									</td>
									<td>{account}</td>
									<td>{category}</td>
									<td>{description}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			)}
		</div>
	);
}
