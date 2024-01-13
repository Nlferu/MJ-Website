"use client"

import React from "react"
import Image from "next/image"
import SectionHeading from "./section-heading"
import { experienceData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

export default function Experience() {
    const { ref } = useSectionInView("Experience", 1)

    return (
        <section className="max-w-[80rem] text-center mb-20" ref={ref} id="experience">
            <SectionHeading>Experience</SectionHeading>
            <div className="">
                {experienceData.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="flex relative m-4">
                                <div className="hidden sm:flex items-start w-44 pt-0.5 relative">
                                    <div className="w-full text-gray-500 text-sm pt-[1.4rem]">{item.date}</div>
                                    <div className="bg-black w-px h-full translate-x-[2.66rem] translate-y-[1rem] opacity-30"></div>

                                    <div className="w-[10rem] h-[10rem] rounded-full z-20">
                                        <Image className="rounded-full" src={item.icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                                    </div>
                                </div>

                                <div className="rounded-lg px-8 pb-4 pt-4 sm:pt-2 w-full text-center z-10 sm:w-96">
                                    <div className="text-xl font-medium mb-2">{item.title}</div>
                                    <div className="text-black font-bold mb-4 sm:mb-6 sm:text-sm flex flex-col">
                                        {item.location} <span className="sm:hidden font-normal">{item.date}</span>
                                    </div>
                                    <div className="mb-4">{item.description}</div>

                                    <div className="w-[3rem] h-[3rem] rounded-full z-20 absolute left-2 top-2 sm:hidden">
                                        <Image className="rounded-full" src={item.icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    )
}
