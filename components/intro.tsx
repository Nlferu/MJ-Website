import React from "react"
import Image from "next/image"
import { Cormorant_Garamond } from "next/font/google"
import { BsTelephone, BsEnvelope } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"

// Icon font: Balgin
// Website Font: Cormorant Garamond
const cormorant = Cormorant_Garamond({ weight: "400", subsets: ["latin"] })

export default function Intro() {
    return (
        <section className="max-w-[51rem] text-center scroll-mt-[100rem]" id="home">
            <div className="flex flex-col items-center justify-center">
                <Image
                    className="w-[20rem] h-[20rem] object-fit rounded-full mb-10 flex self-center justify-center"
                    src="/icon.png"
                    alt="MJ"
                    height="400"
                    width="400"
                    quality="95"
                    priority={true}
                />
            </div>
            <div className={`${cormorant.className} text-5xl mb-[4rem]`}>Marta Jabłońska</div>
            <div className="flex gap-20">
                <div className="flex gap-5">
                    <BsTelephone className="text-3xl" /> 666 666 666
                </div>
                <div className="flex gap-5">
                    <BsEnvelope className="text-3xl" /> mailito@interia.pl
                </div>
                <div className="flex gap-5">
                    <TfiWorld className="text-3xl" /> marta-jablonska.vercel.app
                </div>
            </div>
        </section>
    )
}
