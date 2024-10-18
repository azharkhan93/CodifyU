import { MdOutlineDeveloperMode, MdOutlineArrowOutward } from "react-icons/md";
import { FaBrain, FaBriefcase, FaChartLine, FaCloud, FaCode, FaCog, FaCogs, FaCommentDots, FaConciergeBell, FaDollarSign,FaEnvelope,  FaHome,  FaInfoCircle,  FaLifeRing,  FaLightbulb, FaMapMarkerAlt, FaPhoneAlt, FaRegEye, FaRegHandPaper, FaRobot, FaRocket, FaSearch, FaServer, FaStar, FaTools, FaUsers, } from "react-icons/fa";
import { AiFillApi, } from "react-icons/ai"; 
import { IconType } from "react-icons";
import { GiArtificialIntelligence } from "react-icons/gi";

export const STATS_DATA = [
  {
    id: 1,
    heading: "9+years",
    subHeading: "In Business",
    image: "/websiteimages/9.png", 
  },
  {
    id: 2,
    heading: "150+",
    subHeading: "Global Clients",
    image: "/websiteimages/26.png", 
  },
  {
    id: 3,
    heading: "$200m",
    subHeading: "Million Value Generation",
    image: "/websiteimages/27.png",
  },
];

export const VALUES_DATA = [
  
  {
    id: 1,
    title: "Empowering Startups",
    title2: "Our startup accelerator program is your launchpad to success",
    icon: FaRocket, 
  },
  {
    id: 2,
    title: "Prime Excellence with Cost Effectiveness",
    title2: "High-quality tech solutions without the high costs.",
    icon: FaStar, 
  },
  {
    id: 3,
    title: "Accelerated Growth",
    title2: "Fast-track your market entry and expansion with our proven strategies",
    icon: FaCog, 
  },
  
  {
    id: 4,
    title: "Quality and Savings",
    title2: "Getting high-quality tech services without breaking thebank. We offer PREMIUM services at a fraction of the cost of in-house teams.",
    icon: FaRegHandPaper, 
  },
];

export const NavbarData = [
  {
    title: "Home",
    link: "/",
    icon: FaHome,
  },
  {
    title: "About",
    link: "/about",
    icon: FaInfoCircle,
  },
  {
    title: "Contact",
    link: "/contact",
    icon: FaPhoneAlt,
  },
  {
    title: "Portfolio",
    link: "/portfolio",
    icon: FaBriefcase,
  },
  {
    title: "Testimonials",
    link: "/testimonials",
    icon: FaCommentDots,
  },
  {
    title: "Services",
    link: "/services",
    icon: FaConciergeBell,
    dropdown: [
      {
        title: "AI and Machine Learning",
        link: "/services/ai-ml",
      },
      {
        title: "DevOps and MLOps",
        link: "/services/dev-ops-and-ml-ops",
      },
      {
        title: "Large Language Models (LLMs)",
        link: "/services/llms-and-nlp",
      },
      {
        title: "Data Analytics & Predictive Modeling",
        link: "/services/data-analytics-and-predictive-modeling",
      },
    ],
  },
];


export const PARTNER_LOGOS = [
  {
    src: "/clientlogos/g23.webp",
    alt: "Logo 1",
  },
  {
    src: "/clientlogos/airlines.webp",
    alt: "Logo 2",
  },
{
  src: "/clientlogos/tint.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/mgm1.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/LogoMain.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/zurich.jpg",
   alt: "Logo 3"
},
{
  src: "/clientlogos/its.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/snow.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/mindgeek.jpg",
   alt: "Logo 3"
},
{
  src: "/clientlogos/mgm1.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/square1.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/start.jpg",
   alt: "Logo 3"
},
{
  src: "/clientlogos/ad.webp",
   alt: "Logo 3"
},


];


