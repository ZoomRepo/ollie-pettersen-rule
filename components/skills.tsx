import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Figma",
  "Responsive Design",
]

export default function Skills() {
  return (
    <section id="skills" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-half-life-orange">
        Skills & Technologies
      </h2>
      <p className="mt-4 text-muted-foreground">Here are some of the technologies and tools I work with:</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="bg-deep-purple text-white hover:bg-light-purple">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

