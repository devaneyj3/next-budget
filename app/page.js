"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/budget");
	}, [router]);

	return <div>Redirecting to Budget...</div>;
}
