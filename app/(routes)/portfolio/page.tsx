import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import config from "../../../tailwind.config";
import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import PortfolioBox from "@/components/portfolio-box";
import { dataPortfolio, dataProyEmp } from "@/data";
import { data } from "framer-motion/client";
import PortfolioEmp from "@/components/portfolio-emp";

const PortfolioPage = () => {
  return (
    <div className="relative">
      <ContainerPage>
        <TransitionPage />
        <AvatarPortfolio />
        <CircleImage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Mis Proyectos
            <span className="text-secondary font-bold"> Freelance.</span>
          </h1>
          <div
            className="grid max-w-5xl 
        gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4 justify-center"
          >
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center mb-6 md:text-4xl md:mb-5">
            Mi Trabajo
            <span className="text-secondary font-bold"> en Empresas</span>
          </h1>
          <div
            className="relative z-10 grid max-w-5xl 
        gap-6 mx-auto mt-4 text-center text-bold sm:grid-cols-2 md:grid-cols-4"
          >
            {dataProyEmp.map((data) => (
              <PortfolioEmp key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </div>
  );
};

export default PortfolioPage;
