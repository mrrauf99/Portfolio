import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Let's work together"
          subtitle="Got a project, a role, or just want to say hi? Send a message below."
        />

        <div className="mx-auto mt-10 max-w-xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
