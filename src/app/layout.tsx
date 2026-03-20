import "./globals.css";

export const metadata: any = {
    title: "Karna Tejesh Kumar - Frontend Engineer",
    description:
        "Portfolio of Karna Tejesh Kumar — Frontend Engineer & MERN Stack Developer specializing in React.js, Next.js, and scalable web applications.",
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
