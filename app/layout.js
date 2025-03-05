import Navbar from "@/components/Nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import ClientProviders from "./ClientProvider";
import Footer from "@/components/Footer/Footer";
import ProtectedLayout from "@/components/ProtectedLayout/ProtectedLayout";

export const metadata = {
	title: "Budget Tracker",
	description: "Track you finances and checkbook",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientProviders>
					<ProtectedLayout>{children}</ProtectedLayout>
					<Footer />
				</ClientProviders>
			</body>
		</html>
	);
}
