"use client";
import { createContext, useContext } from "react";

const TransactionContext = createContext();

export const useTransactionContext = () => useContext(TransactionContext);

export default TransactionContext;
