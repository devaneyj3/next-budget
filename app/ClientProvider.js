"use client";

import CategoryContext from "@/context/CategoryContext/CategoryContext";
import { TransactionContextProvider } from "../context/TransactionContext/TransactionProvider";

export default function ClientProviders({ children }) {
	return (
		<CategoryContext>
			<TransactionContextProvider>{children}</TransactionContextProvider>;
		</CategoryContext>
	);
}
