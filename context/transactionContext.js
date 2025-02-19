"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { transformMoney } from "@/utils/helper";
import axios from "axios";

const TransactionContext = createContext();

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

	// Function to calculate total per account
	const calculateAccountTotal = (accountType) =>
		transactionsData
			.filter((transaction) => transaction.account === accountType)
			.reduce(
				(acc, transaction) =>
					transaction.type === "inc"
						? acc + transaction.amount
						: acc - transaction.amount,
				0
			);

	// Function to calculate checking account income and expenses
	const calculateCheckingIncomeAndExpenses = () => {
		let incomeTotal = transactionsData
			.filter(
				(transaction) =>
					transaction.type === "inc" && transaction.account === "Checking"
			)
			.reduce((acc, transaction) => acc + transaction.amount, 0);

		let expenseTotal = transactionsData
			.filter(
				(transaction) =>
					transaction.type === "exp" && transaction.account === "Checking"
			)
			.reduce((acc, transaction) => acc + transaction.amount, 0);

		setTotalIncome(incomeTotal);
		setTotalExpenses(expenseTotal);
		setTotalBalance(incomeTotal - expenseTotal);
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

	useEffect(() => {
		const fetchTransactions = async () => {
			try {
				const res = await axios.get("/api/transactions");
				setTransactions(res.data);
			} catch (error) {
				console.error("Error fetching transactions:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchTransactions();
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
			{children}
		</TransactionContext.Provider>
	);
};

export const useTransactionContext = () => useContext(TransactionContext);
