"use client";
import { useState } from "react";
import styles from "./Form.module.scss";
import { useTransactionContext } from "@/context/transactionContext";
import { expenseCategories, incomeCategories } from "@/utils/categories";

export default function Form() {
	const [amount, setAmount] = useState("");
	const [account, setAccount] = useState("Checking");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState(expenseCategories[0]);
	const [type, setType] = useState("inc");

	const { postTransactions } = useTransactionContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		let floatAmount = parseFloat(amount);
		postTransactions(description, floatAmount, type, account, category);
		setAmount("");
		setCategory(type === "exp" ? expenseCategories[0] : incomeCategories[0]); // ✅ Reset to first category
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

			{/* ✅ Wrap category options inside <select> */}
			<select value={category} onChange={(e) => setCategory(e.target.value)}>
				{type === "exp"
					? expenseCategories.map((cat, index) => (
							<option key={index} value={cat}>
								{cat}
							</option>
					  ))
					: incomeCategories.map((cat, index) => (
							<option key={index} value={cat}>
								{cat}
							</option>
					  ))}
			</select>

			{/* ✅ Ensure type values match state */}
			<select value={type} onChange={(e) => setType(e.target.value)}>
				<option value="inc">Income</option>
				<option value="exp">Expense</option>
			</select>

			<button type="submit">Add</button>
		</form>
	);
}
