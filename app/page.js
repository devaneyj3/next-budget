"use client";

import React from "react";
import styles from "./home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>BudgetWise</h1>
				<p>Your Intelligent Financial Companion</p>
			</header>
			<section className={styles.intro}>
				<h2>Revolutionize Your Finances</h2>
				<p>
					Automate your budgeting with smart, data-driven insights. Customize
					your categories, and let our AI do the heavy lifting.
				</p>
			</section>
			<section className={styles.info}>
				<h2>Why Budgeting Matters</h2>
				<ul>
					<li>
						<strong>Smart Control:</strong> Harness technology to manage income
						and expenses seamlessly.
					</li>
					<li>
						<strong>Future Goals:</strong> Set ambitious targets and watch your
						financial dreams materialize.
					</li>
					<li>
						<strong>Real-Time Insights:</strong> Get dynamic analytics to stay
						ahead of your spending.
					</li>
					<li>
						<strong>Debt Optimization:</strong> Use data to prioritize payments
						and streamline debt reduction.
					</li>
					<li>
						<strong>Accelerated Savings:</strong> Optimize fund allocation to
						boost your savings.
					</li>
					<li>
						<strong>Peace of Mind:</strong> Enjoy stress-free living with full
						financial transparency.
					</li>
					<li>
						<strong>Informed Decisions:</strong> Make smart, data-backed choices
						for a brighter financial future.
					</li>
				</ul>
			</section>
			<section className={styles.tips}>
				<h2>Tech-Driven Financial Tips</h2>
				<p>
					Explore advanced insights and innovative tools to keep your financial
					health on track.
				</p>
			</section>
			<section className={styles.cta}>
				<button className={styles.primaryButton}>Start Your Journey</button>
			</section>
		</div>
	);
}
