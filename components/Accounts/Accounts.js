"use client";
import React from "react";
import styles from "./Accounts.module.scss"; // Fixed typo
import Link from "next/link";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/transactionContext";

export default function Accounts() {
	const {
		checkingAccount,
		savingsAccount,
		taxesAccount,
		givingAccount,
		creditCardAccount,
	} = useTransactionContext();

	return (
		<div className={styles.accounts}>
			<h4>Account Overview</h4>
			<Link href="#">Checking</Link> <p>{transformMoney(checkingAccount)}</p>
			<Link href="#">Savings</Link> <p>{transformMoney(savingsAccount)}</p>
			<Link href="#">Taxes</Link> <p>{transformMoney(taxesAccount)}</p>
			<Link href="#">Giving</Link> <p>{transformMoney(givingAccount)}</p>
			<Link href="#">Credit Card</Link>
			<p>{transformMoney(creditCardAccount)}</p>
		</div>
	);
}
