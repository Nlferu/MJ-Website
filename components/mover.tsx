"use client"

import { TbArrowBigUpLinesFilled } from "react-icons/tb"
import { useActiveSectionContext } from "@/context/active-section-context"
import { motion } from "framer-motion"

export default function Mover() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <div className="">
            {activeSection !== "Home" ? (
                <motion.a
                    className="group flex fixed right-8 bottom-8 w-14 h-14 sm:w-16 sm:h-16 bg-[#E3D5CA] rounded-full focus:scale-110 hover:scale-110 hover:bg-[#E3D5CA] hover:bg-opacity-100
                    active:scale-105 hover:translate-y-[-4px] backdrop-blur-md border border-[#c2afa1] items-center justify-center duration-500"
                    href="#home"
                    onClick={() => {
                        setActiveSection("Home")
                        setTimeOfLastClick(Date.now())
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <TbArrowBigUpLinesFilled className="text-3xl opacity-90 transition-all duration-500 group-hover:-translate-y-1" />
                </motion.a>
            ) : (
                <></>
            )}
        </div>
    )
}
