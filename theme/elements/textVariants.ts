import {
  BASE_FONTS,
} from "../elements";

export const BASE_TEXT_VARIANTS = {
  heading: {
    fontSize: 33,
    fontFamily: BASE_FONTS.heading,
  },
  footerHeading: {
    fontSize: 50,
    fontFamily: BASE_FONTS.ftHeading,
  },
  subHeading: {
    fontSize: 24,
    fontFamily: BASE_FONTS.subHeading,
  },
  body: {
    fontSize: 17,
    fontFamily: BASE_FONTS.body,
  },
};

export type AppTextVariants = keyof typeof BASE_TEXT_VARIANTS;
