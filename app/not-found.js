import React from "react";
import classes from "./not-found.module.scss";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className={classes.not_found}>
			<h1>We could not find that page.</h1>
			<Link href="/">Go back to the main page.</Link>
		</main>
	);
}
