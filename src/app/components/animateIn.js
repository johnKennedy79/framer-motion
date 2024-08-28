"use client";

import { motion } from "framer-motion";
import { useTime } from "framer-motion";
import { useTransform } from "framer-motion";
export function AnimateIn({ children }) {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  return (
    <motion.div
      className="box2"
      style={{ rotate }}
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 4 }}
    >
      {children}
    </motion.div>
  );
}
