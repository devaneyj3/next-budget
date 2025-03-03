"use client";
import React from "react";
import styles from "./Transactions.module.scss";
import { Table } from "reactstrap";
import { formatDate, transformMoney } from "@/utils/helper";

export default function Transactions({ name, transactions }) {
	return (
		<div className={styles.transactionsContainer}>
			<h2 className={styles.title}>{name}</h2>
			{transactions && (
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
						{transactions.map((transaction, index) => {
							const { date, amount, type, account, Category, description } =
								transaction;
							const formattedDate = formatDate(date);
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
