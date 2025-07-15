import Link from "next/link";
import { MotionTransition } from "./transition-components";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-20"
    >
      <header className="fixed top-5 left-5 w-full z-50 text-center backdrop-blur-sm">
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href={"/"}>
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-primary">Ing. Jorge </span>
              <span className="text-secondary">Ramírez Santiago</span>
            </h1>
          </Link>
          <div className=" flex items-center justify-center gap-6">
            {socialNetworks.map((network) => (
              <Link
                key={network.id}
                href={network.src}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale:110 hover:text-secondary"
              >
                {network.logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
