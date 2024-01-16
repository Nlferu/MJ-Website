"use client"

import React from "react"
import SectionHeading from "./section-heading"
import Exp from "./exp"
import { experienceData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

export default function Experience() {
    const { ref } = useSectionInView("Experience", 1)

    return (
        <section className="max-w-[80rem] text-center mb-20" ref={ref} id="experience">
            <SectionHeading>Experience</SectionHeading>
            <div>
                {experienceData.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Exp {...item} />
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    )
}
