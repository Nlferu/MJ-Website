import React from "react"

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <h2 className="text-center text-black text-3xl font-medium capitalize mb-16 mt-32 sm:mt-32">{children}</h2>
}
