import Intro from "@/components/intro"
import About from "@/components/about"

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 h-[300rem]">
            <Intro />
            <About />
        </main>
    )
}
