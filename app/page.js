import Accounts from "@/components/Accounts/Accounts";
import Transactions from "@/components/Transactions/Transactions";

import React from "react";
import styles from "./tracker.module.scss";
import Form from "@/components/Form/Form";
import AddCategoryForm from "@/components/Form/addCategoryForm";

export default function TrasactionTracker() {
	return (
		<div className={styles.container}>
			<Accounts />
			<Form />
			<AddCategoryForm />
			<Transactions />
		</div>
	);
}
