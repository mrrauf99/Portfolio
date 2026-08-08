import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ProjectNotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-3xl font-medium text-text">Project not found</h1>
      <p className="max-w-md text-text-muted">
        The project you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Button href="/">Back to home</Button>
    </Container>
  );
}
