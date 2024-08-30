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

  export type Service = {
    title: string;
    description: string;
    icon: IconType; 
    linkText: string;
  };

  export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    component: React.FC<{ onClose: () => void }>;
  };

  export type TextAreaProps = {
    name: string;
    handleOnChange?: (e: string) => void;
    placeholder: string;
    type?: "text";
    value: string | number;
    onBlur?: () => void;
  };