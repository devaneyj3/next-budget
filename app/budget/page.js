"use client";
import Summary from "@/components/Summary/Summary";
import BudgetBox from "@/components/BudgetBox/BudgetBox";

import classes from "./budget.module.scss";
import { useCategoryContext } from "@/context/CategoryContext/CategoryContext";
import Allocation from "@/components/Allocation/Allocation";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import { useState } from "react";

export default function Home() {
	const { incomeCategories, expenseCategories } = useCategoryContext();
	const { projectedIncome } = useTransactionContext();
	// Initialize state for all categories
	const [allocations, setAllocations] = useState(
		Object.fromEntries(expenseCategories.map((cat) => [cat.name, 0]))
	);

	return (
		<>
			<div className={classes.allocation}>
				<Allocation allocations={allocations} setAllocations={setAllocations} />
			</div>
			<div className={classes.page_container}>
				<div className={classes.summary_container}>
					<Summary />
				</div>
				<section className={classes.budget}>
					<div className={classes.income}>
						<BudgetBox categories={incomeCategories} type="Income" />
					</div>
					<div className={classes.expenses}>
						<BudgetBox
							allocations={allocations}
							categories={expenseCategories}
							type="Expenses"
						/>
					</div>
				</section>
			</div>
		</>
	);
}
