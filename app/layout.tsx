import "@/styles/globals.scss";
import { Metadata } from "next";

export const metaData: Metadata = {
	title: "Chaqtti",
	description:
		"A responsive web-based chat application using MQTT protocol for real-time messaging. Features user authentication, dynamic user search and sorting, error handling, and CSS animations.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head></head>
			<body>{children}</body>
		</html>
	);
}
