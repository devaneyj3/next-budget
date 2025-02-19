"use client";
import { useState } from "react";
import styles from "./Form.module.scss";
import { useTransactionContext } from "@/context/transactionContext";

export default function Form() {
	const [amount, setAmount] = useState("");
	const [account, setAccount] = useState("Checking");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("Food");
	const [type, setType] = useState("inc");

	const { transactionsData, postTransactions } = useTransactionContext();
	console.log("transactionData is, ", transactionsData);

	const handleSubmit = (e) => {
		e.preventDefault();
		let floatAmount = parseFloat(amount);
		postTransactions(description, floatAmount, type, account, category);
		setAmount("");
		setCategory("");
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				required
			/>

			<select value={account} onChange={(e) => setAccount(e.target.value)}>
				<option value="Checking">Checking</option>
				<option value="Savings">Savings</option>
			</select>
			<select value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="Income">Income</option>
				<option value="Food">Food</option>
			</select>
			<select value={type} onChange={(e) => setType(e.target.value)}>
				<option value="income">Income</option>
				<option value="expense">Expense</option>
			</select>
			<button type="submit">Add</button>
		</form>
	);
}
