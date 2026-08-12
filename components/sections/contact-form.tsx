"use client";

import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useContactForm } from "@/hooks/use-contact-form";

const inputClasses =
  "w-full rounded-sm border bg-bg px-4 py-3 text-sm text-text placeholder-text-muted/60 transition-colors duration-150 focus:outline-none";

export function ContactForm() {
  const { formData, errors, error, loading, submitted, setSubmitted, handleChange, handleSubmit } =
    useContactForm();

  return (
    <Card className="p-8">
      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
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
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-sm text-text-muted">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={`${inputClasses} ${
                  errors.name ? "border-red-500/50 focus:border-red-500" : "border-border focus:border-accent"
                }`}
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-sm text-text-muted">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={`${inputClasses} ${
                  errors.email ? "border-red-500/50 focus:border-red-500" : "border-border focus:border-accent"
                }`}
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-subject" className="text-sm text-text-muted">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              className={`${inputClasses} ${
                errors.subject ? "border-red-500/50 focus:border-red-500" : "border-border focus:border-accent"
              }`}
            />
            {errors.subject && (
              <p id="contact-subject-error" className="mt-1 text-xs text-red-500">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-sm text-text-muted">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={`${inputClasses} resize-none ${
                errors.message ? "border-red-500/50 focus:border-red-500" : "border-border focus:border-accent"
              }`}
            />
            {errors.message && (
              <p id="contact-message-error" className="mt-1 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          {error && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-sm border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-500"
            >
              <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-accent py-3.5 text-sm font-medium text-accent-contrast transition-colors duration-150 hover:bg-accent-hover disabled:pointer-events-none disabled:opacity-60"
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
