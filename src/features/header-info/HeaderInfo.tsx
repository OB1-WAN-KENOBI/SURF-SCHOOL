import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { SocialLinks } from "@features/social-links";
import { activities } from "@entities/activity/model";
import styles from "./HeaderInfo.module.scss";

/**
 * Header info component displaying activities list and social links
 * Optimized with useMemo for animation delays
 */
export const HeaderInfo: React.FC = () => {
  const animatedItems = useMemo(
    () =>
      activities.map((activity, index) => ({
        ...activity,
        animationDelay: 0.3 + index * 0.1,
      })),
    []
  );

  return (
    <div className={styles.headerInfo}>
      <motion.ul
        className={styles.headerInfoList}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        role="list"
      >
        {animatedItems.map((item) => (
          <motion.li
            key={item.id}
            className={styles.headerInfoItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.animationDelay }}
            whileHover={{ scale: 1.05 }}
            role="listitem"
          >
            <h4>{item.name}</h4>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className={styles.headerSocial}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <SocialLinks variant="light" />
      </motion.div>
    </div>
  );
};
