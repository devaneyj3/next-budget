"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { transactions } from "@/data/transactionData";

const TransactionContext = createContext();

export const TransactionContextProvider = ({ children }) => {
	const [transactionsData, setTransactions] = useState(transactions);
	const [checkingAccount, setCheckingAccount] = useState(0);
	const [savingsAccount, setSavingsAccount] = useState(1000);
	const [taxesAccount, setTaxesAccount] = useState(640);
	const [givingAccount, setGivingAccount] = useState(60);
	const [creditCardAccount, setCreditCardAccount] = useState(0);

	const updateAccountTotal = () => {
		const calculateAccountTotal = (accountType) =>
			transactionsData
				.filter((transaction) => transaction.Account === accountType)
				.reduce((acc, transaction) => {
					return transaction.Type === "inc"
						? acc + transaction.Amount
						: acc - transaction.Amount;
				}, 0);

		setCheckingAccount(calculateAccountTotal("Checking"));
		setSavingsAccount(calculateAccountTotal("Savings"));
		setTaxesAccount(calculateAccountTotal("Taxes"));
		setGivingAccount(calculateAccountTotal("Giving"));
		setCreditCardAccount(calculateAccountTotal("Credit Card"));
	};

	useEffect(() => {
		updateAccountTotal();
	}, [transactionsData]);

	return (
		<TransactionContext.Provider
			value={{
				transactionsData,
				setTransactions,
				checkingAccount,
				savingsAccount,
				taxesAccount,
				givingAccount,
				creditCardAccount,
				updateAccountTotal,
			}}>
			{children}
		</TransactionContext.Provider>
	);
};

export const useTransactionContext = () => useContext(TransactionContext);
