"use client";
import styles from "./BudgetBox.module.scss";
import { Table } from "reactstrap";
import BudgetItem from "./BudgetItem";

export default function BudgetBox({ categories, type, allocations }) {
	return (
		<div className={styles.BudgetBox}>
			<h2 className={styles.title}>{type}</h2>
			<Table hover striped className={styles.table}>
				<thead>
					<tr>
						<th>Title</th>
						<th>Planned</th>
						<th>{type === "Expenses" ? "Spent" : "Received"}</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category) => (
						<BudgetItem
							key={category.id}
							category={category}
							allocations={allocations}
							type={type}
						/>
					))}
				</tbody>
			</Table>
		</div>
	);
}
