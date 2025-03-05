import { useCategoryContext } from "@/context/CategoryContext/CategoryContext";
import React, { useEffect } from "react";
import RangeInput from "../RangeInput/RangeInput";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import styles from "./Allocation.module.scss";

export default function ManualAllocation({
	setLeftToBudget,
	allocations,
	setAllocations,
}) {
	const { expenseCategories } = useCategoryContext();
	const { projectedIncome } = useTransactionContext();

	const sumOfBudgetItems = Object.values(allocations).reduce(
		(sum, v) => sum + v,
		0
	);

	useEffect(() => {
		setLeftToBudget(100 - sumOfBudgetItems);
	}, [allocations]);

	const handleAllocationChange = (category, newValue) => {
		const totalOther = sumOfBudgetItems - allocations[category];

		const maxAvailable = 100 - totalOther;

		setAllocations((prev) => ({
			...prev,
			[category]: Math.min(newValue, maxAvailable),
		}));
	};
	return (
		<div>
			{expenseCategories.map((cat) => {
				// percent of allocation of indivdual category times projectedIncome
				const itemAllocation = transformMoney(
					(allocations[cat.name] / 100) * projectedIncome
				);
				return (
					<div key={cat.name} className={styles.allocation_container}>
						<p className={styles.category}>{cat.name}</p>
						<RangeInput
							category={cat}
							value={allocations[cat.name]}
							max={
								100 -
								Object.values(allocations).reduce((sum, v) => sum + v, 0) +
								allocations[cat.name]
							}
							onChange={handleAllocationChange}
						/>
						<p className={styles.category}>{itemAllocation}</p>
					</div>
				);
			})}
		</div>
	);
}
