import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@shared/config/navigation";
import { handleAnchorClick } from "@shared/lib/utils";
import { cn } from "@shared/lib/utils";
import styles from "./Navigation.module.scss";

/**
 * Navigation component with mobile menu
 * Supports smooth scrolling for anchor links
 */
export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn(styles.menu, isOpen && styles.menuOpen)}>
      <motion.button
        className={styles.menuBtn}
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id="mobile-menu"
            className={styles.menuList}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            role="menu"
          >
            {navigationItems.map((item, index) => (
              <motion.li
                key={`nav-${item.label}-${index}`}
                className={styles.menuItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                role="menuitem"
              >
                <a
                  href={item.href}
                  className={styles.menuLink}
                  onClick={(e) => {
                    handleAnchorClick(e, item.href, () => setIsOpen(false));
                  }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <ul className={styles.menuListDesktop} role="menubar">
        {navigationItems.map((item, index) => (
          <li
            key={`nav-desktop-${item.label}-${index}`}
            className={styles.menuItem}
            role="none"
          >
            <motion.a
              href={item.href}
              className={styles.menuLink}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => handleAnchorClick(e, item.href)}
              role="menuitem"
            >
              {item.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
