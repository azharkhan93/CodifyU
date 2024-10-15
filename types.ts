import { ReactNode } from "react";
import { IconType } from "react-icons";

export type LogoProps = {
  src: string;
  alt: string;
};

export type StatCardProps = {
  heading: string;
  subHeading: string;
  statsImg: string;
};
export type ValueCardProps = {
  title: string;
  icon: IconType;
  title2: string;
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
  link: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  component: React.FC<{ onClose: () => void }>;
};

// export type TextAreaProps = {
//   name: string;
//   handleOnChange?: (value: string) => void;
//   placeholder: string;
//   type?: "text";
//    value: string ;
//   onBlur?: () => void;
//   label?: string;
// };

export type ModalContextProps = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type InfoSectionProps = {
  title: string;
  content: React.ReactNode;
};
export type TopNavBarProps = {
  backgroundImage: string;
  aboutText: string;
  whoWeAreText: string;
};
export type FAQItemProps = {
  question: string;
  answer: string;
};

export type FAQProps = {
  items: FAQItemProps[];
};
export type WorkCardProps = {
  step: number;
  title: string;
  description: string;
  icon: IconType;
};
export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
};
export type TeamCardsProps = {
  member: TeamMember;
};
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
export type Post = {
  slug: string;
  id: string;
  imageUrl: string;
  productName: string;
  productDesc: string;
  iconUrls: string[];
};

export type PageProps = {
  params: {
    slug: string;
  };
};

export type Product = {
  slug: string;
  id: string;
  imageUrl: string;
  productName: string;
  productDesc: string;
  productDesc1: string;
  iconUrls: string[];
};

export type ProjectCardsProps = {
  products: Post[];
};

export type TechImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export type ContactItemProps = {
  icon: IconType;
  text: string;
  link?: string;
};

export type FeatureCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export type WorkSpaceSection = {
  heading: string;
  description: string;
  workImage: string;
};
export type AiAdvantagesProps = {
  number: number;
  title: string;
  description: string;
};
export type CardProps = {
  heading: string;
  body: string;
  benefitsTitle: string;
  benefits: string[];
  imageUrl: string;
};

export type ContentBoxProps = {
  title: string;
  description: ReactNode; 
  imageSrc: string;
  reverse?: boolean;
};

export type Testimonial = {
  id: number;
  imageSrc: string;
  altText: string;
};

export type  HighlightSectionProps = {
  cardLimit?: number; 
  showButton?: boolean; 
}



export type AiProps = {
  aiCardsProps: {
    startIndex: number;
    endIndex: number;
    headingText: string;
    descriptionText: string;
  };
  aiAdvantages: { title: string; description: string }[];
  imageSrc: string;
  advantagesHeading: string;
  advantagesDescription: string;
}

export type AiDataCardsProps = {
  startIndex: number;
  endIndex: number;
  headingText: string;
  descriptionText: string;
}

export type UpdateFormValues = {
  name?: string;
  lastName?: string; 
  email?: string;
  phone?: string;
  subject?: string; 
   message?: string;
};