export const services = [
  {
    title: "AI/ML Solutions",
    description:
      "Harness the power of AI and Machine Learning to automate and optimize processes, improving efficiency and scaling your operations seamlessly.",
    icon: FaBrain,
    linkText: "Learn more",
    link: "/services/ai-ml", 
  },
  // {
  //   title: "Generative AI",
  //   description:
  //     "Tap into the potential of Generative AI for automated content creation and tailored solutions that keep your business ahead of the curve.",
  //   icon: FaRobot,
  //   linkText: "Learn more",
  //   link: "/services/ai-ml", 
  // },
  {
    title: "Large Language Models (LLMs)",
    description:
      "Our LLM expertise helps enhance customer experiences and streamline workflows with intelligent, customizable models across various domains.",
    icon: MdOutlineDeveloperMode,
    linkText: "Learn more",
    link: "/services/llms-and-nlp", 
  },
  {
    title: "Data Analytics & Predictive Modeling",
    description:
      "We enable smarter, data-driven decisions through advanced analytics and predictive models, fueling real-time growth.",
    icon: MdOutlineDeveloperMode,
    linkText: "Learn more",
    link: "/services/data-analytics-and-predictive-modeling", 
  },
  {
    title: "DevOps and MLOps",
    description:
      "At codefyU, we streamline DevOps and MLOps to automate pipelines, speeding up development and improving software and ML model quality.",
    icon: AiFillApi,
    linkText: "Learn more",
    link: "/services/dev-ops-and-ml-ops",
  },
 
  
];


export const workCardItems = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We thoroughly analyze your business goals and challenges to develop a customized strategy that maximizes impact.",
    icon: FaSearch,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Our team designs and tests scalable, high-performance solutions tailored to your needs and strategic objectives.",
    icon: FaLightbulb,
  },
  {
    step: 3,
    title: "Deployment & Support",
    description:
      "We ensure smooth integration with ongoing monitoring and optimization, driving continuous success for your business.",
    icon: FaLifeRing,
  },
];

export const teamMembers = [
  {
    name: "Adnan Nazir: CEO",
    role: "A distinguished AI and ML Engineer at Microsoft with a HIT background, specializing in NLP, OCR, Computer Vision, and LLMs. Adnaan has led the development of cutting-edge machine learning solutions, establishing himself as a top innovator in AI.",
    imageUrl: "/images/bg.jpeg",
    instagramUrl: "https://www.instagram.com",
    linkedinUrl: "https://www.linkedin.com",
    facebookUrl: "https://www.facebook.com",
  },
  {
    name: "Azam Iftikhar: CTO",
    role: "Azam is a top-rated Upwork freelancer with Stanford, AWS, and Azure certifications. He has significantly boosted revenue and competitiveness for startups and enterprises, leading a crucial COVID detection project that secured $12.6M in funding and generated $20M in revenue through AI solutions.",
    imageUrl: "/images/bg.jpeg",
    instagramUrl: "https://www.instagram.com",
    linkedinUrl: "https://www.linkedin.com",
    facebookUrl: "https://www.facebook.com",
  },
  {
    name: "Arshaan Nazir: Data Scientist",
    role: "Arshaan, an expert in Computer Vision and NLP, has led projects that secured around $15M in funding, including a startup acquisition by an S&P 500 company. His MLOps and cloud expertise (AWS, Azure, GCP) is enhanced by his contributions to the Langtest library and various ML and deep learning projects",
    imageUrl: "/images/bg.jpeg",
    instagramUrl: "https://www.instagram.com",
    linkedinUrl: "https://www.linkedin.com",
    facebookUrl: "https://www.facebook.com",
  },
];

export const CRD_ST = [
  {
    ItemsTitle: "Transform your vision.", 
  },
  {
    ItemsTitle: "Improve your customer interactions with advanced LLMs.",
  },
  {
    ItemsTitle: "Make smarter decisions with real-time insights and predictive analytics.",
  },
  {
    ItemsTitle: "Streamline your development and deployment processes.",
  },
];

 export const API_URL = "/api/blogpost";

 export const TECH_IMAGES = [
  { src: "/images/python.png", alt: "Python Logo" },
  { src: "/images/docker1.png", alt: "Docker Logo" },
  { src: "/images/website.png", alt: "Net Logo" },
  { src: "/images/web.png", alt: "Logo" },
  { src: "/images/ml.png", alt: " Logo" },
  { src: "/images/c-.png", alt: "Logo" },
  { src: "/images/c-sharp.png", alt: "Logo" },
  { src: "/images/googlecloud.png", alt: "Logo" },
  { src: "/images/azure1.png", alt: "Logo" },
  { src: "/images/monodb.png", alt: "Logo" },
  { src: "/images/java.png", alt: "Python Logo" },
  { src: "/images/docker.png", alt: "Docker Logo" },
  { src: "/images/gpt.png", alt: "Docker Logo" },
  { src: "/images/gitlab.png", alt: "Docker Logo" },
  { src: "/images/node.png", alt: "Docker Logo" },
  { src: "/images/express.png", alt: "Docker Logo" },
  { src: "/images/javscript.png", alt: "Docker Logo" },
  { src: "/images/databricks.png", alt: "Docker Logo" },
  { src: "/images/mysql.png", alt: "Docker Logo" },
];


