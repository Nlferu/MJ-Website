import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className="group flex font-semibold items-center self-center justify-center w-[7rem] gap-2 py-[0.7rem] sm:py-[0.9rem]
                    text-black/80 hover:text-black bg-[#E3D5CA]/70
                    rounded-full focus:scale-110 hover:scale-110 hover:bg-[#F5EBE0] hover:bg-opacity-100
                    active:scale-105 duration-500 hover:translate-y-[-4px] disabled:scale-100 disabled:bg-opacity-50 border border-white"
            type="submit"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
            ) : (
                <>
                    Send <FaPaperPlane className="text-sm opacity-80 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    )
}
