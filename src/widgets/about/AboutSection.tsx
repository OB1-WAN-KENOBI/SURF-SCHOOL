import React from "react";
import { motion } from "framer-motion";
import { Button } from "@shared/ui/Button";
import aboutImg from "@shared/assets/images/about.jpg";
import styles from "./AboutSection.module.scss";

const aboutItems = [
  "Algarve",
  "South coast",
  "Perfect waves for your experience",
];

/**
 * About section component
 * Displays information about the surf school
 */
export const AboutSection: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutInner}>
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.aboutSubtitle}>Who we are</p>
            <h2 className={styles.aboutTitle}>VILAMOURA SURF SCHOOL</h2>
            <ul className={styles.aboutList} role="list">
              {aboutItems.map((item, index) => (
                <motion.li
                  key={`about-${item}-${index}`}
                  className={styles.aboutItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  role="listitem"
                >
                  <h4>{item}</h4>
                </motion.li>
              ))}
            </ul>
            <div className={styles.aboutText}>
              <p>
                Was founded in 2006, being the FIRST SURF SCHOOL OF VILAMOURA
                BEACH, ALGARVE. Our school is certified by the Portuguese
                Surfing Federation and by Turismo de Portugal. The School aims
                to teach the art of surfing the waves in a safe, correct and
                relaxed way, always under the close and attentive supervision of
                teachers. Thousands of people have already learned from us to
                slide on the wave wall on top of a board.
              </p>
              <p>
                We have facilities that allow our students to equip themselves
                and keep their belongings safe and at the end of the class they
                have a warm shower at their disposal. We have a wide variety of
                safe boards (softboards) and modern wetsuits to teach in a safe
                and fun way. The heads of the School are trained by the Faculty,
                experienced and accredited by the Portuguese Surf Federation.
                The School is open everyday of the year, including weekends and
                holidays. Hours vary depending on tides and sea conditions.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.aboutImg}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="Vilamoura Surf School - About us"
              loading="lazy"
              decoding="async"
            />
            <Button
              href="#activities"
              variant="secondary"
              className={styles.aboutLink}
            >
              activities
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
