"use client";
import { useState, useEffect } from "react";
import TransactionContext from "./TransactionContext";
import { fetchTransactions } from "./transactionAPI";
import {
	calculateAccountTotal,
	calculateCheckingIncomeAndExpenses,
} from "./transactionUtils";
import classes from "../context.module.scss";
import { supabase } from "@/utils/supabase/server";
import { useCategoryContext } from "../CategoryContext/CategoryContext";

export const TransactionContextProvider = ({ children }) => {
	const { expenseCategories } = useCategoryContext();
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
	const [projectedIncome, setProjectedIncome] = useState(3700);
	const [projectedExpenses, setProjectedExpenses] = useState(3200);
	// Initialize state for all categories
	const [allocations, setAllocations] = useState(
		Object.fromEntries(expenseCategories.map((cat) => [cat.name, 0]))
	);

	console.log("transaction provider,", allocations);
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

	// ✅ Real-time listener for new transactions
	useEffect(() => {
		const handleInserts = (payload) => {
			setTransactions((prevTransactions) => [payload.new, ...prevTransactions]); // ✅ Update state
		};

		// ✅ Subscribe to real-time changes
		const channel = supabase
			.channel("TransactionChannel")
			.on(
				"postgres_changes",
				{ event: "INSERT", schema: "public", table: "Transaction" },
				handleInserts
			)
			.subscribe();

		// ✅ Cleanup function to unsubscribe when unmounted
		return () => {
			channel.unsubscribe();
		};
	}, []);
	// Fetch transactions when the component mounts
	const getTransactions = async () => {
		const { transactions, error } = await fetchTransactions();

		if (error) {
			setTransactionsError("Error fetching transactions:", error);
		} else {
			setTransactions(transactions);
		}
		setTransactionsLoading(false);
	};
	useEffect(() => {
		getTransactions();
	}, []);

	//filter transactions by category

	const filterByCategory = (category) => {
		return transactionsData.filter(
			(transaction) => transaction.Category.name === category
		);
	};

	return (
		<TransactionContext.Provider
			value={{
				allocations,
				setAllocations,
				getTransactions,
				projectedExpenses,
				projectedIncome,
				transactionsData,
				setTransactions,
				accountBalances,
				totalIncome,
				totalExpenses,
				totalBalance,
				updateAccountTotal,
				transactionsError,
				transactionsLoading,
				filterByCategory,
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
