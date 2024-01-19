"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import clsx from "clsx"
import { links } from "@/lib/data"
import { motion } from "framer-motion"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    const [scrollPosition, setScrollPosition] = useState<boolean>(false)

    const handleScroll = () => {
        if (window.scrollY !== 0) {
            setScrollPosition(true)
        } else {
            setScrollPosition(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

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
                            "border-b-[1px] border-t-[1px] border-black bg-black/20 py-[0.7rem] backdrop-blur-md !transition-all !duration-1000":
                                scrollPosition,
                        }
                    )}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {links.map((link) => (
                        <li className="relative" key={link.hash}>
                            <Link
                                className=" hover:text-white"
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className={clsx("flex absolute w-[120%] h-[120%] bg-gray-500 bottom-[-10%] left-[-10%] rounded-lg z-[-1]", {
                                            "!bg-transparent": activeSection === "Home",
                                        })}
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 28,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            </nav>
        </header>
    )
}
