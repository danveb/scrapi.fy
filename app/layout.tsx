import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Raleway } from "next/font/google";

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })
const raleway = Raleway({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "scrapi.fy",
  description: "Your go-to price tracker for online shopping on millions of products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className="max-w-full mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
