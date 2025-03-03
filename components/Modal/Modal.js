import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Transactions from "../Transactions/Transactions";

function BudgetModal({ title, modal, toggle, transactions }) {
	return (
		<Modal isOpen={modal} toggle={toggle} size="lg">
			<ModalBody>
				<Transactions name={title} transactions={transactions} />
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
