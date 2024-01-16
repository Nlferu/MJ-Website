"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { experienceData } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"

type ExpProps = typeof experienceData[number]

export default function Exp({ title, location, description, icon, date }: ExpProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
        >
            <section className="flex relative m-4">
                <div className="hidden sm:flex items-start w-44 pt-0.5 relative">
                    <div className="w-full text-gray-500 text-sm pt-[1.4rem]">{date}</div>
                    <div className="bg-black w-px h-full translate-x-[2.66rem] translate-y-[1rem] opacity-30"></div>

                    <div className="w-[10rem] h-[10rem] rounded-full z-20">
                        <Image className="rounded-full" src={icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                    </div>
                </div>

                <div className="rounded-lg px-8 pb-4 pt-4 sm:pt-2 w-full text-center z-10 sm:w-96">
                    <div className="text-xl font-medium mb-2">{title}</div>
                    <div className="text-black font-bold mb-4 sm:mb-6 sm:text-sm flex flex-col">
                        {location} <span className="sm:hidden font-normal">{date}</span>
                    </div>
                    <div className="mb-4">{description}</div>

                    <div className="w-[3rem] h-[3rem] rounded-full z-20 absolute left-2 top-2 sm:hidden">
                        <Image className="rounded-full" src={icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
