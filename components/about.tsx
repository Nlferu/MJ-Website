"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"

export default function About() {
    const { ref } = useSectionInView("About", 0.8)

    return (
        <section className="max-w-[51rem] text-base sm:text-lg text-center mb-0 sm:mb-20 mt-[-8rem]" ref={ref} id="about">
            <SectionHeading>About Me</SectionHeading>
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
            >
                Hello! I'm Marta. Since high school, I have known that I want to be an accountant. Determined to turn my passion into a profession, I pursued a
                comprehensive education, earning both a bachelor's and master's degree from the prestigious University of Economics in Krakow.
                <span className="my-4">
                    My professional journey has taken me through diverse landscapes—from a dynamic small accounting office to a bustling corporation, and
                    finally to a unique hybrid that seamlessly blends both sectors. Along the way, I took charge of managing a branch of an accounting office,
                    gaining invaluable hands-on experience in human resources management.
                </span>
                With two years of expertise under my belt in the latter area, I'm driven to continuously enhance my skills in this ever-evolving field and
                ambitiously expand my competencies. I'm fueled by a genuine passion for the intricacies of accounting and the dynamic realm of human resources.
            </motion.div>
        </section>
    )
}
