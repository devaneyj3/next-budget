"use client";
import Summary from "@/components/Summary/Summary";
import BudgetBox from "@/components/BudgetBox/BudgetBox";

import classes from "./budget.module.scss";
import { useCategoryContext } from "@/context/CategoryContext/CategoryContext";

export default function Home() {
	const { categories } = useCategoryContext();
	return (
		<div>
			<Summary />
			<section className={classes.budget}>
				<BudgetBox categories={categories} type="Income" />
				<BudgetBox categories={categories} type="Expenses" />
			</section>
		</div>
	);
}
