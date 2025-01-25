import styles from "./TransactionList.module.scss";

export default function TransactionList({ transactions }) {
	return (
		<div className={styles.list}>
			<table>
				<thead>
					<tr>
						<th>Amount</th>
						<th>Category</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((t, index) => (
						<tr key={index}>
							<td>${t.amount}</td>
							<td>{t.category}</td>
							<td>{t.type}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
