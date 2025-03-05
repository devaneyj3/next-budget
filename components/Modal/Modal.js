import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Transactions from "../Transactions/Transactions";
import AddTransactionButton from "../AddTransactionButton/AddTransactionButton";
import { transformMoney } from "@/utils/helper";

function BudgetModal({
	title,
	modal,
	toggle,
	transactions,
	totalRecieved,
	projectedIncome,
}) {
	return (
		<Modal isOpen={modal} toggle={toggle} size="lg">
			<ModalBody>
				<p>
					{totalRecieved} spent out of {transformMoney(projectedIncome)}
				</p>
				<Transactions name={title} transactions={transactions} />
				<AddTransactionButton title={title} />
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={toggle}>
					Submit
				</Button>
				<Button color="secondary" onClick={toggle}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default BudgetModal;
