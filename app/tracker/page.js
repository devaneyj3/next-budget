"use client";
import Accounts from "@/components/Accounts/Accounts";
import Transactions from "@/components/Transactions/Transactions";

import React, { useState } from "react";
import styles from "./tracker.module.scss";
import Form from "@/components/Form/Form";
import AddCategoryForm from "@/components/Form/addCategoryForm";

export default function TrasactionTracker() {
	const [showCategoryForm, setShowCategoryForm] = useState(false);
	const [showTransactionForm, setShowTransactionForm] = useState(false);
	return (
		<div className={styles.container}>
			<Accounts />
			<div className={styles.transactionForms}>
				<p
					className={styles.showCategory}
					onClick={() => setShowTransactionForm(!showTransactionForm)}>
					Add Transaction
				</p>
				{showTransactionForm && <Form />}
				<p
					className={styles.showCategory}
					onClick={() => setShowCategoryForm(!showCategoryForm)}>
					Add Category
				</p>
			</div>
			{showCategoryForm && <AddCategoryForm />}
			<Transactions />
		</div>
	);
}
