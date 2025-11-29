import React from "react";
import { motion } from "framer-motion";
import { SocialLinks } from "@features/social-links";
import logoImg from "@shared/assets/images/logo.png";
import styles from "./Footer.module.scss";

/**
 * Footer component
 * Site footer with contact information, links, and social media
 */
export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <motion.div
          className={styles.footerTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.footerTitle}>VILAMOURA SURF SCHOOL</h1>
          <a href="/" className={styles.footerLogo} aria-label="Home">
            <img
              src={logoImg}
              alt="Vilamoura Surf School Logo"
              loading="lazy"
              decoding="async"
            />
          </a>
        </motion.div>
        <motion.dl
          className={styles.footerInfoList}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.footerInfoItem}>
            <dt>Surf School</dt>
            <dd>
              <span>record n.325 Portuguese Surfing Federation</span>
            </dd>
            <dd>RNAAT registration 986/2016</dd>
          </div>
          <div className={styles.footerInfoItem}>
            <dt>Adress</dt>
            <dd>
              <span> record n.325 Portuguese Surfing Federation</span>
            </dd>
            <dd>Vilamoura - Algarve - Portugal</dd>
          </div>
          <div className={styles.footerInfoItem}>
            <dt>Contacts</dt>
            <dd>
              <span>
                Mobil and wattsapp
                <a href="tel:+351912568342">(+351) 912568342</a>
              </span>
            </dd>
            <dd>
              <a href="mailto:vilamourasurf@gmail.com">
                vilamourasurf@gmail.com
              </a>
            </dd>
          </div>
        </motion.dl>
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <SocialLinks variant="dark" />
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <ul role="list">
              <li className={styles.footerNavItem} role="listitem">
                <a href="#terms" className={styles.footerNavLink}>
                  Terms and conditions
                </a>
              </li>
              <li className={styles.footerNavItem} role="listitem">
                <a href="#privacy" className={styles.footerNavLink}>
                  Privacy policy
                </a>
              </li>
              <li className={styles.footerNavItem} role="listitem">
                <a href="#complaint" className={styles.footerNavLink}>
                  Complaint book
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};
