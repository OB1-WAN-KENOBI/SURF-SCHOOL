import React from "react";
import { motion } from "framer-motion";
import { handleAnchorClick } from "@shared/lib/utils";
import { cn } from "@shared/lib/utils";
import type { ButtonVariant } from "@shared/types/common";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

/**
 * Button component with animations
 * Can be used as button or link
 * @param variant - Button style variant: "primary" or "secondary"
 * @param onClick - Click handler (for button mode)
 * @param href - Optional link URL (switches to link mode)
 * @param disabled - Disabled state
 * @param type - Button type (default: "button")
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const buttonClass = cn(styles.button, styles[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={!disabled ? { scale: 1.05 } : undefined}
        whileTap={!disabled ? { scale: 0.95 } : undefined}
        transition={{ duration: 0.2 }}
        onClick={(e) => {
          if (href.startsWith("#")) {
            handleAnchorClick(e, href);
          }
        }}
        aria-disabled={disabled}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      transition={{ duration: 0.2 }}
      aria-disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
