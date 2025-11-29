import React from "react";
import { Header } from "@widgets/header";
import { AboutSection } from "@widgets/about";
import { ActivitiesSection } from "@widgets/activities";
import { ReviewsSection } from "@widgets/reviews";
import { Footer } from "@widgets/footer";
import { QuoteSection } from "@widgets/quote";
import styles from "./HomePage.module.scss";

/**
 * Home page component
 * Main landing page with all sections
 */
export const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <QuoteSection />
      <AboutSection />
      <ActivitiesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};
