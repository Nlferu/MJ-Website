"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import clsx from "clsx"
import { links } from "@/lib/data"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
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
            <nav className="fixed flex top-0 h-[4.5rem] w-full items-center justify-center transition-all duration-1000">
                <ul
                    className={clsx("flex items-center justify-center gap-[7rem] w-full text-2xl transition-all duration-1000", {
                        "!w-full flex items-center justify-center border-b-[1px] border-t-[1px] border-black bg-black/20 px-[1.5rem] py-[0.7rem] gap-[2rem] backdrop-blur-md !transition-all !duration-1000":
                            scrollPosition !== 0,
                    })}
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
                </ul>
            </nav>
        </header>
    )
}
