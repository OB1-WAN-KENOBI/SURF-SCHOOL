import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@shared/config/socialLinks";
import type { SocialLinkVariant } from "@shared/types/common";
import styles from "./SocialLinks.module.scss";

interface SocialLinksProps {
  variant?: SocialLinkVariant;
}

/**
 * Social media links component
 * @param variant - Color variant: "light" or "dark"
 */
export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "light",
}) => {
  return (
    <ul className={styles.socialList} role="list">
      {socialLinks.map((link, index) => (
        <motion.li
          key={`social-${link.name}-${index}`}
          className={styles.socialItem}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href={link.url || "#"}
            className={styles.socialLink}
            aria-label={`Visit our ${link.name} page`}
            target={link.url && link.url !== "#" ? "_blank" : undefined}
            rel={
              link.url && link.url !== "#" ? "noopener noreferrer" : undefined
            }
          >
            <img
              src={`/images/${
                variant === "light" ? link.icon : link.iconWhite
              }`}
              alt={`${link.name} icon`}
              loading="lazy"
              decoding="async"
            />
          </a>
        </motion.li>
      ))}
    </ul>
  );
};
