"use client";
import CountUp from "react-countup";

import { dataCounter } from "@/data";
import { p } from "framer-motion/client";

const CounterServices = () => {
  return (
    <div
      className="flex justify-center max-w-2xl grid-cols-2 gap-3 
      mx-auto my-6 md:flex md:grid-cols-4 md:gap-6 
      px-4 border-2 border-transparent md:border-s-gray-100 md:border-e-gray-100"
    >
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div key={id} className={`${lineRight && "ltr"} `}>
            <div
              className={`${
                lineRight &&
                "px-4 border-2 border-transparent md:border-e-gray-100 justify-center"
              }
            ${lineRightMobile && "border-e-gray-100"}
            `}
            >
              <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                {"     + "}
                <CountUp start={0} end={endCounter} duration={5} />
              </p>
              <p className="text-xs font-bold justify-center uppercase max-w-[75px]">
                {text}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CounterServices;
