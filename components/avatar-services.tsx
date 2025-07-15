import { MotionTransition } from "./transition-components";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <img
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
