import { transactions } from "@/data/transactionData";
import CurrencyFormat from "react-currency-format";

export const updateAccounts = (accountType) => {
	if (!transactions || transactions.length === 0) return 0;

	const income = calculateAccountTotal("inc", accountType);
	const expenses = calculateAccountTotal("exp", accountType);
	return income - expenses;
};

const calculateAccountTotal = (operator, accountType) => {
	return transactions
		.filter(
			(transaction) =>
				transaction.Type === operator && transaction.Account === accountType
		)
		.reduce((acc, transaction) => acc + transaction.Amount, 0);
};

export const transformMoney = (amount) => {
	return (
		<CurrencyFormat
			value={amount.toFixed(2)}
			displayType={"text"}
			thousandSeparator={true}
		/>
	);
};
