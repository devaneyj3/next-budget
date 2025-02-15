import Accounts from "@/components/Accounts/Accounts";
import Transactions from "@/components/Transactions/Transactions";
import React from "react";
import styles from "./tracker.module.scss";

export default function TrasactionTracker() {
	return (
		<div className={styles.container}>
			<Accounts />
			<Transactions />
		</div>
	);
}
