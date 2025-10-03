"use client";
import Button from "../ui/Button";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const c = useTranslations("Common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      className="flex flex-col gap-6 bg-background p-8 rounded-xl"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      {/* Name field - 8pt spacing: gap-2 */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="text-sm font-medium text-foreground"
        >
          Name{" "}
          <span className="text-danger" aria-label="required">
            *
          </span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full h-12 px-4 border border-border bg-surface text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          aria-required="true"
        />
      </div>

      {/* Email field - 8pt spacing: gap-2 */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-foreground"
        >
          Email{" "}
          <span className="text-danger" aria-label="required">
            *
          </span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full h-12 px-4 border border-border bg-surface text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          aria-required="true"
        />
      </div>

      {/* Phone field - 8pt spacing: gap-2 */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-phone"
          className="text-sm font-medium text-foreground"
        >
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full h-12 px-4 border border-border bg-surface text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        />
      </div>

      {/* Message field - 8pt spacing: gap-2 */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-foreground"
        >
          Message{" "}
          <span className="text-danger" aria-label="required">
            *
          </span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-border bg-surface text-foreground rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          aria-required="true"
        />
      </div>

      <Button type="submit" variant="primary" size="lg">
        {c("submit")}
      </Button>
    </form>
  );
}
