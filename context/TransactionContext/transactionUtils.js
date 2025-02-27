export const calculateAccountTotal = (transactions, accountType) =>
	transactions
		.filter((transaction) => transaction.account === accountType)
		.reduce(
			(acc, transaction) =>
				transaction.type === "inc"
					? acc + transaction.amount
					: acc - transaction.amount,
			0
		);

export const calculateCheckingIncomeAndExpenses = (transactions) => {
	let incomeTotal = transactions
		.filter(
			(transaction) =>
				transaction.type === "inc" && transaction.account === "Checking"
		)
		.reduce((acc, transaction) => acc + transaction.amount, 0);

	let expenseTotal = transactions
		.filter(
			(transaction) =>
				transaction.type === "exp" && transaction.account === "Checking"
		)
		.reduce((acc, transaction) => acc + transaction.amount, 0);

	return {
		totalIncome: incomeTotal,
		totalExpenses: expenseTotal,
		totalBalance: incomeTotal - expenseTotal,
	};
};
