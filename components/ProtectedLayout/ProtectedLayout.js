"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCategoryContext } from "@/context/CategoryContext/CategoryContext";
import Start from "../Start/Start";
import Navbar from "../Nav/nav";

export default function ProtectedLayout({ children }) {
	const { expenseCategories } = useCategoryContext();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (expenseCategories.length === 0 && pathname !== "/start") {
			router.push("/start");
		}
	}, [expenseCategories, router, pathname]);

	// If we're on the /start page, render children regardless of expenseCategories.
	if (pathname === "/start") {
		return <>{children}</>;
	}

	// Otherwise, if the categories haven't loaded, show a loading state.
	if (expenseCategories.length === 0) {
		return <Start />;
	}

	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
