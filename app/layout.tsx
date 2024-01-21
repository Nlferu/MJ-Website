import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

// Icon font: Balgin
// Website Font: Cormorant Garamond
// Quicksand, Forum, Petrona
// #D5BDAF #E3D5CA #D6CCC2 #F5EBE0 #FFFFFF
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Marta Jablonska",
    description: "Accounting Services",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${inter.className} pt-28 sm:pt-36 bg-gray-100`}>
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Footer />

                    <Toaster position="bottom-right" />
                </ActiveSectionContextProvider>
            </body>
        </html>
    )
}
