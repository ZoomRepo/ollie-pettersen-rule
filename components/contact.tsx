"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "OlliePettersenPortfolio", // Replace with your EmailJS service ID
        "template_663urhm", // Replace with your EmailJS template ID
        formData,
        "aINz7CYrwogywtd_X" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-half-life-orange">
        Get in Touch
      </h2>
      <p className="mt-4 text-muted-foreground">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="border-deep-purple focus:border-light-purple" />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-deep-purple focus:border-light-purple"
        />
        <Textarea placeholder="Your Message" 
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                  required className="border-deep-purple focus:border-light-purple" />
        <Button type="submit" className="bg-half-life-orange hover:bg-half-life-yellow hover:text-gray-900">
          Send Message
        </Button>
      </form>
      {status && <p className="mt-4 text-sm text-green-500">{status}</p>}
    </section>
  )
}

