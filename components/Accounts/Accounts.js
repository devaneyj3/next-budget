"use client";
import React, { useState } from "react";
import stlyes from "./Accounts.module.scss";
import Link from "next/link";

export default function Accounts() {
	const [checkingAccount, setCheckingAccount] = useState(1300);
	const [savingsAccount, setSavingsAccount] = useState(1000);
	const [taxesAccount, setTaxesAccount] = useState(640);
	const [givingAccount, setGivingAccount] = useState(60);
	return (
		<div className={stlyes.accounts}>
			<h4>Account Overview</h4>
			<Link href="#">Checking</Link> <p>${checkingAccount} </p>
			<Link href="#">Savings</Link> <p>${savingsAccount} </p>
			<Link href="#">Taxes</Link> <p>${taxesAccount} </p>
			<Link href="#">Giving</Link> <p>${givingAccount} </p>
		</div>
	);
}
