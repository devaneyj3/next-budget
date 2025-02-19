import { NextResponse } from "next/server";
import prisma from "@/prisma";

// Fetch all transactions
export async function GET() {
	try {
		const transactions = await prisma.transaction.findMany();
		// Convert amount to float
		const formattedTransactions = transactions.map((t) => ({
			...t,
			amount: parseFloat(t.amount),
		}));

		return NextResponse.json(formattedTransactions, { status: 200 });
	} catch (error) {
		console.error("Error fetching transactions:", error);
		return NextResponse.json(
			{ error: "Failed to fetch transactions" },
			{ status: 500 }
		);
	}
}

// Insert a new transaction
export async function POST(req) {
	try {
		const { description, amount, type, account } = await req.json();
		const newTransaction = await prisma.transaction.create({
			data: { description, amount, type, account },
		});
		return NextResponse.json(newTransaction, { status: 201 });
	} catch (error) {
		console.error("Error adding transaction:", error);
		return NextResponse.json(
			{ error: "Failed to add transaction" },
			{ status: 500 }
		);
	}
}
