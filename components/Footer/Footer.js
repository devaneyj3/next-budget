import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} BudgetWise. All rights reserved.</p>
		</footer>
	);
}
