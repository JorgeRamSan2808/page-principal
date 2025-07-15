"use client";
import { MotionTransition } from "./transition-components";
import Image from "next/image";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 md:inline-block md:absolute"
    >
      <Image
        src="/freelance.png"
        width={300}
        height={300}
        className="w-full h-full pointer-events-none opacity-70"
        alt="Avatar Portfolio"
      />
    </MotionTransition>
  );
};

export default AvatarPortfolio;
