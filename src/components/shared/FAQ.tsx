"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
};

export default function FAQ({ title, description, ...props }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full bg-surface border border-border rounded-xl overflow-hidden"
      {...props}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-left w-full px-6 py-4 hover:bg-background/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-foreground font-semibold text-lg flex-1">
            {title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-muted" />
          </motion.div>
        </div>
      </button>

      <motion.div
        id={`faq-content-${title.replace(/\s+/g, "-").toLowerCase()}`}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-background/30 border-t border-border">
          <p className="text-muted leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
