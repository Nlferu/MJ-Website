import Intro from "@/components/intro"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 overflow-clip">
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </main>
    )
}
