// components/ClientProviders.tsx
"use client"; // ✅ Mark this as a Client Component

import { TransactionContextProvider } from "@/context/transactionContext";

export default function ClientProviders({ children }) {
	return <TransactionContextProvider>{children}</TransactionContextProvider>;
}
