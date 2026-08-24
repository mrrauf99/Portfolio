"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { EMAIL_REGEX } from "@/lib/validation";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: ContactFormData = { name: "", email: "", subject: "", message: "" };
const EMPTY_ERRORS: ContactFormData = { name: "", email: "", subject: "", message: "" };

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFormData>(EMPTY_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = (): boolean => {
    const tempErrors: ContactFormData = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!EMAIL_REGEX.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.trim().length < 3) {
      tempErrors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const field = name as keyof ContactFormData;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    if (error) setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to send message");
      }

      setSubmitted(true);
      setFormData(EMPTY_FORM);
      setErrors(EMPTY_ERRORS);
    } catch (err) {
      console.error("Contact form error:", err);
      setError(`Failed to send message. Please try again or email me directly at ${CONTACT_EMAIL}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    submitted,
    setSubmitted,
    loading,
    handleChange,
    handleSubmit,
    error,
  };
}
