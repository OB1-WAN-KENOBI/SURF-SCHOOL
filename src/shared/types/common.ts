/**
 * Common types used across the application
 */

export type ButtonVariant = "primary" | "secondary";

export type SocialLinkVariant = "light" | "dark";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  iconWhite: string;
  url?: string;
}
