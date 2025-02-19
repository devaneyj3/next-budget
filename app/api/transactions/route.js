import { NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase/server";

// Fetch all transactions
export async function GET() {
	try {
		const { data, error } = await supabase.from("Transaction").select("*");

		if (error) throw error;

		return NextResponse.json(data, { status: 200 });
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

		const { data, error } = await supabase
			.from("transactions")
			.insert([{ description, amount, type, account }]);

		if (error) throw error;

		return NextResponse.json(data, { status: 201 });
	} catch (error) {
		console.error("Error adding transaction:", error);
		return NextResponse.json(
			{ error: "Failed to add transaction" },
			{ status: 500 }
		);
	}
}
