"use client";
import Accounts from "@/components/Accounts/Accounts";
import Transactions from "@/components/Transactions/Transactions";

import React, { useState } from "react";
import styles from "./tracker.module.scss";
import AddCategoryForm from "@/components/Form/addCategoryForm";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import AddTransactionButton from "@/components/AddTransactionButton/AddTransactionButton";

export default function TrasactionTracker() {
	const [showCategoryForm, setShowCategoryForm] = useState(false);

	const transacitonHeaders = [
		"Date",
		"Amount",
		"Account",
		"Category",
		"Description",
	];

	const { transactionsData } = useTransactionContext();
	return (
		<div className={styles.container}>
			<Accounts />
			<div className={styles.transactionForms}>
				<AddTransactionButton isDetailForm={false} />
				<p
					className={styles.showCategory}
					onClick={() => setShowCategoryForm(!showCategoryForm)}>
					Add Category
				</p>
			</div>
			{showCategoryForm && <AddCategoryForm />}
			<Transactions
				name="Transactions"
				transactions={transactionsData}
				headers={transacitonHeaders}
			/>
		</div>
	);
}
