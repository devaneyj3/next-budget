import React, { useState } from "react";
import Form from "@/components/Form/Form";
import styles from "./TransactionButton.module.scss";

export default function AddTransactionButton({ isDetailForm }) {
	const [showTransactionForm, setShowTransactionForm] = useState(false);
	return (
		<>
			<p
				className={styles.showTransaction}
				onClick={() => setShowTransactionForm(!showTransactionForm)}>
				Add Transaction
			</p>
			{showTransactionForm && <Form isDetailForm={isDetailForm} />}
		</>
	);
}
