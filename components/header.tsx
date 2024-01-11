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
            <nav
                className={clsx("fixed flex top-0 h-[2rem] w-full items-center justify-center transition-all duration-1000", {
                    "fixed flex top-0 !h-[4.5rem] w-full items-center justify-center !transition-all !duration-1000": scrollPosition === 0,
                })}
            >
                <ul className="flex gap-[7rem] text-2xl">
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
