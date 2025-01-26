import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Motekso",
    description: "A modern web application for managing and organizing tasks efficiently.",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://motekso.co.uk",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills.",
    image: "/placeholder.svg",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://your-portfolio-url.com",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication and payment integration.",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    link: "https://your-ecommerce-url.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-half-life-orange">Projects</h2>
      <p className="mt-4 text-muted-foreground">Here are some of the projects I've worked on:</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="border-2 border-half-life-yellow hover:border-half-life-orange transition-colors duration-300"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={200}
              className="object-cover"
            />
            <CardHeader>
              <CardTitle className="text-deep-purple">{project.title}</CardTitle>
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

