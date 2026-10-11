"use client";

import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { useEffect, useRef, type ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { useContactForm } from "@/hooks/use-contact-form";

const inputClasses =
  "w-full scroll-mt-24 rounded-sm border bg-bg px-4 py-3 text-base text-text placeholder-text-muted transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
};

function FormField({
  id,
  name,
  label,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
  as = "input",
  rows,
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const fieldClasses = `${inputClasses} ${as === "textarea" ? "min-h-36 resize-y " : ""}${
    error ? "border-red-500/50 focus:border-red-500" : "border-border focus:border-accent"
  }`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm text-text-muted">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={fieldClasses}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          autoComplete={name === "name" || name === "email" ? name : undefined}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={fieldClasses}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const { formData, errors, error, loading, submitted, setSubmitted, handleChange, handleSubmit } =
    useContactForm();
  const successRef = useRef<HTMLDivElement>(null);
  const wasSubmitted = useRef(false);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
    else if (wasSubmitted.current) document.getElementById("contact-name")?.focus();
    wasSubmitted.current = submitted;
  }, [submitted]);

  return (
    <Card className="p-5 sm:p-8">
      {submitted ? (
        // A status region groups the confirmation heading, copy, and next action.
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
        <div ref={successRef} tabIndex={-1} role="status" className="flex scroll-mt-24 flex-col items-center justify-center gap-4 py-12 text-center">
          <CheckCircle size={48} className="text-accent" aria-hidden="true" />
          <h3 className="text-xl font-medium text-text">Message sent!</h3>
          <p className="max-w-xs text-sm text-text-muted">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="cursor-pointer text-sm font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-busy={loading} className="space-y-5">
          <p className="text-sm text-text-muted">All fields are required.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              id="contact-name"
              name="name"
              label="Name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
              placeholder="Your name"
            />

            <FormField
              id="contact-email"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <FormField
            id="contact-subject"
            name="subject"
            label="Subject"
            value={formData.subject}
            error={errors.subject}
            onChange={handleChange}
            placeholder="What's this about?"
          />

          <FormField
            id="contact-message"
            name="message"
            label="Message"
            as="textarea"
            rows={5}
            value={formData.message}
            error={errors.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
          />

          {error && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-sm border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-700 dark:text-red-400"
            >
              <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-accent py-3.5 text-sm font-medium text-accent-contrast transition-[background-color,transform] duration-150 hover:bg-accent-hover active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60 disabled:active:scale-100"
          >
            {loading ? (
              <>
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-accent-contrast/30 border-t-accent-contrast"
                  aria-hidden="true"
                />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} aria-hidden="true" />
                Send message
              </>
            )}
          </button>
        </form>
      )}
    </Card>
  );
}
