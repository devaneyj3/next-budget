import Navbar from "@/components/Nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import { TransactionContextProvider } from "@/context/transactionContext";

export const metadata = {
	title: "Budget Tracker",
	description: "Track you finances and checkbook",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TransactionContextProvider>
					<Navbar />
					{children}
				</TransactionContextProvider>
			</body>
		</html>
	);
}
