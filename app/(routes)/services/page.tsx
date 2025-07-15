"use client";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { data } from "framer-motion/client";
import { dataParIni } from "@/data";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div
        className="grid items-center justify-center h-screen max-w-5xl 
      gap-6 mx-auto md:grid-cols-2 md:px-20"
      >
        <div className="max-w-[450px] justify-center mt-20 md:mt-0 backdrop-blur-md">
          <h1 className="text-2xl landing-tight text-center md:text-left md:text-4xl md:mb-5">
            Sobre mi{" "}
            <span className="font-bold text-secondary"> Aprendizaje</span>
          </h1>
          <div>
            {dataParIni.map((data) => (
              <p key={data.id} className="mb-3 text-xl text-gray-300">
                {data.description}
              </p>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link
              href="/contact-me"
              className="px-3 py-2 transition-all border-2 cursor-pointer 
              text-secondary border-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
        {/**SILDER */}
        <div className="">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
