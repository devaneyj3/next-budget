"use client";
import { useState, useEffect } from "react";
import TransactionContext from "./TransactionContext";
import { fetchTransactions } from "./transactionAPI";
import {
	calculateAccountTotal,
	calculateCheckingIncomeAndExpenses,
} from "./transactionUtils";
import classes from "./context.module.scss";

export const TransactionContextProvider = ({ children }) => {
	const [transactionsData, setTransactions] = useState([]);
	const [transactionsError, setTransactionsError] = useState(null);
	const [transactionsLoading, setTransactionsLoading] = useState(true);
	const [accountBalances, setAccountBalances] = useState({
		Checking: 0,
		Savings: 1000,
		Taxes: 640,
		Giving: 60,
		CreditCard: 0,
	});
	const [totalIncome, setTotalIncome] = useState(0);
	const [totalExpenses, setTotalExpenses] = useState(0);
	const [totalBalance, setTotalBalance] = useState(0);

	// Updates account balances and totals
	const updateAccountTotal = () => {
		setAccountBalances({
			Checking: calculateAccountTotal(transactionsData, "Checking"),
			Savings: calculateAccountTotal(transactionsData, "Savings"),
			Taxes: calculateAccountTotal(transactionsData, "Taxes"),
			Giving: calculateAccountTotal(transactionsData, "Giving"),
			CreditCard: calculateAccountTotal(transactionsData, "CreditCard"),
		});

		// Update checking account income, expenses, and balance
		const { totalIncome, totalExpenses, totalBalance } =
			calculateCheckingIncomeAndExpenses(transactionsData);
		setTotalIncome(totalIncome);
		setTotalExpenses(totalExpenses);
		setTotalBalance(totalBalance);
	};

	// Auto-update when transactions change
	useEffect(() => {
		updateAccountTotal();
	}, [transactionsData]);

	// Fetch transactions when the component mounts
	useEffect(() => {
		const getTransactions = async () => {
			const { transactions, error } = await fetchTransactions();

			if (error) {
				setTransactionsError("Error fetching transactions:", error);
			} else {
				setTransactions(transactions);
			}
			setTransactionsLoading(false);
		};

		getTransactions();
	}, []);

	return (
		<TransactionContext.Provider
			value={{
				transactionsData,
				setTransactions,
				accountBalances,
				totalIncome,
				totalExpenses,
				totalBalance,
				updateAccountTotal,
				transactionsError,
				transactionsLoading,
			}}>
			{transactionsLoading ? (
				<div className={classes.loading}>
					<p>Loading transactions...</p>
				</div>
			) : (
				children
			)}
		</TransactionContext.Provider>
	);
};
