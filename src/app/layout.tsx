import "./globals.css";

export const metadata: any = {
    title: "Karna Tejesh Kumar | Frontend Engineer",
    description:
        "Portfolio of Karna Tejesh Kumar — Frontend Engineer and MERN Stack developer specializing in React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and AI-driven frontend experiences.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
