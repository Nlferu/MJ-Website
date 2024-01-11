import React from "react"
import Link from "next/link"
import { links } from "@/lib/data"

export default function Header() {
    return (
        <header className="relative z-[999]">
            <nav className="fixed flex top-0 h-[4.5rem] w-full items-center justify-center">
                <ul className="flex gap-[7rem] text-2xl">
                    {links.map((link) => (
                        <li className="" key={link.hash}>
                            <Link href={link.hash}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
