"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { transactions } from "@/data/transactionData";
import { transformMoney } from "@/utils/helper";

const TransactionContext = createContext();

export const TransactionContextProvider = ({ children }) => {
	const [transactionsData, setTransactions] = useState(transactions);
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

	// Function to calculate total per account
	const calculateAccountTotal = (accountType) =>
		transactionsData
			.filter((transaction) => transaction.Account === accountType)
			.reduce(
				(acc, transaction) =>
					transaction.Type === "inc"
						? acc + transaction.Amount
						: acc - transaction.Amount,
				0
			);

	// Function to calculate checking account income and expenses
	const calculateCheckingIncomeAndExpenses = () => {
		let incomeTotal = transactionsData
			.filter(
				(transaction) =>
					transaction.Type === "inc" && transaction.Account === "Checking"
			)
			.reduce((acc, transaction) => acc + transaction.Amount, 0);

		let expenseTotal = transactionsData
			.filter(
				(transaction) =>
					transaction.Type === "exp" && transaction.Account === "Checking"
			)
			.reduce((acc, transaction) => acc + transaction.Amount, 0);

		setTotalIncome(transformMoney(incomeTotal));
		setTotalExpenses(transformMoney(expenseTotal));
		setTotalBalance(transformMoney(incomeTotal - expenseTotal));
	};

	// Updates account balances and totals
	const updateAccountTotal = () => {
		setAccountBalances({
			Checking: calculateAccountTotal("Checking"),
			Savings: calculateAccountTotal("Savings"),
			Taxes: calculateAccountTotal("Taxes"),
			Giving: calculateAccountTotal("Giving"),
			CreditCard: calculateAccountTotal("CreditCard"),
		});

		// Update checking account income, expenses, and balance
		calculateCheckingIncomeAndExpenses();
	};

	// Auto-update when transactions change
	useEffect(() => {
		updateAccountTotal();
	}, [transactionsData]);

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
			}}>
			{children}
		</TransactionContext.Provider>
	);
};

export const useTransactionContext = () => useContext(TransactionContext);
