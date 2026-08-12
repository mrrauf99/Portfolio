import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const serifFont = "Georgia, 'Times New Roman', serif";
const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  });

  return (
    <Html>
      <Head />
      <Preview>New message from {name} — {subject}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <div style={styles.topBar} />

          <Section style={styles.content}>
            <Text style={styles.eyebrow}>Portfolio Contact</Text>
            <Heading as="h2" style={styles.wordmark}>
              Abdul Rauf
            </Heading>

            <Section style={styles.card}>
              <div style={styles.metaField}>
                <Text style={styles.metaLabel}>Name</Text>
                <Text style={styles.metaValue}>{name}</Text>
              </div>
              <div style={styles.metaField}>
                <Text style={styles.metaLabel}>Email</Text>
                <Link href={`mailto:${email}`} style={styles.metaLink}>
                  {email}
                </Link>
              </div>
              <div style={{ ...styles.metaField, marginBottom: 0 }}>
                <Text style={styles.metaLabel}>Subject</Text>
                <Text style={styles.metaValue}>{subject}</Text>
              </div>
            </Section>

            <Text style={styles.label}>Message</Text>
            <Section style={styles.card}>
              <Text style={styles.messageText}>{message}</Text>
            </Section>

            <Button
              href={`mailto:${email}?subject=${encodeURIComponent(`Re: ${subject}`)}`}
              style={styles.button}
            >
              Reply now
            </Button>

            <Hr style={styles.hr} />

            <Text style={styles.footer}>
              Sent from the contact form on{" "}
              <Link href="https://abdulrauf.dev" style={styles.footerLink}>
                abdulrauf.dev
              </Link>
              {" "}· {timestamp} UTC
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function contactEmailText({ name, email, subject, message }: ContactEmailProps) {
  return [
    "Portfolio Contact — New message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
    "",
    "---",
    "Sent from the contact form on https://abdulrauf.dev",
  ].join("\n");
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#fafaf7",
    margin: 0,
    padding: "40px 20px",
    fontFamily: sansFont,
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    border: "1px solid #e4e0d6",
    borderRadius: "6px",
    overflow: "hidden",
  },
  topBar: {
    height: "4px",
    backgroundColor: "#a85a2a",
  },
  content: {
    padding: "32px",
  },
  eyebrow: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#6b655a",
    margin: "0 0 4px",
  },
  wordmark: {
    fontFamily: serifFont,
    fontSize: "14px",
    fontWeight: 600,
    color: "#a85a2a",
    margin: "0 0 24px",
  },
  card: {
    backgroundColor: "#fafaf7",
    border: "1px solid #e4e0d6",
    borderRadius: "6px",
    padding: "18px 20px",
    marginBottom: "20px",
  },
  metaField: {
    marginBottom: "16px",
  },
  metaLabel: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#948c7e",
    margin: "0 0 4px",
  },
  metaValue: {
    fontSize: "13px",
    color: "#17140f",
    fontWeight: 500,
    margin: 0,
  },
  metaLink: {
    fontSize: "13px",
    color: "#a85a2a",
    fontWeight: 500,
    textDecoration: "none",
  },
  label: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#6b655a",
    margin: "0 0 8px",
  },
  messageText: {
    fontSize: "13px",
    lineHeight: 1.65,
    color: "#17140f",
    whiteSpace: "pre-wrap",
    margin: 0,
  },
  button: {
    display: "inline-block",
    backgroundColor: "#a85a2a",
    color: "#fafaf7",
    fontSize: "13px",
    fontWeight: 600,
    textDecoration: "none",
    borderRadius: "2px",
    padding: "11px 22px",
  },
  hr: {
    borderColor: "#e4e0d6",
    margin: "28px 0 16px",
  },
  footer: {
    fontSize: "11px",
    color: "#6b655a",
    margin: 0,
  },
  footerLink: {
    color: "#a85a2a",
    textDecoration: "none",
  },
};
