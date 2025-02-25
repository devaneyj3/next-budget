"use client";
import Summary from "@/components/Summary/Summary";
import BudgetBox from "@/components/BudgetBox/BudgetBox";
import { expenseCategories, incomeCategories } from "@/utils/categories";
import classes from "./budget.module.scss";

export default function Home() {
	return (
		<div>
			<Summary />
			<section className={classes.budget}>
				<BudgetBox categories={incomeCategories} type="Income" />
				<BudgetBox categories={expenseCategories} type="Expenses" />
			</section>
		</div>
	);
}
