import React from "react";
import styles from "./BudgetBox.module.scss";

export default function BudgetBox({ title, item }) {
	return (
		<div className={styles.BudgetBox}>
			<h3>{title}</h3>
			<p>Add {item}</p>
		</div>
	);
}
