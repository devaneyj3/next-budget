import React, { useState } from "react";
import styles from "./Allocation.module.scss";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import ManualAllocation from "./ManualAllocation";

export default function Allocation({ allocations, setAllocations }) {
	const { projectedIncome } = useTransactionContext();

	const [leftToBudget, setLeftToBudget] = useState("100%");
	const [manualAllocationBtn, setManualAllocationBtn] = useState(false);
	const [autoAllocationBtn, setAutoAllocationBtn] = useState(false);
	return (
		<div>
			<h3>How do you want to allocate your budget?</h3>
			<p>
				You have {transformMoney((projectedIncome * leftToBudget) / 100)}{" "}
				<span className={styles.leftToBudgetPercent}>({leftToBudget}%)</span> of{" "}
				{transformMoney(projectedIncome)} left to budget
			</p>
			<div className={styles.allocation_buttons}>
				<button
					className={styles.manual_allocation}
					onClick={() => setManualAllocationBtn(!manualAllocationBtn)}>
					Manual Allocation
				</button>
				<button
					className={styles.manual_allocation}
					onClick={() => setAutoAllocationBtn(!autoAllocationBtn)}>
					Auto Allocation
				</button>
			</div>
			{manualAllocationBtn ? (
				<ManualAllocation
					setLeftToBudget={setLeftToBudget}
					allocations={allocations}
					setAllocations={setAllocations}
				/>
			) : (
				<p>Let us automate your budget</p>
			)}
		</div>
	);
}
