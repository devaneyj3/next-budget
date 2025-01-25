import { useState } from "react";
import styles from "./Form.module.scss";

export default function Form({ onAddTransaction }) {
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("");
	const [type, setType] = useState("income");

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddTransaction({ amount: parseFloat(amount), category, type });
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
				placeholder="Category"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				required
			/>
			<select value={type} onChange={(e) => setType(e.target.value)}>
				<option value="income">Income</option>
				<option value="expense">Expense</option>
			</select>
			<button type="submit">Add</button>
		</form>
	);
}
