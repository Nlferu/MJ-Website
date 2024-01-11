"use client"

import React from "react"
import Image from "next/image"
import { Cormorant_Garamond } from "next/font/google"
import { BsTelephone, BsEnvelope } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"
import { useSectionInView } from "@/lib/hooks"

// Icon font: Balgin
// Website Font: Cormorant Garamond
const cormorant = Cormorant_Garamond({ weight: "400", subsets: ["latin"] })

/** @dev Add fade on scroll down */

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)

    return (
        <section className="max-w-[51rem] min-h-[100vh] text-center scroll-mt-[100rem]" ref={ref} id="home">
            <div className="flex flex-col items-center justify-center">
                <Image
                    className="w-[20rem] h-[20rem] object-fit rounded-full mb-10 flex self-center justify-center"
                    src="/icon.png"
                    alt="MJ"
                    height="400"
                    width="400"
                    quality="95"
                    priority={true}
                />
            </div>
            <div className={`${cormorant.className} text-5xl mb-[4rem]`}>Marta Jabłońska</div>
            <div className="flex gap-20">
                <div className="flex gap-5">
                    <BsTelephone className="text-3xl" /> 666 666 666
                </div>
                <div className="flex gap-5">
                    <BsEnvelope className="text-3xl" /> mailito@interia.pl
                </div>
                <div className="flex gap-5">
                    <TfiWorld className="text-3xl" /> marta-jablonska.vercel.app
                </div>
            </div>
        </section>
    )
}
