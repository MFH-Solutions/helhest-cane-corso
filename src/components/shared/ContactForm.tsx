"use client";

import Button from "../ui/Button";
import { useTranslations } from "next-intl";

export default function ContactForm({ ...props }) {
  const t = useTranslations("Contact");
  const c = useTranslations("Common");

  return (
    <form className="flex flex-col gap-8">
      <div className="form-group flex flex-col gap-1">
        <label className="text-lg">Name</label>
        <input
          type="text"
          className="w-full min-h-[40px] border border-border focus:border-primary rounded-sm"
        ></input>
      </div>
      <div className="form-group flex flex-col gap-1">
        <label className="text-lg">Email</label>
        <input
          type="email"
          className="w-full min-h-[40px] border border-border focus:border-primary rounded-sm"
        ></input>
      </div>
      <div className="form-group flex flex-col gap-1">
        <label className="text-lg">Phone</label>
        <input
          type="tel"
          className="w-full min-h-[40px] border border-border focus:border-primary rounded-sm"
        ></input>
      </div>
      <div className="form-group flex flex-col gap-1">
        <label className="text-lg">Message</label>
        <textarea
          cols={4}
          rows={4}
          className="w-full border border-border focus:border-primary rounded-sm"
        ></textarea>
      </div>
      <Button>{c("submit")}</Button>
    </form>
  );
}
