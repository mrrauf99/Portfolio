import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's work together"
          subtitle="Whether you have a project in mind, an opportunity to share, or just want to say hello, I'm always open to a conversation."
        />

        <div className="mx-auto mt-10 max-w-xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
