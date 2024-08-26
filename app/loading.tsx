"use client";
import dynamic from "next/dynamic";
import { Box, CenterBox } from "@/components/styled/Box";
import { Text } from "@/components/styled/Text";
import Logo from "@/public/assets/svgs/logo-transparent.svg";
import Image from "next/image";
import LoadingAnimation from "@/public/assets/lottie-animations/loading.json";
const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

export default function Page() {
  return (
    <CenterBox width="100%" height="100vh" gap="l">
      <Image src={Logo} alt={"logo"} width={200} height={100} />
      <Player
        autoplay
        loop
        style={{
          height: "150px",
          width: "150px",
          zIndex: "99",
        }}
        src={LoadingAnimation}
      ></Player>
    </CenterBox>
  );
}
