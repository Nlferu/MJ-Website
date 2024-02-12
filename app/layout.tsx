import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Mover from "@/components/mover"
import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
    title: "Marta Jabłońska",
    description: "Accountant",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`pt-28 sm:pt-36 bg-white`}>
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
