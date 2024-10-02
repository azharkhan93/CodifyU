import { MdOutlineDeveloperMode, } from "react-icons/md";
import { FaBrain, FaCode, FaCog, FaDollarSign, FaDoorOpen, FaEnvelope, FaHandsHelping, FaLightbulb, FaMapMarkerAlt, FaPhoneAlt, FaRegHandPaper, FaRobot, FaRocket, FaSearch, FaStar, FaTools, FaUsers, } from "react-icons/fa";




export const STATS_DATA = [
  {
    id: 1,
    heading: "8+years",
    subHeading: "In Business",
    image: "/websiteimages/25.png", 
  },
  {
    id: 2,
    heading: "150+",
    subHeading: "Global Clients",
    image: "/websiteimages/26.png", 
  },
  {
    id: 3,
    heading: "200+",
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
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "PortFolio",
    link: "/portfolio",
  },
  {
    title: "Testimonials",
    link: "/testimonials",
  },
  {
    title: "Services",
    link: "/services",
    dropdown: [
      {
        title: "AI and Machine Learning",
        link: "/services",
      },
      {
        title: "Data Analytics",
        link: "/services/data-analytics",
      },
      {
        title: "Cloud Computing",
        link: "/services/cloud-computing",
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
  src: "/clientlogos/mgm1.jpg",
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
  src: "/clientlogos/its.jpg",
   alt: "Logo 3"
},
{
  src: "/clientlogos/john.png",
   alt: "Logo 3"
},
{
  src: "/clientlogos/mindgeek.jpg",
   alt: "Logo 3"
},
{
  src: "/clientlogos/square.jpg",
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
  // {
  //   title: "Full-Stack Development",
  //   description:
  //     "We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution.",
  //     icon: MdCode,
  //   linkText: "Learn more",
  // },
  {
    title: "AI/ML Solutions",
    description:
      "Harness the power of AI and Machine Learning to automate and optimize processes, improving efficiency and scaling your operations seamlessly.",
    icon: FaBrain,
    linkText: "Learn more",
  },
  {
    title: "Geneartive AI",
    description:
      "Tap into the potential of Generative AI for automated content creation and tailored solutions that keep your business ahead of the curve.",
      icon: FaRobot,
    linkText: "Learn more",
  },
  {
    title: "Large Language Models (LLMs)",
    description:
      "Our LLM expertise helps enhance customer experiences and streamline workflows with intelligent, customizable models across various domains.",
      icon: MdOutlineDeveloperMode,
    linkText: "Learn more",
  },
];
export const faqItems = [
  {
    question: "How Can I Request a Software Solution from Your Company?",
    answer:
      "You can request a software solution by visiting our website and exploring the various services we offer. Once you find the service that fits your needs, you can contact us through our online form or directly schedule a consultation. We'll discuss your requirements and provide a tailored solution.",
  },
  {
    question: "What Types of Software Solutions Do You Offer?",
    answer:
      "We offer a wide range of software solutions, including custom software development, mobile app development, cloud solutions, and IT consulting. Our team specializes in creating tailored solutions to meet the specific needs of different industries.",
  },
  {
    question: "Do You Provide Ongoing Support After the Software is Delivered?",
    answer:
      "Yes, we provide comprehensive support and maintenance services after the software is delivered. Our team is available to assist with updates, troubleshooting, and any additional modifications that may be needed as your business evolves.",
  },
  {
    question: "What Payment Methods Do You Accept for Your Services?",
    answer:
      "We accept multiple payment methods, including online payments through credit/debit cards, PayPal, and bank transfers. We also offer flexible payment plans to accommodate the needs of our clients.",
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
    icon: FaCode,
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
    ItemsTitle: "Transform your vision with CodefyU.", 
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
    text: "+91 7006168185",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    text: "+91 7006569557",
  },
  {
    id: 3,
    icon: FaEnvelope,
    text: "info@codefyu.com",
  },
  {
    id: 4,
    icon: FaMapMarkerAlt,
    text: "RajBagh Near Hurriyat Office, Srinagar",
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
      "We prioritize a healthy work-life balance and the growth of every employee. At CodefyU, we ensure that everyone feels valued and supported in both their personal and professional journey.",
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
    description:
      "Automate highly detailed, repetitive, and even physically strenuous tasks without requiring human intervention.",
  },
  {
    description:
      "Improve decision-making processes by analyzing large volumes of data and providing actionable insights.",
  },
  {
    description:
      "Enhance productivity by freeing up human workers to focus on complex, creative, or higher-value tasks.",
  },
  {
    description:
      "Increase accuracy and reduce errors in tasks such as data entry, diagnosis, and predictive analytics.",
  },
];



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


