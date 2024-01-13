"use client"

import React from "react"
import SectionHeading from "./section-heading"
import Hexagon from "./hexagon"
import { certificates } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

export default function Skills() {
    const { ref } = useSectionInView("Skills", 1)

    return (
        <section className="max-w-[51rem] text-center" ref={ref} id="skills">
            <SectionHeading>Skills</SectionHeading>
            <div className="relative">
                <Hexagon />
            </div>

            <SectionHeading>Licenses & Certificates</SectionHeading>
            <div>
                {certificates.map((item, index) => {
                    return (
                        <div className="flex flex-col mb-10" key={index}>
                            <div className="font-bold text-lg">{item.title}</div>
                            <div className="">{item.issuer}</div>
                            <div className="text-sm">{item.date}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
