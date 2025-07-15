"use client";
import Image from "next/image";
import { MotionTransition } from "./transition-components";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 
        right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/ideas.png"
        alt="Avatar"
        width={300}
        height={300}
        className="w-full h-full opacity-60"
      />
    </MotionTransition>
  );
};

export default Avatar;
