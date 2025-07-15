"use client";

import { coursesData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SliderServices = () => {
  const [selected, setSelected] = useState<null | {
    title: string;
    image: string;
    link: string;
  }>(null);

  const closeModal = () => setSelected(null);

  return (
    <>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          760: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
      >
        {coursesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setSelected(item)}
              className="flex px-4 py-10 h-auto md:h-[260px] rounded-lg
              cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0
              group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300
              hover:border-secondary border-2 text-bold text-center"
            >
              <div>
                <h3 className="mb-4 font-bold">{item.title}</h3>
              </div>
              <Image
                src={item.image}
                alt="Image Product"
                width={100}
                height={120}
                className="w-full md:w-[120px] rounded-2xl h-auto mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-[90%] max-w-lg bg-white/10 border border-white/30 rounded-xl p-6 text-white shadow-xl backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-secondary"
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold mb-4 text-center">
                {selected.title}
              </h2>
              <Image
                src={selected.image}
                alt="Service Image"
                width={800}
                height={800}
                className="rounded-lg mx-auto"
              />
              {/* Enlace debajo de la imagen */}
              {selected.link && (
                <div className="text-center mt-4">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-2xl underline hover:text-white transition"
                  >
                    Ver más detalles
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SliderServices;
