import React from "react";
import styles from "./Transactions.module.scss";
import { Table } from "reactstrap";
import { transactions } from "@/data/transactionData";

export default function Transactions() {
	return (
		<div className={styles.transactions_container}>
			<h2>Transactions</h2>
			<Table hover bordered responsive striped className={styles.table}>
				<thead>
					<tr>
						<th>Date</th>
						<th>Amount</th>
						<th>Acount</th>
						<th>Category</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
