import { getTransactions } from "@/utils/actions";

// Fetch Transactions
export async function fetchTransactions() {
	const { transactions, error } = await getTransactions();

	if (error) {
		return { error: error.message, transactions: [] };
	}

	return { transactions: transactions, error: null };
}
