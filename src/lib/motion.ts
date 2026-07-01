/**
 * Shared motion presets for cinematic, luxury-feel animations.
 * Respects prefers-reduced-motion across the site.
 */

export const luxuryEase = [0.25, 0.1, 0.25, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: luxuryEase },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: luxuryEase },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: luxuryEase },
  },
};

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: luxuryEase },
  },
};

/** Viewport trigger margin used by scroll-reveal components */
export const viewportOnce = { once: true, margin: "-80px" as const };

/** Instant transition for reduced-motion users */
export const reducedMotionTransition = { duration: 0 };
