"use client";
import React from "react";
import styles from "./Transactions.module.scss";
import { Table } from "reactstrap";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";

export default function Transactions() {
	const { transactionsData } = useTransactionContext();

	return (
		<div className={styles.transactionsContainer}>
			<h2 className={styles.title}>Transactions</h2>
			{transactionsData && (
				<Table hover responsive striped className={styles.table}>
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
							const { date, amount, type, account, Category, description } =
								transaction;
							console.log(type);
							const formattedDate = new Intl.DateTimeFormat("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
								timeZone: "America/New_York",
							}).format(new Date(date));
							return (
								<tr key={index}>
									<td>{formattedDate}</td>
									<td className={type === "inc" ? styles.green : styles.red}>
										{transformMoney(amount)}
									</td>
									<td>{account}</td>
									<td>{Category && Category.name}</td>
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
