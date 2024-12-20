import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Developed by Amirhossein Emadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
