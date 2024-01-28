"use client"

import React from "react"
import Image from "next/image"
import { educationData } from "@/lib/data"

type EduProps = typeof educationData[number]

export default function Edu({ school, title, icon, date }: EduProps) {
    return (
        <section className="flex relative justify-center m-4">
            <div className="hidden sm:flex items-start w-44 pt-0.5 relative">
                <div className="w-full text-gray-900 text-sm pt-[1.4rem]">{date}</div>

                <div className="w-[10rem] h-[10rem] rounded-full z-20">
                    <Image className="rounded-full" src={icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                </div>
            </div>

            <div className="rounded-lg px-8 pb-4 pt-4 sm:pt-2 w-full text-center z-10 sm:w-96">
                <div className="text-xl font-medium mb-2">{school}</div>
                <div className="text-black mb-4 sm:mb-6 flex flex-col">
                    {title} <span className="sm:hidden font-normal">{date}</span>
                </div>

                <div className="w-[3rem] h-[3rem] rounded-full z-20 absolute left-1/2 translate-x-[-50%] top-[-3rem] sm:hidden">
                    <Image className="rounded-full" src={icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                </div>
            </div>
        </section>
    )
}
