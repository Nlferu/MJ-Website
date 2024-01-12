"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"

export default function Experience() {
    const { ref } = useSectionInView("Experience", 1)

    return (
        <section className="max-w-[51rem] text-center mb-20" ref={ref} id="experience">
            <SectionHeading>Experience</SectionHeading>
            <div className="">
                Some Data Lorem Ipsum Some Data Lorem Ipsum Some Data Lorem Ipsum Some Data Lorem Ipsum Some Data Lorem Ipsum Some Data Lorem Ipsum
            </div>
        </section>
    )
}
