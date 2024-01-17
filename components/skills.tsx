"use client"

import React from "react"
import SectionHeading from "./section-heading"
import hex from "@/styles/hex.module.css"
import Image from "next/image"
import { skills } from "@/lib/data"
import { motion } from "framer-motion"
import { certificates } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5)

    const scaleAnimationVariants = {
        animate: (index: number) => ({
            scale: [0.1, 0.01, 1],
            transition: {
                duration: 1.5,
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
                <div key={index} className={`${hex[`h${index}`]} bg-[#34312D] w-[90px] h-[51px] absolute top-[15px]`}></div>
            ))}

            <div className="relative w-[2rem] h-[2rem] ml-[2rem] rounded-full z-[100]">
                <Image
                    className="rounded-full translate-x-[-3px] translate-y-1 drop-shadow-shady"
                    src={skills[index - 1].icon}
                    alt="MJ"
                    height="400"
                    width="400"
                    quality="95"
                    priority={true}
                />
                <div className="text-white w-[90px] h-[51px] translate-x-[-35%] translate-y-[1rem] drop-shadow-shady">{skillName}</div>
            </div>
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
                            <div key={index} className={`${hex[`h${index}`]} bg-[#34312D] w-[90px] h-[51px] absolute top-[15px]`}></div>
                        ))}

                        <div className="relative w-[2rem] h-[2rem] ml-[2rem] rounded-full z-[100]">
                            <Image
                                className="rounded-full translate-x-[-3px] translate-y-1 drop-shadow-shady"
                                src={skills[6].icon}
                                alt="MJ"
                                height="400"
                                width="400"
                                quality="95"
                                priority={true}
                            />
                            <div className="text-white text-xs w-[90px] h-[51px] translate-x-[-35%] translate-y-[0.5rem] drop-shadow-shady">
                                {skills[6].name}
                            </div>
                        </div>
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
