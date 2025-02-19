"use client"; // ✅ Forces this component to be client-only

export default function ClientWrapper({ children }) {
	return <>{children}</>;
}
