"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "./components/animateIn";
import NewAnima from "./components/newanima";
export default function Home() {
  return (
    <main>
      <motion.div
        className="box1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimateIn />
      </motion.div>

      <NewAnima />
    </main>
  );
}
