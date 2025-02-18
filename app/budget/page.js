"use client";
import Summary from "@/components/Summary/Summary";
import Form from "@/components/Form/Form";
import BudgetBox from "@/components/BudgetBox/BudgetBox";

export default function Home() {
	const budgetItems = [
		"Income",
		"Giving",
		"Savings",
		"Housing",
		"Tranportation",
		"Lifestyle",
		"Subscriptions",
	];
	return (
		<div>
			<Summary />
			<Form />
			{budgetItems.map((item, key) => {
				return <BudgetBox key={key} title={item} item={item} />;
			})}
		</div>
	);
}