export const contactData = [
  {
    id: 1,
    icon: FaPhoneAlt, 
    text: "+91 9515888396",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    text: "+91 88994 92805",
  },
  {
    id: 3,
    icon: FaEnvelope,
    text: "info@codefyu.com",
  },
  {
    id: 4,
    icon: FaMapMarkerAlt,
    text: "Rajbagh Near Hurriyat Office, Srinagar",
    link: "https://maps.apple.com/?address=Hurriyat%20Road,%20Kursoo,%20Srinagar&ll=34.065499,74.831561&q=My%20Location&t=m",
  },
];

export const featuredData = [
  {
    id: 1,
    icon: FaUsers,
    title: "Client-Centric Approach",
    description: `We don’t just deliver solutions! We tailor them to your vision. Your
    success is our mission. For our clients, we break the mold!`,
  },
  {
    id: 2,
    icon: FaDollarSign,
    title: "Quality and Savings",
    description: `Imagine! Getting high-quality tech services without breaking the
    bank. We offer premium services at a fraction of the cost of in-house teams.`,
  },
  {
    id: 3,
    icon: FaTools,
    title: "End-to-End Development",
    description: `From the initial idea to the final product, we handle it all. Enjoy
    seamless execution with our comprehensive solution.`,
  },
];

export const workSpaceData = [
  {
    heading: "Collaboration",
    description:
      "We foster a culture where teamwork and open communication are essential. Every voice matters, and we believe that shared success is the key to achieving great results.",
      workImage: "/websiteimages/15.png",
  },
  
  {
    heading: "Well-Being",
    description:
      "We prioritize a healthy work-life balance and the growth of every employee. At codefyU, we ensure that everyone feels valued and supported in both their personal and professional journey.",
      workImage: "/websiteimages/17.png",
  },
  {
    heading: "Innovation",
    description:
      "We encourage bold thinking and creative problem-solving. Our team has the freedom to explore new ideas, take ownership, and drive meaningful impact.",
      workImage: "/websiteimages/16.png",
  },
];



  export const aiAdvantages = [
    {
      description: "AI-powered automation reduces human error, increases efficiency, and enhances decision-making accuracy.",
      title: "Unparalleled Automation Capabilities:",
    },
    {
      description: "Generative AI allows businesses to offer highly personalized content, improving user engagement and retention.",
      title: "Personalized User Experiences:",
    },
    {
      description: "Edge AI delivers real-time processing on devices, enabling faster decision-making without relying on cloud infrastructure.",
      title: "Real-Time Insights and Adaptation:",
    },
    {
      description: "Computer Vision provides accurate visual analysis and object recognition, optimizing quality control, safety, and operational efficiency across industries.",
      title: "Enhanced Precision with Computer Vision:",
    },
  ]
  export const aiAdvantagesDataSet1 = [
    {
      description: "Automating the Continuous Integration and Continuous Deployment process enables rapid release cycles with fewer errors.",
      title: "Accelerated Software Delivery with CI/CD:",
    },
    {
      description: "MLOps ensures that your ML models are continuously monitored, retrained, and deployed, keeping them current and effective.",
      title: "Efficient Machine Learning Management:",
    },
    {
      description: "Infrastructure as Code (IaC) reduces manual errors and ensures that infrastructure can be easily replicated and scaled.",
      title: "Infrastructure Consistency with IaC:",
    },
    {
      description: "By automating infrastructure management and model deployments, businesses can reduce operational costs and increase scalability.",
      title: "Cost Efficiency and Agility:",
    },
  ]
  export const aiAdvantagesDataSet2 = [
    {
      description: "Real-time analytics allow businesses to act on fresh data instantly, improving agility and strategic planning.",
      title: "Data-Driven Decision Making",
    },
    {
      description: "Predictive modeling reduces downtime by forecasting equipment issues before they occur, saving time and money.",
      title: "Operational Efficiency through Predictive Maintenance",
    },
    {
      description: "Our analytics frameworks prioritize data privacy and comply with global regulations like GDPR, keeping your data safe.",
      title: "Compliance and Security",
    },
    {
      description: "We provide tailored analytics solutions that meet the specific needs of different sectors, from retail to finance.",
      title: "Customizable Insights for Every Industry",
    },
  ]
  export const aiAdvantagesDataSet3 = [
    {
      description: "Our conversational AI solutions offer precise responses, enhancing customer satisfaction with human-like interactions.",
      title: "Contextual Accuracy in Conversations",
    },
    {
      description: "Fine-tuned LLMs ensure that the language model fits industry-specific requirements, providing accurate, relevant output.",
      title: "Tailored Solutions for Industry Needs",
    },
    {
      description: "With multilingual NLP, businesses can engage a broader audience, breaking down language barriers.",
      title: "Global Reach with Multilingual Capabilities",
    },
    {
      description: "Our solutions combine LLMs with knowledge graphs, ensuring that AI models are accurate and contextually aware.",
      title: "Integration with Structured Knowledge",
    },
  ]
  



