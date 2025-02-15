import Navbar from "@/components/Nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

export const metadata = {
	title: "Budget Tracker",
	description: "Track you finances and checkbook",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
