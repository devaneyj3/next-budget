import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Transactions from "../Transactions/Transactions";
import AddTransactionButton from "../AddTransactionButton/AddTransactionButton";

function BudgetModal({ title, modal, toggle, transactions, totalRecieved }) {
	return (
		<Modal isOpen={modal} toggle={toggle} size="lg">
			<ModalBody>
				<p>{totalRecieved} spent out of 3200</p>
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
