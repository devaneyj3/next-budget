import React, { useState } from "react";
import styles from "./Allocation.module.scss";
import { transformMoney } from "@/utils/helper";
import { useTransactionContext } from "@/context/TransactionContext/TransactionContext";
import ManualAllocation from "./ManualAllocation";

export default function Allocation({ allocations, setAllocations }) {
	const { projectedIncome } = useTransactionContext();

	const [leftToBudget, setLeftToBudget] = useState("100%");
	const [manualAllocationDropdown, setManualAllocationDropdown] =
		useState(false);
	const [autoAllocationDropdown, setAutoAllocationDropdown] = useState(false);

	const manualClick = () => {
		setManualAllocationDropdown(true);
		setAutoAllocationDropdown(false);
	};

	const autoClick = () => {
		setAutoAllocationDropdown(true);
		setManualAllocationDropdown(false);
	};
	return (
		<div>
			<h3>How do you want to allocate your budget?</h3>
			<p>
				You have {transformMoney((projectedIncome * leftToBudget) / 100)}{" "}
				<span className={styles.leftToBudgetPercent}>({leftToBudget}%)</span> of{" "}
				{transformMoney(projectedIncome)} left to budget
			</p>
			<div className={styles.allocation_buttons}>
				<button className={styles.manual_allocation} onClick={manualClick}>
					Manual Allocation
				</button>
				<button className={styles.manual_allocation} onClick={autoClick}>
					Auto Allocation
				</button>
			</div>
			{manualAllocationDropdown ? (
				<div
					className={`${styles.dropdown} ${
						manualAllocationDropdown ? styles.open : ""
					}`}>
					<ManualAllocation
						setLeftToBudget={setLeftToBudget}
						allocations={allocations}
						setAllocations={setAllocations}
					/>
				</div>
			) : (
				<div
					className={`${styles.dropdown} ${
						autoAllocationDropdown ? styles.open : ""
					}`}>
					<p>Let us automate your budget</p>
				</div>
			)}
		</div>
	);
}
