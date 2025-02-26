"use client";

import { TransactionContextProvider } from "../context/TransactionContext/TransactionProvider";
import { CategoryContextProvider } from "@/context/CategoryContext/CategoryProvider";

export default function ClientProviders({ children }) {
	return (
		<CategoryContextProvider>
			<TransactionContextProvider>{children}</TransactionContextProvider>
		</CategoryContextProvider>
	);
}
