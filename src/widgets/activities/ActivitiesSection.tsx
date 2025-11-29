import React, { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@shared/ui/Button";
import { activities } from "@entities/activity/model";
import imagesImg from "@shared/assets/images/images.jpg";
import styles from "./ActivitiesSection.module.scss";

/**
 * Activities section component
 * Displays available activities and services
 * Optimized with React.memo
 */
export const ActivitiesSection: React.FC = memo(() => {
  return (
    <>
      <section
        className={styles.activities}
        id="activities"
        aria-labelledby="activities-title"
      >
        <div className="container">
          <p className={styles.activitiesSubtitle}>Activities</p>
          <div className={styles.activitiesInfo}>
            <p className={styles.activitiesTitle}>
              without rip currents - SANDY BEACHES your best adventure
            </p>
            <h2 id="activities-title" className="visually-hidden">
              activities
            </h2>
            <div className={styles.activitiesText}>
              <p>
                Welcome to our school! If you've come this far, it's because
                you're interested in taking your first steps in surfing. It's
                never too late to start riding the waves, you'll love this new
                lifestyle! Surfing improves your physical and mental health in a
                relaxed and fun environment. Vilamoura Surf School also offers
                group and private lessons in Surf, Stand Up Paddle Board,
                Longboard, Bodyboard, Skimming and Carver Skate Board. If you
                are looking for to rent our equipment, we have high performance
                boards and wetsuits.
              </p>
              <Button href="#contact" variant="primary">
                book now
              </Button>
            </div>
          </div>
          <motion.ul
            className={styles.activitiesList}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            role="list"
          >
            {activities.map((activity, index) => (
              <motion.li
                key={activity.id}
                className={styles.activitiesItem}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                role="listitem"
              >
                <h5>
                  {activity.name.includes("trips") ? (
                    <>
                      Surf <br />
                      trips
                    </>
                  ) : (
                    activity.name
                  )}
                </h5>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
      <motion.img
        src={imagesImg}
        alt="Surfing activities and equipment"
        className={styles.siteImages}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        loading="lazy"
        decoding="async"
      />
    </>
  );
});

ActivitiesSection.displayName = "ActivitiesSection";
