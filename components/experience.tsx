"use client"

import React from "react"
import SectionHeading from "./section-heading"
import Exp from "./exp"
import { experienceData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5)

    return (
        <section className="max-w-[80rem] text-center mb-20" ref={ref} id="experience">
            <SectionHeading>Experience</SectionHeading>

            {experienceData.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <motion.div
                            initial={{ opacity: 0, x: `100%` }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 * index, duration: 1 }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <Exp {...item} />
                        </motion.div>
                    </React.Fragment>
                )
            })}
        </section>
    )
}
