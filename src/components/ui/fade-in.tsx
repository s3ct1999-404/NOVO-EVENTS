"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { luxuryEase, reducedMotionTransition, viewportOnce } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once, margin: viewportOnce.margin });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const offset = prefersReducedMotion
    ? { y: 0, x: 0 }
    : directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: prefersReducedMotion ? 1 : 0, ...offset }}
      animate={
        isInView || prefersReducedMotion
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...offset }
      }
      transition={
        prefersReducedMotion
          ? reducedMotionTransition
          : { duration, delay, ease: luxuryEase }
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delay = 0,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, viewportOnce);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: prefersReducedMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: staggerDelay, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: prefersReducedMotion
            ? reducedMotionTransition
            : { duration: 0.5, ease: luxuryEase },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Subtle scale reveal for image containers */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, viewportOnce);

  return (
    <motion.div
      ref={ref}
      initial={
        prefersReducedMotion
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 1.04 }
      }
      animate={
        isInView || prefersReducedMotion
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 1.04 }
      }
      transition={
        prefersReducedMotion
          ? reducedMotionTransition
          : { duration: 0.8, delay, ease: luxuryEase }
      }
      className={cn("overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}
