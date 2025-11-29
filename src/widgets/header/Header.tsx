import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@features/navigation";
import { HeaderInfo } from "@features/header-info";
import { HeaderNews } from "@features/header-news";
import titleImg from "@shared/assets/images/title.png";
import styles from "./Header.module.scss";

/**
 * Header component
 * Main site header with navigation, title, and hero content
 */
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerTop}>
          <Navigation />
          <a
            href="tel:+351912568342"
            className={styles.headerPhone}
            aria-label="Call us at +351912568342"
          >
            <img
              src="/images/phone-ico.svg"
              alt="Phone icon"
              loading="lazy"
              decoding="async"
            />
            +351912568342
          </a>
        </div>
        <motion.img
          src={titleImg}
          alt="Surfing school title"
          className={styles.titleImg}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          loading="eager"
          decoding="async"
        />
        <h2 className="visually-hidden">Surfing school</h2>
        <motion.p
          className={styles.titleText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Vilamoura. Portugal
        </motion.p>
        <div className={styles.headerContent}>
          <HeaderInfo />
          <HeaderNews />
        </div>
      </div>
    </header>
  );
};
