"use client";
import Summary from "@/components/Summary/Summary";
import BudgetBox from "@/components/BudgetBox/BudgetBox";

export default function Home() {
	const budgetItems = ["Income", "Rent", "Bills", "Food"];
	return (
		<div>
			<Summary />
			{budgetItems.map((item, key) => {
				return <BudgetBox key={key} title={item} item={item} />;
			})}
		</div>
	);
}
