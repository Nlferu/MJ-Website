"use client"

import React from "react"
import SectionHeading from "./section-heading"
import Edu from "./edu"
import Exp from "./exp"
import { certificates } from "@/lib/data"
import { educationData } from "@/lib/data"
import { experienceData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.3)

    return (
        <section className="max-w-[80rem] text-center mb-0 sm:mb-20" ref={ref} id="experience">
            <SectionHeading>Education</SectionHeading>
            {educationData.map((item, index) => (
                <React.Fragment key={index}>
                    <motion.div
                        className="mb-[-4rem]"
                        initial={{ opacity: 0, x: `100%` }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 * index, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Edu {...item} />
                    </motion.div>
                </React.Fragment>
            ))}

            <SectionHeading>Licenses & Certificates</SectionHeading>
            {certificates.map((item, index) => (
                <React.Fragment key={index}>
                    <motion.div
                        className="flex flex-col mb-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 * index, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="font-bold text-lg">{item.title}</div>
                        <div className="">{item.issuer}</div>
                        <div className="text-sm">{item.date}</div>
                    </motion.div>
                </React.Fragment>
            ))}

            <SectionHeading>Experience</SectionHeading>
            {experienceData.map((item, index) => (
                <React.Fragment key={index}>
                    <motion.div
                        initial={{ opacity: 0, x: `100%` }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 * index, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Exp {...item} />
                    </motion.div>
                </React.Fragment>
            ))}
        </section>
    )
}
