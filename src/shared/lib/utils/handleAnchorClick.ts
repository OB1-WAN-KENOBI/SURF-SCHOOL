/**
 * Handles anchor link clicks with proper navigation
 * Prevents default behavior for hash-only links and scrolls smoothly
 * @param e - Mouse event
 * @param href - Link href attribute
 * @param callback - Optional callback to execute after handling
 */
export const handleAnchorClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  callback?: () => void
): void => {
  if (href === "#" || href.startsWith("#")) {
    e.preventDefault();

    if (href !== "#" && href.length > 1) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    if (callback) {
      callback();
    }
  } else if (callback) {
    callback();
  }
};
