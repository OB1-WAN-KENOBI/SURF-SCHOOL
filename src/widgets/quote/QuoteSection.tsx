import React from "react";
import { motion } from "framer-motion";
import styles from "./QuoteSection.module.scss";

/**
 * Quote section component
 * Displays inspirational quote with animation
 */
export const QuoteSection: React.FC = () => {
  return (
    <div className="container">
      <motion.p
        className={styles.text}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        "WHAT LOOKS IMPOSSIBLE TODAY, TOMORROW WILL BE YOUR SOURCE OF
        INSPIRATION AND RELAXATION"
      </motion.p>
    </div>
  );
};
