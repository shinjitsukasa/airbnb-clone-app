import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIRBNB",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
          <Modal actionLabel="Submit" title="HELLO WORLD" isOpen />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
