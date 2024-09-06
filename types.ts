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
  export type ServicesCardProps = {
    service: Service;
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
    handleOnChange?: (value: string) => void; 
    placeholder: string;
     type?: "text"; 
    // value: string ; 
    onBlur?: () => void;
    label?: string; 
  };

  export type ModalContextProps = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }

  export type InfoSectionProps = {
    title: string;
    content: React.ReactNode;
  };
  export type TopNavBarProps = {
    backgroundImage: string;
    aboutText: string;
    whoWeAreText: string;
  }
  export type FAQItemProps = {
    question: string;
    answer: string;
  }

  
  export type FAQProps = {
    items: FAQItemProps[];
  }
  export type WorkCardProps = {
    step: number;
    title: string;
    description: string;
    icon: IconType;
  }
  export type TeamMember = {
    name: string;
    role: string;
    imageUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    facebookUrl: string;
  }
  export type TeamCardsProps = {
    member: TeamMember;
  }
  export type TechSectionType = {
    title3: string;
  };

  export type IconData = {
    IconComponent: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>;
    size: number;
    color: string;
  };
  
  export type IconBoxProps = {
    iconData: IconData;
  };
  export type  Product = {
    id: string;
    imageUrl: string;
    productName: string;
    productDes: string;
    iconUrls: string[];
  }