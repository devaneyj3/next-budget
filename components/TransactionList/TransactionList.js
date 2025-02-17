import styles from "./TransactionList.module.scss";

export default function TransactionList() {
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
				<tbody></tbody>
			</table>
		</div>
	);
}
