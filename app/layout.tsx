import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Mover from "@/components/mover"
import type { Metadata } from "next"
import { Quicksand, Forum, Petrona } from "next/font/google"
import { Toaster } from "react-hot-toast"

// Icon font: Balgin
// Website Font: Cormorant Garamond
// Quicksand, Forum, Petrona
// #D5BDAF #E3D5CA #D6CCC2 #F5EBE0 #FFFFFF
const quick = Quicksand({ subsets: ["latin"] })
const forum = Forum({ weight: "400", subsets: ["latin"] })
const petrona = Petrona({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Marta Jablonska",
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
