"use client";
import React from "react";
import styles from "./Accounts.module.scss";
import Link from "next/link";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/transactionContext";

export default function Accounts() {
	const { accountBalances } = useTransactionContext();

	return (
		<div className={styles.accounts}>
			{Object.keys(accountBalances).map((account) => (
				<div key={account}>
					<Link href="#">{account}</Link>
					<p>{accountBalances[account]}</p>
				</div>
			))}
		</div>
	);
}