export const AiBenefitsCardData = [
  {
    heading: "AI Strategy",
    body:
      "Today AI should be part of a business's digital transformation strategy. If you are looking to add AI capabilities to your business but don't know where to start, we can help. codefyU Software will work with you to develop a tailored AI strategy and implementation plan that meets your specific needs and goals.",
    benefitsTitle: "Your benefits:",
    benefits: [
      "Gain a competitive advantage.",
      "Stay ahead of the curve in today's rapidly changing digital landscape.",
      "Incorporate AI into your products and processes for increased efficiency and effectiveness.",
    ],
    imageUrl: "/images/img4.jpg", 
  },
  {
    heading: "AI Development & Integration",
    body:
      "We can develop custom AI applications for your business. Our team has extensive experience with AI software development and technologies, including machine learning, natural language processing, and computer vision. We can also help you integrate AI into your existing systems and processes.",
    benefitsTitle: "What you get:",
    benefits: [
      "Custom AI applications that meet your specific needs.",
      "Integration of AI into your existing systems and processes.",
      "Support for all aspects of the development process, from design to deployment.",
    ],
    imageUrl: "/images/img4.jpg", 
  },
];




export const testimonials = [
  { id: 1, imageSrc: "/testimonialHome/1.png", altText: "Testimonial 1" },
  { id: 2, imageSrc: "/testimonialHome/2.png", altText: "Testimonial 2" },
  { id: 3, imageSrc: "/testimonialHome/3.png", altText: "Testimonial 3" },
  { id: 4, imageSrc: "/testimonialHome/4.png", altText: "Testimonial 4" },
  { id: 5, imageSrc: "/testimonialHome/5.png", altText: "Testimonial 5" },
  { id: 6, imageSrc: "/testimonialHome/6.png", altText: "Testimonial 6" },
  { id: 7, imageSrc: "/testimonialHome/7.png", altText: "Testimonial 7" },
  { id: 8, imageSrc: "/testimonialHome/8.png", altText: "Testimonial 8" },
  { id: 9, imageSrc: "/testimonialHome/9.png", altText: "Testimonial 9" },
];


export const REVIEW_SLIDES = [
  "/testimonialHome/1.png",
  "/testimonialHome/2.png",
  "/testimonialHome/3.png",
  "/testimonialHome/4.png",
  "/testimonialHome/5.png",
];


export interface Service4 {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  arrowIcon: IconType;
  image: string;
}

