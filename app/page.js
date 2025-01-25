"use client";
import { useState } from "react";
import Header from "../components/Header/Header";
import Summary from "../components/Summary/Summary";
import Form from "../components/Form/Form";
import TransactionList from "../components/TransactionList/TransactionList";
import "./globals.scss";

export default function Home() {
	const [transactions, setTransactions] = useState([]);

	const income = transactions
		.filter((t) => t.type === "income")
		.reduce((sum, t) => sum + t.amount, 0);

	const expenses = transactions
		.filter((t) => t.type === "expense")
		.reduce((sum, t) => sum + t.amount, 0);

	const addTransaction = (transaction) => {
		setTransactions([...transactions, transaction]);
	};

	return (
		<div>
			<Header />
			<Summary income={income} expenses={expenses} />
			<Form onAddTransaction={addTransaction} />
			<TransactionList transactions={transactions} />
		</div>
	);
}
