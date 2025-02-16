import Accounts from "@/components/Accounts/Accounts";
import Transactions from "@/components/Transactions/Transactions";
import { transactions } from "@/data/transactionData";
import React from "react";
import styles from "./tracker.module.scss";

export default function TrasactionTracker() {
	return (
		<div className={styles.container}>
			<Accounts transactions={transactions} />
			<Transactions transactions={transactions} />
		</div>
	);
}
