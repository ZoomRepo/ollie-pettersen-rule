import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="gradient-bg text-white">
      <div className="container flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Hi, I'm Ollie Pettersen <br className="hidden sm:inline" />
            Software Engineer & Consultant
          </h1>
          <p className="max-w-[700px] text-lg text-gray-200">
          With a versatile background in data engineering, web development, software engineering, and DevOps, 
          I bring comprehensive solutions to complex challenges. 
          Let’s build something exceptional together!
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild className="bg-half-life-orange hover:bg-half-life-yellow hover:text-gray-900">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild className="text-white border-white hover:bg-white hover:text-gray-900">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

