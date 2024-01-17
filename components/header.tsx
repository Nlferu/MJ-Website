"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import clsx from "clsx"
import { links } from "@/lib/data"
import { motion } from "framer-motion"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Header() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className="relative z-[999]">
            <nav className="fixed flex top-4 sm:top-0 h-[4.5rem] w-full items-center justify-center transition-all duration-1000">
                <motion.ul
                    className={clsx(
                        "flex items-center justify-center gap-5 lg:gap-[7rem] sm:gap-[3.5rem] px-[1.5rem] text-lg sm:text-2xl transition-all duration-1000 w-full flex-wrap sm:flex-nowrap",
                        {
                            "!w-full border-b-[1px] border-t-[1px] border-black bg-black/20 px-[1.5rem] py-[0.7rem] backdrop-blur-md !transition-all !duration-1000":
                                scrollPosition !== 0,
                        }
                    )}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {links.map((link) => (
                        <li className="" key={link.hash}>
                            <Link
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            </nav>
        </header>
    )
}
