/**
 * Utility function to combine class names
 * Filters out falsy values and joins them with space
 * @param classes - Array of class names (strings, undefined, null, false)
 * @returns Combined class string
 */
export const classNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Alias for classNames
 */
export const cn = classNames;
