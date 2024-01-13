import React from "react"
import hex from "@/styles/hex.module.css"

export default function Hexagon() {
    return (
        <div className={hex.socket}>
            <div className={`${hex.gel} ${hex.centerGel}`}>
                <div className={`${hex.hexBrick} ${hex.h1}`}></div>
                <div className={`${hex.hexBrick} ${hex.h2}`}></div>
                <div className={`${hex.hexBrick} ${hex.h3}`}></div>
            </div>
            <div className={`${hex.gel} ${hex.c1} ${hex.r1}`}>
                <div className={`${hex.hexBrick} ${hex.h1}`}></div>
                <div className={`${hex.hexBrick} ${hex.h2}`}></div>
                <div className={`${hex.hexBrick} ${hex.h3}`}></div>
            </div>
            <div className={`${hex.gel} ${hex.c2} ${hex.r1}`}>
                <div className={`${hex.hexBrick} ${hex.h1}`}></div>
                <div className={`${hex.hexBrick} ${hex.h2}`}></div>
                <div className={`${hex.hexBrick} ${hex.h3}`}></div>
            </div>
            <div className={`${hex.gel} ${hex.c3} ${hex.r1}`}>
                <div className={`${hex.hexBrick} ${hex.h1}`}></div>
                <div className={`${hex.hexBrick} ${hex.h2}`}></div>
                <div className={`${hex.hexBrick} ${hex.h3}`}></div>
            </div>
            <div className={`${hex.gel} ${hex.c4} ${hex.r1}`}>
                <div className={`${hex.hexBrick} ${hex.h1}`}></div>
                <div className={`${hex.hexBrick} ${hex.h2}`}></div>
                <div className={`${hex.hexBrick} ${hex.h3}`}></div>
            </div>
            <div className={`${hex.gel} ${hex.c5} ${hex.r1}`}>
                <div className={`${hex.hexBrick} ${hex.h1}`}></div>
                <div className={`${hex.hexBrick} ${hex.h2}`}></div>
                <div className={`${hex.hexBrick} ${hex.h3}`}></div>
            </div>
            <div className={`${hex.gel} ${hex.c6} ${hex.r1}`}>
                <div className={`${hex.hexBrick} ${hex.h1}`}></div>
                <div className={`${hex.hexBrick} ${hex.h2}`}></div>
                <div className={`${hex.hexBrick} ${hex.h3}`}></div>
            </div>
        </div>
    )
}
