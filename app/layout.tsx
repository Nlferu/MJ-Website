import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Icon font: Balgin
// Website Font: Cormorant Garamond
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Marta Jablonska",
    description: "Accounting Services",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${inter.className} pt-28 sm:pt-36 bg-gray-200`}>
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                </ActiveSectionContextProvider>
            </body>
        </html>
    )
}
