import { fontFamily } from "styled-system";
import {
  BASE_COLORS,
  BASE_BORDER_RADII,
  BASE_FONTS,
  BASE_SPACING,
} from "../elements";

export const BASE_BUTTON_VARIANTS = {
  primary: {
    color: "white",
    border: "none",
    fontSize: BASE_SPACING.l,
    font: BASE_FONTS.subHeading,
    fontWeights: "500",
    fontFamily: "ComfortaaMedium",
  },
  outline: {
    backgroundColor: "white",
    borderColor: BASE_COLORS.primary,
    color: BASE_COLORS.primary,
    borderRadius: 1,
    padding: "3px",
  },
  disabled: {
    backgroundColor: "grey",
    border: "none",
    color: "black",
    borderRadius: BASE_BORDER_RADII.xs,
    padding: "5px",
    fontSize: BASE_SPACING.l,
    font: BASE_FONTS.body,
    fontWeight: "500",
  },
};
export type AppButtonVariants = keyof typeof BASE_BUTTON_VARIANTS;
