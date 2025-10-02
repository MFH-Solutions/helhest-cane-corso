"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type FadeInWhenVisibleProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  duration?: number;
  direction?: Direction;
};

export default function FadeInWhenVisible({
  children,
  className,
  duration = 0.8,
  direction = "up",
  ...prop
}: FadeInWhenVisibleProps) {
  const variants = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: 40 },
    right: { opacity: 0, x: -40 },
  };

  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
