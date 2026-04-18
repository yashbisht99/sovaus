import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Fade up animation wrapper
export function FadeUp({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "" 
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children animation
export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  className = "" 
}: { 
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
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
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll effect
export function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = "" 
}: { 
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

// Scale on scroll
export function ScaleOnScroll({ 
  children,
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ scale: smoothScale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

// Floating animation
export function FloatingElement({ 
  children,
  duration = 3,
  distance = 15,
  className = "" 
}: { 
  children: ReactNode;
  duration?: number;
  distance?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Rotating glow
export function RotatingGlow({
  size = 400,
  color = "rgba(13, 148, 136, 0.15)",
  duration = 20,
  className = ""
}: {
  size?: number;
  color?: string;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: { duration, repeat: Infinity, ease: "linear" },
        scale: { duration: duration / 4, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}

// Animated counter
export function AnimatedCounter({ 
  value, 
  duration = 2,
  prefix = "",
  suffix = "" 
}: { 
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useSpring(0, { duration: duration * 1000 });

  if (isInView) {
    count.set(value);
  }

  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{count}</motion.span>
      {suffix}
    </motion.span>
  );
}

// Magnetic hover effect
export function MagneticButton({ 
  children,
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
export function TextReveal({ 
  text,
  className = "" 
}: { 
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Morphing blob
export function MorphingBlob({
  color = "#0d9488",
  size = 300,
  className = ""
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute opacity-20 ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(60px)",
      }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70%/60% 30% 70% 40%",
          "30% 60% 70% 40%/50% 60% 30% 60%",
          "60% 40% 30% 70%/60% 30% 70% 40%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Reveal on hover card
export function HoverCard({ 
  children,
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
      }}
    >
      {children}
    </motion.div>
  );
}
