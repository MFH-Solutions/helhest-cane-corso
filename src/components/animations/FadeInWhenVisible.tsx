"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type FadeInWhenVisibleProps = {
  children: ReactNode;
  duration?: number;
  direction?: Direction;
  delay?: number;
  className?: string;
};

export default function FadeInWhenVisible({
  children,
  className,
  duration = 0.8,
  direction = "up",
  delay = 0,
  ...props
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
      transition={{
        duration,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
