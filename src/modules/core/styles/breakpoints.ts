interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: Size = {
  xs: "360px", // for small screen mobile
  sm: "700px",
  md: "768px", // for tablets
  lg: "1024px", // for laptops
  xl: "1600px", // for big screens
  xxl: "1920px", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.xs})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xl})`,
};
