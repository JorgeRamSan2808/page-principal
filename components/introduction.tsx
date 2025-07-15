"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { dataSobreMi } from "@/data";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:grid-cols-2">
        <Image
          src="/principal1.png"
          alt="Profile Pic"
          priority
          width={800}
          height={800}
          className="w-full max-w-[300px] mx-auto md:max-w-[400px]"
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1
            className="mb-3 text-2xl leading-tight text-center 
          md:text-left md:text-4xl md:mb-10"
          >
            Si puedes pensarlo,
          </h1>
          <TypeAnimation
            sequence={[
              "puedes programarlo.",
              2000,
              "puedes optimizarlo.",
              2000,
              "puedes implementarlo.",
              2000,
              "puedes desarrollarlo.",
              2000,
            ]}
            wrapper="span"
            speed={30}
            className="font-bold text-3xl text-secondary"
            repeat={Infinity}
          />
          <div>
            {dataSobreMi.map((data) => (
              <div
                key={data.id}
                className="mx-auto mb-2 text-xl md:mx-0 md-mb8 "
              >
                {/* Descripción */}
                {data.description?.split("/").map(
                  (sentence, index) =>
                    sentence.trim() && (
                      <p key={index} className="text-justify indent-6 mb-1">
                        {sentence.trim()}
                      </p>
                    )
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt:6 md:justify-center md:gap-10">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer 
              text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact-me"
              className="px-3 py-2 transition-all border-2 cursor-pointer 
              text-secondary border-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
