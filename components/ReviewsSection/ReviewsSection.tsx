"use client";
import React, { useEffect, useState } from "react";
import { Column, CenterBox, Row, Text } from "../styled"; 
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const MotionRow = motion.create(Row);

const slideVariants = {
  hidden: { x: "100%", opacity: 0 }, 
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    x: "-100%", 
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Column flexDirection={["column", "row"]} py={["xxl", "header"]} gap={"l"}>
      <Column gap={["xl", "m"]}>
        <Text variant="heading">What Our Clients Say</Text>
        <Text
          variant={"body"}
          width={["100%", "460px"]}
          lineHeight={"1.5"}
          textAlign={["start", "center"]}
        >
          {`Discover how our services have positively impacted our clients'
          experiences. Read their testimonials below to learn more.`}
        </Text>
      </Column>

      <CenterBox
        py={["xxxl", "xxxxl"]}
        flexDirection={["column", "row"]}
        gap={"xxxxl"}
        bg={"white"}
        borderRadius={"m"}
      >
        <AnimatePresence mode="wait">
          {[
            "/testimonialHome/1.png",
            "/testimonialHome/2.png",
            "/testimonialHome/3.png",
          ].map((src, index) => {
            const isVisible = index === currentIndex;

            return isVisible ? (
              <MotionRow
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                style={{
                  width: "600px",
                  height: 360,
                  // border: "4px solid green"
                  
                }}
              >
                <Image
                  src={src}
                  alt={`Review ${index + 1}`} 
                  width={700}
                  height={500}
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                    // border: "4px solid red"
                  }}
                />
              </MotionRow>
            ) : null;
          })}
        </AnimatePresence>
      </CenterBox>
    </Column>
  );
};












// "use client";
// import React, { useEffect, useState } from "react";
// import { Column, CenterBox, Text } from "../styled";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const slideVariants = {
//   hidden: { x: "100%", opacity: 0 }, 
//   visible: {
//     x: "0%",
//     opacity: 1,
//     transition: { duration: 1, ease: "easeInOut" },
//   },
//   exit: {
//     x: "-90%", 
//     opacity: 0,
//     transition: { duration: 1, ease: "easeInOut" },
//   },
// };

// export const ReviewsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 5000);

//     return () => clearTimeout(timer); 
//   }, [currentIndex]);

//   return (
//     <Column flexDirection={["column", "row"]} py={["xxl", "header"]} gap={"l"}>
//       <Column gap={["xl", "m"]}>
//         <Text variant="heading">What Our Clients Say</Text>
//         <Text
//           variant={"body"}
//           width={["100%", "460px"]}
//           lineHeight={"1.5"}
//           textAlign={["start", "center"]}
//         >
//           {`Discover how our services have positively impacted our clients'
//           experiences. Read their testimonials below to learn more.`}
//         </Text>
//       </Column>

//       <CenterBox
//         py={["xxxl", "xxxxl"]}
//         flexDirection={["column", "row"]}
//         gap={"xxxxl"}
//         bg={"white"}
//         borderRadius={"m"}
//       >
//         <AnimatePresence mode="wait">
//           {[
//             "/testimonialHome/1.png",
//             "/testimonialHome/2.png",
//             "/testimonialHome/3.png",
//           ].map((src, index) => {
//             const isVisible = index === currentIndex;

//             return (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate={isVisible ? "visible" : "exit"}
//                 exit="exit"
//                 variants={slideVariants}
//                 style={{
//                   width: "400px",
//                   height: 360,
//                 }}
//               >
//                 <Image
//                   src={src}
//                   alt={`Review ${index + 1}`}
//                   width={400}
//                   height={360}
//                   style={{
//                     objectFit: "cover",
//                     borderRadius: "20px",
//                   }}
//                 />
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </CenterBox>
//     </Column>
//   );
// };


// "use client";
// import React, { useEffect, useState } from "react";
// import { Column, CenterBox, Text } from "../styled";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const slideVariants = {
//   hidden: { x: "100%", opacity: 0 },
//   visible: { x: "0%", opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
//   exit: { x: "100%", opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
// };

// export const ReviewsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   return (
//     <Column flexDirection={["column", "row"]} py={["xxl", "header"]} gap={"l"}>
//       <Column gap={["xl", "m"]}>
//         <Text variant="heading">What Our Clients Say</Text>
//         <Text
//           variant={"body"}
//           width={["100%", "460px"]}
//           lineHeight={"1.5"}
//           textAlign={["start", "center"]}
//         >
//           {`Discover how our services have positively impacted our clients'
//           experiences. Read their testimonials below to learn more.`}
//         </Text>
//       </Column>

//       <CenterBox
//         py={["xxxl", "xxxxl"]}
//         flexDirection={["column", "row"]}
//         gap={"xxxxl"}
//         bg={"white"}
//         borderRadius={"m"}
//       >
//         {[
//           "/testimonialHome/1.png",
//           "/testimonialHome/2.png",
//           "/testimonialHome/3.png",
//         ].map((src, index) => {
//           const isVisible = index === currentIndex;

//           return (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate={isVisible ? "visible" : "hidden"}
//               exit="exit"  // Exits off to the right
//               variants={slideVariants}
//               style={{
//                 // position: "absolute",
//                 width: "400px",
//                 height: 360,
//               }}
//             >
//               <Image
//                 src={src}
//                 alt={`Review ${index + 1}`}
//                 width={400}
//                 height={360}
//                 style={{
//                   mixBlendMode: "multiply",
//                   borderRadius: "20px",
//                   objectFit: "cover",
//                   width: "100%",
//                   height: "100%",
//                 }}
//               />
//             </motion.div>
//           );
//         })}
//       </CenterBox>
//     </Column>
//   );
// };
