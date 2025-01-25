import "./globals.scss";

export const metadata = {
	title: "Budget Tracker",
	description: "Track you finances and checkbook",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
