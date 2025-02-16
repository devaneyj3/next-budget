"use client";
import React, { useState, useEffect } from "react";
import styles from "./Accounts.module.scss"; // Fixed typo
import Link from "next/link";
import { transformMoney, updateAccounts } from "@/utils/helper";

export default function Accounts() {
	const [checkingAccount, setCheckingAccount] = useState(0); // Default to 0
	const [savingsAccount, setSavingsAccount] = useState(0);
	const [taxesAccount, setTaxesAccount] = useState(0);
	const [givingAccount, setGivingAccount] = useState(0);
	const [creditCardAccount, setCreditCardAccount] = useState(0);

	useEffect(() => {
		const updateAccountTotal = () => {
			const checkingTotal = updateAccounts("Checking");
			const savingsTotal = updateAccounts("Savings");
			const taxesTotal = updateAccounts("Taxes");
			const givingTotal = updateAccounts("Giving");
			const creditCardTotal = updateAccounts("Credit Card");
			setCheckingAccount(checkingTotal);
			setSavingsAccount(savingsTotal);
			setTaxesAccount(taxesTotal);
			setGivingAccount(givingTotal);
			setGivingAccount(givingTotal);
			setCreditCardAccount(creditCardTotal);
		};

		updateAccountTotal();
	}, []);

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
