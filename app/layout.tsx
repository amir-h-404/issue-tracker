import "@radix-ui/themes/styles.css";
import "./ui/theme-config.css";
import type { Metadata } from "next";
import "./ui/globals.css";
import NavBar from "./components/NavBar";
import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Developed by Amirhossein Emadi",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Theme accentColor="violet" grayColor="sage" radius="large">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
