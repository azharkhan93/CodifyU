import { IconType } from "react-icons";

export type LogoProps = {
    src: string;
    alt: string;
    size: number;
  };

  export type StatCardProps = {
    heading: string;
    subHeading: string;
  }
  export type ValueCardProps = {
    title: string;
    icon: IconType;
  };

  export type Review = {
    title: string;
    text: string;
    image: string;
    alt: string;
    name: string;
  };
  
  export type ReviewCardProps = {
    review: Review;
  };