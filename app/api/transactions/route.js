import { NextResponse } from "next/server";
import db from "../../../data/db"; // ✅ Import Knex DB instance

// Fetch all transactions
export async function GET() {
	try {
		const transactions = await db("transactions").select("*");
		return NextResponse.json(transactions, { status: 200 });
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
		const [newTransaction] = await db("transactions").insert(
			{ description, amount, type, account },
			["id", "description", "amount", "type", "account", "created_at"]
		);

		return NextResponse.json(newTransaction, { status: 201 });
	} catch (error) {
		console.error("Error adding transaction:", error);
		return NextResponse.json(
			{ error: "Failed to add transaction" },
			{ status: 500 }
		);
	}
}
