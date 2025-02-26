import Navbar from "@/components/Nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import ClientProviders from "./ClientProvider";
import Footer from "@/components/Footer/Footer";

export const metadata = {
	title: "Budget Tracker",
	description: "Track you finances and checkbook",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientProviders>
					<Navbar />
					{children}
					<Footer />
				</ClientProviders>
			</body>
		</html>
	);
}
