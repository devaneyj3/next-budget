import { useCategoryContext } from "@/context/CategoryContext/CategoryContext";
import React, { useEffect, useState } from "react";
import styles from "./Allocation.module.scss";
import RangeInput from "../RangeInput/RangeInput";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";

export default function Allocation({ allocations, setAllocations }) {
	const { expenseCategories } = useCategoryContext();
	const { projectedIncome } = useTransactionContext();

	const [leftToBudget, setLeftToBudget] = useState("100%");

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
			<h3>How do you want to allocate your budget?</h3>
			<p>
				You have {transformMoney((projectedIncome * leftToBudget) / 100)}{" "}
				<span className={styles.leftToBudgetPercent}>({leftToBudget}%)</span> of{" "}
				{transformMoney(projectedIncome)} left to budget
			</p>
			{expenseCategories.map((cat) => {
				// percent of allocation of indivdual category times projectedIncome
				const itemAllocation = transformMoney(
					(allocations[cat.name] / 100) * projectedIncome
				);
				return (
					<div key={cat.name} className={styles.allocation_container}>
						<p>{cat.name}</p>
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
						<p>
							{itemAllocation} towards {cat.name}
						</p>
					</div>
				);
			})}
		</div>
	);
}
