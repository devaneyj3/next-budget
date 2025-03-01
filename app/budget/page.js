"use client";
import Summary from "@/components/Summary/Summary";
import BudgetBox from "@/components/BudgetBox/BudgetBox";

import classes from "./budget.module.scss";
import { useCategoryContext } from "@/context/CategoryContext/CategoryContext";

export default function Home() {
	const { categories } = useCategoryContext();
	return (
		<div className={classes.page_container}>
			<div className={classes.summary_container}>
				<Summary />
			</div>
			<section className={classes.budget}>
				<div className={classes.income}>
					<BudgetBox categories={categories} type="Income" />
				</div>
				<div className={classes.expenses}>
					<BudgetBox categories={categories} type="Expenses" />
				</div>
			</section>
		</div>
	);
}
