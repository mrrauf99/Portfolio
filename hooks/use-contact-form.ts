"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
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
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS is not configured");
      }

      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData(EMPTY_FORM);
      setErrors(EMPTY_ERRORS);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again or email me directly at itxrauf99@gmail.com");
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
