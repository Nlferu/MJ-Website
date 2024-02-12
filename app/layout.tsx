import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Mover from "@/components/mover"
import type { Metadata } from "next"
import { Petrona } from "next/font/google"
import { Toaster } from "react-hot-toast"

const petrona = Petrona({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Marta Jabłońska",
    description: "Accounting Services",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${petrona.className} pt-28 sm:pt-36 bg-white`}>
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Footer />

                    <Toaster
                        position="bottom-right"
                        containerStyle={{
                            bottom: "7rem",
                        }}
                    />
                    <Mover />
                </ActiveSectionContextProvider>
            </body>
        </html>
    )
}
