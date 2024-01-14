"use client"

import React from "react"
import SectionHeading from "./section-heading"
import hex from "@/styles/hex.module.css"
import { skills } from "@/lib/data"
import { motion } from "framer-motion"
import { certificates } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

export default function Skills() {
    const { ref } = useSectionInView("Skills", 1)

    const scaleAnimationVariants = {
        animate: (index: number) => ({
            scale: [1, 0.01, 1],
            transition: {
                duration: 2,
                delay: 0.13 * index,
            },
        }),
    }

    const generateHexagon = (className: string, skillName: string, index: number) => (
        <motion.div
            className={`${className} w-[90px] h-[90px] absolute top-1/2 left-1/2`}
            initial="initial"
            variants={scaleAnimationVariants}
            whileInView="animate"
            viewport={{
                once: false,
            }}
            custom={index}
        >
            {[1, 2, 3].map((index) => (
                <div className={`${hex[`h${index}`]} bg-black w-[90px] h-[51px] absolute top-[15px]`}>
                    <div className="text-white rotate-[60deg] mt-[0.8rem]">{skillName}</div>
                </div>
            ))}
        </motion.div>
    )

    return (
        <section className="max-w-[51rem] text-center" ref={ref} id="skills">
            <SectionHeading>Skills</SectionHeading>

            <div className="relative h-[18rem]">
                <div className="w-[200px] h-[200px] absolute left-1/2 top-1/2 ml-[-100px] mt-[-100px]">
                    <motion.div
                        className={`w-[90px] h-[90px] absolute top-1/2 left-1/2 ml-[-45px] mt-[-45px]`}
                        initial="initial"
                        variants={scaleAnimationVariants}
                        whileInView="animate"
                        viewport={{
                            once: false,
                        }}
                    >
                        {[1, 2, 3].map((index) => (
                            <div className={`${hex[`h${index}`]} bg-black w-[90px] h-[51px] absolute top-[15px]`}>
                                <div className="text-white rotate-[60deg]">{skills[6].name}</div>
                            </div>
                        ))}
                    </motion.div>

                    {[1, 2, 3, 4, 5, 6].map((col) => (
                        <React.Fragment key={col}>{generateHexagon(`${hex[`c${col}`]}`, skills[col - 1].name, col)}</React.Fragment>
                    ))}
                </div>
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
