import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML",
  "CSS/SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "SQL Server",
  "Git",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "PHP",
  ".Net",
  "C#",
  "Python",
  "Elasticsearch",
  "Kibana",
  "Logstash",
  "Kafka",
  "RabbitMQ",
  "Redis",
  "CI/CD",
  "DevOps",
  "Spark",
  "Databricks",
  "Prototyping",
  "UX/UI Design",
  "Consultation",
  "Agile",
  "Scrum",
  "Kanban",
  "Management",
  "Mentorship",
  "Team Building",
  "Training"
]

export default function Skills() {
  return (
    <section id="skills" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-half-life-orange">
        Skills & Technologies
      </h2>
      <p className="mt-4 text-muted-foreground">Here is a list of the technologies and tools I have worked with over the years just to name a few, as well as some of the skills I have aquired and use in my day to day work.</p>
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

