import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">&copy; {year} Abdul Rauf. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <IconLink href="https://github.com/mrrauf99" label="GitHub">
            <FaGithub size={16} aria-hidden="true" />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/abdulrauf-dev/" label="LinkedIn">
            <FaLinkedin size={16} aria-hidden="true" />
          </IconLink>
          <IconLink href="mailto:itxrauf99@gmail.com" label="Email" external={false}>
            <Mail size={16} aria-hidden="true" />
          </IconLink>
        </div>
      </Container>
    </footer>
  );
}
