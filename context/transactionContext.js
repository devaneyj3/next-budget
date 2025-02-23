"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { transformMoney } from "@/utils/helper";
import classes from "./context.module.scss";
import { getTransactions } from "@/utils/actions";

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

	useEffect(() => {
		const fetchTransactions = async () => {
			const { transactions, error } = await getTransactions();
			if (error) {
				setTransactionsError("Error fetching transactions:", error);
			} else {
				setTransactions(transactions);
			}
			setTransactionsLoading(false);
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

export const useTransactionContext = () => useContext(TransactionContext);
