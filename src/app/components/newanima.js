"use client";
import { motion } from "framer-motion";

export default function NewAnima() {
  return (
    <main className="container">
      <motion.div
        className="box3"
        initial={{ x: "0%" }}
        animate={{ skewX: "-45deg", x: "38px" }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      ></motion.div>
      <motion.div className="box4"></motion.div>
      <motion.div
        className="box5"
        initial={{ x: "0%" }}
        animate={{
          rotate: "90deg",
          x: "88px",
          y: "-125px",
          skewX: "45deg",
        }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      ></motion.div>
    </main>
  );
}
