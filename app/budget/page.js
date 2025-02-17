"use client";
import Summary from "@/components/Summary/Summary";
import Form from "@/components/Form/Form";
import TransactionList from "@/components/TransactionList/TransactionList";

export default function Home() {
	return (
		<div>
			<Summary />
			<Form />
			<TransactionList />
		</div>
	);
}