export const servicesData: Service4[] = [
  {
    id: 1,
    title: "Generative AI",
    description:
      "codefyU specializes in designing advanced generative AI models that revolutionize content creation. From personalized marketing to automated content generation, our models are tailored to meet the creative needs of your business.",
    icon: GiArtificialIntelligence,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aboutimg.pngp", 
  },
  {
    id: 2,
    title: "Explainable AI (XAI)",
    description:
      "We prioritize transparency in AI models, offering Explainable AI solutions that help users understand how AI decisions are made, increasing trust and adoption across industries, particularly in finance and healthcare.",
    icon: FaChartLine, 
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/llms.webp",
  },
  {
    id: 3,
    title: "Edge AI",
    description:
      "Our Edge AI solutions bring the power of AI closer to where the data is generated. By deploying AI models on edge devices, we enable real-time processing, reducing latency and ensuring critical insights are always available instantly.",
    icon: FaCloud,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/devops.webp",
  },
  {
    id: 4,
    title: "Computer Vision",
    description:
      "codefyU's Computer Vision solutions provide advanced visual recognition and image processing across industries. From autonomous systems and AR/VR in tech to quality control in manufacturing and smart surveillance in security, we optimize processes, enhance accuracy, and improve user experiences.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 5,
    title: "Fine-Tuning LLMs",
    description:
      "We customize large language models for industry-specific use cases, ensuring that they meet the unique requirements of each sector, whether it’s healthcare, finance, or customer service.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 6,
    title: "Conversational AI",
    description:
      "Our Conversational AI solutions power chatbots and virtual assistants capable of providing human-like interactions. From customer support to automated sales assistance, our solutions improve engagement and efficiency.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 7,
    title: "Multilingual NLP",
    description:
      "Expand your global reach with our multilingual NLP capabilities. We enable businesses to engage with customers in multiple languages, ensuring inclusivity and accessibility in every market.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 8,
    title: "Sentiment Analysis & Language Understanding",
    description:
      "We provide sentiment analysis and language understanding tools to help businesses gain deeper insights into customer behavior and preferences, improving customer interactions and decision-making.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 9,
    title: "Real-Time Analytics",
    description:
      "We enable businesses to analyze data as it’s generated, allowing them to make dynamic decisions that impact operations instantly. Real-time insights provide a competitive advantage in industries like retail, finance, and manufacturing.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 10,
    title: "Predictive Maintenance",
    description:
      "Our predictive maintenance solutions help companies anticipate equipment failures before they happen, reducing downtime and improving operational efficiency, particularly in manufacturing and logistics.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 11,
    title: "Data Privacy and Compliance",
    description:
      "With global regulations around data privacy, CodefyU ensures that all data analytics practices comply with legal frameworks like GDPR. We prioritize data security and regulatory compliance in all our projects.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 12,
    title: "AI-Driven Customer Analytics",
    description:
      "We provide customer analytics solutions that leverage AI to identify patterns and trends in consumer behavior, helping businesses refine their strategies and improve customer experiences.",
    icon: FaRegEye,
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 13,
    title: "CI/CD Automation",
    description:
      "We implement Continuous Integration and Continuous Deployment (CI/CD) pipelines to ensure faster delivery of new features and bug fixes, helping businesses remain agile and competitive.",
    icon: FaCogs, 
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 14,
    title: "MLOps",
    description:
      "Our MLOps solutions allow for seamless deployment, monitoring, and management of machine learning models. We create infrastructure that supports the full ML lifecycle, ensuring that models remain performant and up to date.",
    icon: FaServer, 
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 15,
    title: "Infrastructure as Code (IaC)",
    description:
      "With IaC, we automate the management of IT infrastructure, reducing manual errors and ensuring that infrastructure can be easily replicated and scaled as needed.",
    icon: FaCode, 
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  {
    id: 16,
    title: "Cloud-Native Solutions",
    description:
      "We design and deploy cloud-native solutions that optimize performance, scalability, and cost efficiency, allowing businesses to leverage the power of the cloud for both development and operations.",
    icon: FaCloud, 
    arrowIcon: MdOutlineArrowOutward,
    image: "/images/aiml.webp",
  },
  
  
  
];



export const contactDetails = [
  {
    type: "phone",
    icon: "phone",
    contact: "+91 9515888396",
    href: "tel:+919515888396",
  },
  {
    type: "phone",
    icon: "phone",
    contact: "+91 88994 92805",
    href: "tel:+918899492805",
  },
  {
    type: "email",
    icon: "email",
    contact: "info@codefyu.com",
    href: "mailto:info@codefyu.com",
  },
];



