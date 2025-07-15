"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projectData } from "@/data"; // Ajusta la ruta según corresponda

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlGithub, urlDemo } = data;

  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => setShowModal(!showModal);

  const project = projectData.find((p) => p.idProject === id);
  const description = project?.description;
  const subtitle = project?.subtitle;
  const subdesc = project?.subDescription;

  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl text-center">{title}</h3>
      <Image
        src={image}
        alt="Image Product"
        width={80}
        height={80}
        className="w-full md:w-[100px] rounded-2xl h-auto mx-auto"
      />
      <div className="flex gap-5 mt-5 justify-center">
        <button
          onClick={handleToggle}
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 text-white"
        >
          Mostrar
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center min-h justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleToggle}
        >
          <div
            className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto mx-4 md:mx-auto bg-[#2e2257] rounded-xl p-6 text-white border border-teal-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={handleToggle}
              className="absolute top-3 right-3 text-white-400 hover:text-red-500"
            >
              <X size={24} />
            </button>

            {/* Título */}
            <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
            {/* Swiper */}
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="mt-10 pb-20 "
            >
              {projectData
                .find((project) => project.idProject === id)
                ?.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`/images/${img}`} // Asegúrate que las imágenes estén en /public/images/
                      alt={`Slide ${index + 1}`}
                      width={280}
                      height={280}
                      className="rounded-lg mx-auto"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            {/* Descripción */}
            {description && (
              <p className="mt-6 text-sm text-justify text-white">
                {description}
              </p>
            )}

            <h4 className="text-2xl font-bold text-left mb-2">{subtitle}</h4>
            {/* subDescripción */}
            {subdesc?.split("/").map(
              (sentence, index) =>
                sentence.trim() && (
                  <p key={index} className="text-justify indent-6 mb-1">
                    {sentence.trim()}
                  </p>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioBox;
