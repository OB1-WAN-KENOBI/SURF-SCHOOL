import React, { memo } from "react";
import { motion } from "framer-motion";
import { reviews } from "@entities/review/model";
import styles from "./ReviewsSection.module.scss";

/**
 * Reviews section component displaying customer testimonials
 * Optimized with React.memo and lazy loading for images
 */
export const ReviewsSection: React.FC = memo(() => {
  return (
    <section className={styles.review} aria-labelledby="reviews-title">
      <div className="container">
        <motion.div
          className={styles.reviewsTop}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.reviewsSubtitle}>Review</p>
          <h2 id="reviews-title" className={styles.reviewsTitle}>
            let's go surf & sup
          </h2>
        </motion.div>
        <div className={styles.reviewsItems} role="list">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              className={styles.reviewsItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              role="listitem"
            >
              <img
                className={styles.reviewsImg}
                src={review.image}
                alt={`Review by ${review.author}`}
                loading="lazy"
                decoding="async"
              />
              <blockquote className={styles.blockquote}>
                <p className={styles.blockquoteText}>{review.text}</p>
                <cite className={styles.blockquoteCite}>{review.author}</cite>
                <time dateTime={review.date} className={styles.blockquoteTime}>
                  {review.date}
                </time>
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
});

ReviewsSection.displayName = "ReviewsSection";
