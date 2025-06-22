import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata = {
    title: "Kenzie's Website",
    description: "Personal website of Kenzie, with projects I've done and more.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${montserrat.variable}`}>
                {children}
            </body>
        </html>
    );
}
