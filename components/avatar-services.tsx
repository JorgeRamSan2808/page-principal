import { MotionTransition } from "./transition-components";
import Image from "next/image";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/developer.png"
        width={300}
        height={300}
        alt="Services Image"
        className="w-[350px] h-full pointers-event-none opacity-70"
      />
    </MotionTransition>
  );
};

export default AvatarServices;
