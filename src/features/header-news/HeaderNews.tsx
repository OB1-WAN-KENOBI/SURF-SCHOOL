import React from "react";
import { motion } from "framer-motion";
import { Button } from "@shared/ui/Button";
import newsImg from "@shared/assets/images/news.jpg";
import styles from "./HeaderNews.module.scss";

/**
 * Header news component
 * Displays latest news and call-to-action buttons in the header
 */
export const HeaderNews: React.FC = () => {
  return (
    <motion.div
      className={styles.headerNews}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className={styles.headerNewsBox}>
        <h3 className={styles.headerNewsTitle}>NAZARE. BIG WAvE TRIP</h3>
        <time dateTime="2025-02-10" className={styles.headerNewsTime}>
          10.02.2025
        </time>
        <a href="#news" className={styles.headerNewsLink}>
          more info
        </a>
        <img
          src={newsImg}
          alt="Nazare Big Wave Trip"
          className={styles.headerNewsImg}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.headerButtons}>
        <Button href="#contact" variant="primary">
          book now
        </Button>
        <Button href="#activities" variant="secondary">
          activities
        </Button>
      </div>
    </motion.div>
  );
};
