export const BASE_COLORS = {
  primary: "#141414",
  primaryLight: "#7352c726",
  secondary: "#D93922",
  grey: "#8594A5",
  greenish: "#9e1f63",
  greyLight: "#E9ECEF",
  transparent: "",
  white: "#ffffff",
  modalOverlayBg: "rgba(0,0,0,0.5)",
  boxShadow: "rgba(0, 123, 255, 1) 0px 0px 1.25rem 0px, rgba(0, 0, 0, 0.5) 0px 0px 1.25rem 0px",
  modalShadow:
    "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
    gradientBold: "#333399"
};

export type AppColors = keyof typeof BASE_COLORS;
