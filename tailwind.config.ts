import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            dropShadow: {
                shady: "3px 3px 2px rgba(0, 0, 0, 0.9)",
            },
            animation: {
                fullSpin: "spin 3s linear infinite",
            },
        },
    },
    plugins: [],
}
export default config
