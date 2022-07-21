/**
 * Grid Breakpoints for custom Media Queries
 * @type {{s: number, xl: number, max: number, md: number, sm: number, xs: number, lg: number, xxxl: number, xxl: number}}
 */
const gridBreakpoints = {
  "xs": 320,
  "s": 475,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
  "xxl": 1320,
  "xxxl": 1440,
  "max": 1920,
}

/**
 * Custom Breakpoints for media queries
 * @type {{mobileMenu: number}}
 */
const customBreakpoints = {
  "mobileMenu": 1200
}

/**
 * Max widths for basic containers
 * @type {{xl: number, md: number, sm: number, xs: number, lg: number}}
 */
const containerMaxWidths = {
  "xs": 540,
  "sm": 768,
  "md": 1200,
  "lg": 1270,
  "xl": 1320
}

export { gridBreakpoints, customBreakpoints, containerMaxWidths };