"use client";
import { AnimatePresence, motion } from "framer-motion";
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
      className="w-full bg-gray-400  dark:bg-[#e8e8e8] rounded-xl"
      {...props}
    >
      <button
        className="cursor-pointer text-left w-full min-h-[50px] py-2 focus:outline-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center px-4">
          <span className="text-black">{title}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-gray-200 px-4 overflow-hidden rounded-xl"
          >
            <div className="py-4">
              <p className="text-black">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
