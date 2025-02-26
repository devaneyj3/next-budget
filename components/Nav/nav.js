"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.scss";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Link href="/">Budget Tracker</Link>
			</div>

			{/* Desktop Navigation */}
			<ul className={styles.navLinks}>
				<li>
					<Link href="/">Start Here</Link>
				</li>
				<li>
					<Link href="/tracker">Transaction Tracker</Link>
				</li>
				<li>
					<Link href="/budget">Budget</Link>
				</li>
			</ul>

			{/* Mobile Menu Icon */}
			<div className={styles.menuIcon} onClick={toggleMenu}>
				{menuOpen ? <FaTimes /> : <FaBars />}
			</div>

			{/* Mobile Navigation Menu */}
			{menuOpen && (
				<ul className={styles.mobileMenu}>
					<li>
						<Link href="/" onClick={toggleMenu}>
							Transaction Tracker
						</Link>
					</li>
					<li>
						<Link href="/budget" onClick={toggleMenu}>
							Budget
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
