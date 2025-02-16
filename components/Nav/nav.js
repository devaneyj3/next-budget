import Link from "next/link";
import styles from "./nav.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Link href="/">Budget Tracker</Link>
			</div>
			<ul className={styles.navLinks}>
				<li>
					<Link href="/">Transaction Tracker</Link>
				</li>
				<li>
					<Link href="/budget">Budget</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
