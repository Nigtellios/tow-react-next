import { gridBreakpoints } from "../styles/Breakpoints";

/**
 * Helper for media queries. Returns a media query string for the given breakpoint.
 */
const media = {
  /**
   * @param {string} name
   * @example media.min('md')
   * // returns `@media (min-width: 768px)`
   */
  min: (name): string => `@media (min-width: ${gridBreakpoints[name]}px)`,

  /**
   * @param {keyof gridBreakpoints} name
   * @example media.max('lg')
   * // returns `@media (max-width: 1023px) - lg breakpoint minus one`
   */
  max: (name): string =>
    `@media (max-width: ${gridBreakpoints[name] - 1}px)`,

  /**
   * @param {keyof gridBreakpoints} minName
   * @param {keyof gridBreakpoints} maxName
   * @example media.between('md', 'lg')
   * // returns `@media (min-width: 768px) and (max-width: 1023px)`
   */
  between: (minName: string, maxName: string): string =>
    `@media (min-width: ${gridBreakpoints[minName]}px) and (max-width: ${
      gridBreakpoints[maxName] - 1
    }px)`,
};

export default media;