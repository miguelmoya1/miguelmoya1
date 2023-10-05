import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import Button from "../components/button/button";
import ChangeRetro from "../components/change-retro/change-retro";
import MainContent from "../components/mainContent";
import "./globals.css";

const v = VT323({
  weight: "400",
  subsets: ["latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "Miguelmo - dev",
  description: "Miguelmo's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={v.className}>
        <nav>
          <ChangeRetro />
        </nav>
        <Button className="active">Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <MainContent />
        {children}
      </body>
    </html>
  );
}
