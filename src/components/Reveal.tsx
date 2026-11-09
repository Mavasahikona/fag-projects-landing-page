import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  y = 24,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const HairlineReveal: React.FC<{ className?: string; delay?: number }> = ({
  className = '',
  delay = 0,
}) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, amount: 'some' }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{ originX: 0 }}
    className={`h-[1px] bg-[#403a34]/25 w-full ${className}`}
  />
);
