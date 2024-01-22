"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { Cormorant_Garamond } from "next/font/google"
import { BsTelephone, BsEnvelope } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"
import { useSectionInView } from "@/lib/hooks"
import { motion, useScroll, useTransform } from "framer-motion"

// Icon font: Balgin
// Website Font: Cormorant Garamond
const cormorant = Cormorant_Garamond({ weight: "400", subsets: ["latin"] })

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)
    const reference = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({ target: reference, offset: ["1 0", "1.5 1"] })

    const opacityProgess = useTransform(scrollYProgress, [1, 0.3], [1, 0])

    return (
        <section className="max-w-[51rem] min-h-[100vh] text-center scroll-mt-[100rem] mt-10 sm:mt-0" ref={ref} id="home">
            <motion.div
                ref={reference}
                style={{
                    opacity: opacityProgess,
                }}
            >
                <motion.div
                    className="flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 1 }}
                >
                    <div className="flex items-center justify-center absolute p-[7rem] sm:p-[10rem] mb-[2.5rem] animate-fullSpin rounded-full border-b-2 border-[#c2afa1]"></div>

                    <Image
                        className="w-[14rem] sm:w-[20rem] h-[14rem] sm:h-[20rem] object-fit rounded-full mb-10 flex self-center justify-center"
                        src="/icon.png"
                        alt="MJ"
                        height="400"
                        width="400"
                        quality="95"
                        priority={true}
                    />
                </motion.div>
                <div className={`${cormorant.className} text-5xl mb-[4rem]`}>Marta Jabłońska</div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <div className="flex gap-5">
                        <BsTelephone className="text-3xl text-[#c2afa1]" /> 666 666 666
                    </div>
                    <div className="flex gap-5">
                        <BsEnvelope className="text-3xl text-[#c2afa1]" />{" "}
                        <a className="underline" href="mailto:mailito@interia.pl">
                            mailito@interia.pl
                        </a>
                    </div>
                    <div className="flex gap-5">
                        <TfiWorld className="text-3xl text-[#c2afa1]" />{" "}
                        <a className="underline" href="marta-jablonska.vercel.app">
                            marta-jablonska.vercel.app
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
