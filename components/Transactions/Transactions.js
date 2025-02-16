"use client";
import React, { useState } from "react";
import styles from "./Transactions.module.scss";
import { Table } from "reactstrap";
import { transactions } from "@/data/transactionData";
import CurrencyFormat from "react-currency-format";

export default function Transactions() {
	const [transactionData, setTransactionData] = useState(transactions);
	return (
		<div className={styles.transactions_container}>
			<h2>Transactions</h2>
			{transactionData && (
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
						{transactionData.map((transaction, index) => {
							const { Date, Amount, Type, Account, Category, Description } =
								transaction;
							return (
								<tr key={index}>
									<td>{Date}</td>
									<td className={Type == "inc" ? styles.green : styles.red}>
										<CurrencyFormat
											value={Amount.toFixed(2)}
											displayType={"text"}
											thousandSeparator={true}
										/>
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
