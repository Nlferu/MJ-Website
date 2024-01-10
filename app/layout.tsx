import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Header from "@/components/header"

// Icon font: Balgin
// Website Font: Cormorant Garamond
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Marta Jablonska",
    description: "Accounting Services",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-200`}>
                {children}
                <Header />
            </body>
        </html>
    )
}
