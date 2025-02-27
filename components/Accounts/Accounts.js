"use client";
import React from "react";
import styles from "./Accounts.module.scss";
import Link from "next/link";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";

export default function Accounts() {
	const { accountBalances } = useTransactionContext();

	return (
		<div className={styles.accounts}>
			{Object.keys(accountBalances).map((account) => (
				<div className={styles.accountCard} key={account}>
					<Link href="#" className={styles.accountName}>
						{account}
					</Link>
					<p className={styles.balance}>
						{transformMoney(accountBalances[account])}
					</p>
				</div>
			))}
		</div>
	);
}
