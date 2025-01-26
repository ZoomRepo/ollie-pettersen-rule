import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-half-life-orange">
        Get in Touch
      </h2>
      <p className="mt-4 text-muted-foreground">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>
      <form className="mt-8 space-y-4">
        <Input type="text" placeholder="Your Name" required className="border-deep-purple focus:border-light-purple" />
        <Input
          type="email"
          placeholder="Your Email"
          required
          className="border-deep-purple focus:border-light-purple"
        />
        <Textarea placeholder="Your Message" required className="border-deep-purple focus:border-light-purple" />
        <Button type="submit" className="bg-half-life-orange hover:bg-half-life-yellow hover:text-gray-900">
          Send Message
        </Button>
      </form>
    </section>
  )
}

