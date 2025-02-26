"use client";

import React, { useState } from "react";

import styles from "./home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<section className={styles.info}>
				<p>Get Your Finances Back on Track</p>
				<p>
					Just select budgeting categories and we will automate the rest based
					on your goals
				</p>
			</section>
			<h2>Why Budgeting is Important</h2>
			<ul>
				<li>
					<strong>Financial Control:</strong> Budgeting helps you manage your
					income and expenses, ensuring you have control over your financial
					decisions.
				</li>
				<li>
					<strong>Goal Achievement:</strong> It allows you to set and reach
					financial goals, such as saving for a home, retirement, or
					emergencies.
				</li>
				<li>
					<strong>Expense Tracking:</strong> Keeping track of spending enables
					you to identify unnecessary expenses and redirect funds towards more
					important needs.
				</li>
				<li>
					<strong>Debt Management:</strong> A well-planned budget can help you
					reduce debt by prioritizing payments and avoiding overspending.
				</li>
				<li>
					<strong>Better Savings:</strong> By allocating funds appropriately,
					budgeting increases your ability to save and invest in your future.
				</li>
				<li>
					<strong>Stress Reduction:</strong> Knowing your financial status and
					having a plan reduces money-related stress and uncertainty.
				</li>
				<li>
					<strong>Improved Decision Making:</strong> With clear visibility of
					your finances, you can make informed decisions about spending and
					saving.
				</li>
			</ul>
		</div>
	);
}
