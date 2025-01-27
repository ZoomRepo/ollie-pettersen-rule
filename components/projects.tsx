import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "FlipFocus",
    description: "Our automated market finder alerts you to items listed below market value in real-time. Turn market inefficiencies into profit with instant notifications.",
    image: "flipfocus.png",
    techStack: ["TypeScript", "JavaScript", "CSS", "Next.js"],
    link: "https://flipfocus.co.uk",
  },
  {
    title: "Profit Pulse",
    description: "A service that searches for products below a certain price and sends you a notification message when they are found, this project was the predecesor to FlipFocus",
    image: "profitpulse.png", //https://pbs.twimg.com/media/GgVVG5ZWMAA6J6i?format=png&name=900x900",
    techStack: ["PHP", "MySQL", "Python", "Twilio", "NTFY"],
    link: "https://profitpulse.motekso.co.uk",
  },
  {
    title: "X Tweet Scheduler",
    description: "Preoare your X content ahead of time using this tool",
    image: "https://motekso.co.uk/images/x-scehduler-messages.png",
    techStack: ["PHP", "Python", "MySQL", "CSS"],
    link: "https://github.com/ZoomRepo/x_scheduled_tweets",
  },
  {
    title: "Controversial Deaths",
    description: "One of my weirder projects, this is a list of people who have died in controversial circumstances",
    image: "https://motekso.co.uk/images/controversial-deaths.png",
    techStack: ["PHP", "Python", "MySQL", "CSS"],
    link: "https://controversial-deaths.motekso.co.uk",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-half-life-orange">Projects</h2>
      <p className="mt-4 text-muted-foreground">Here are some of my personal projects I've currently been working on in my spare time this year:</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="border-2 border-half-life-yellow hover:border-half-life-orange transition-colors duration-300"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={450}
              height={180}
              className="object-cover"
            />
            <CardHeader>
              <CardTitle className="text-half-life-orange">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-light-purple text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-half-life-orange hover:text-half-life-yellow transition-colors duration-300"
              >
                View Project
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

