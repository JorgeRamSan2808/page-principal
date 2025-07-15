"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PortfolioEmpProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description?: string;
    subtitle?: string;
    subDescription?: string;
  };
}
const PortfolioEmp = (props: PortfolioEmpProps) => {
  const { data } = props;
  const {
    id,
    title,
    image,
    urlGithub,
    urlDemo,
    description,
    subtitle,
    subDescription,
  } = data;

  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => setShowModal(!showModal);

  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="Image Product"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl h-auto"
      />
      <div className="flex gap-5 mt-5 justify-center">
        <button
          onClick={handleToggle}
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 text-white"
        >
          Mostrar Inf.
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
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

            {/* Icono */}
            <div className="flex justify-center mb-4">
              <Image
                src={image}
                alt="Image Product"
                width={80}
                height={80}
                className="w-full md:w-[140px] rounded-2xl h-auto"
              />
            </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>

            {/* Descripción */}
            {data.description?.split("/").map(
              (sentence, index) =>
                sentence.trim() && (
                  <p key={index} className="text-justify indent-6 mb-1">
                    {sentence.trim()}
                  </p>
                )
            )}

            {/* Subtítulo y sub-descripción */}
            {subtitle && (
              <div>
                <h3 className="text-justify font-semibold mb-1">{subtitle}</h3>
                {data.subDescription?.split("/").map(
                  (desc, index) =>
                    desc.trim() && (
                      <p key={index} className="text-justify text-white-600">
                        {desc.trim()}
                      </p>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioEmp;
