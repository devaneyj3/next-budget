"use client";
import styles from "./BudgetBox.module.scss";
import { Table } from "reactstrap";
import BudgetItem from "./BudgetItem";

export default function BudgetBox({ categories, type }) {
	return (
		<div className={styles.BudgetBox}>
			<h2>{type}</h2>
			<Table hover striped>
				<thead>
					<tr>
						<th>Title</th>
						<th>Planned</th>
						<th>Received</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category) => {
						return <BudgetItem key={category.id} category={category} />;
					})}
				</tbody>
			</Table>
		</div>
	);
}
