import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from "lucide-react";
import {
  SiUdemy,
  SiDatacamp,
  SiPlatzi,
  SiCoursera,
  SiCodecademy,
} from "react-icons/si";

import { platform } from "os";
import { title } from "process";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/@0808JUNIOR",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/jorge-ramírez-39017180",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "https://x.com/jrsantiago_2099",
  },
  {
    id: 4,
    logo: <SiPlatzi size={30} strokeWidth={1} />,
    src: "https://platzi.com/p/George_78/",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Data Engineer",
    subtitle: "Baufest - Grupo BIMBO",
    description:
      "Colaborar con un equipo dinámico para desarrollar y mantener ETL en Azure Data Factory para la extracción y carga de DATA en crudo desde servidores SQL y NoSQL a Base de Datos en Azure, limpieza y procesamiento de la misma para tenerla disponible en las herramientas como Power BI.",
    date: "Abr 2024 ",
  },
  {
    id: 2,
    title: "Oracle Specialist",
    subtitle: "Baufest - MAPFRE Argentina",
    description:
      "Lideré proyectos de reingeniería en sistemas COBOL a Oracle principalmente, realicé entrega de mantenimientos y proyectos en tiempo lo que me ayudó a escalar conocimientos a Agile Coach donde trabajé de la mano con el Product Owner para realizar entregas continuas al usuario con metodología SCRUM, así como apoyar al equipo realizando KTs para mejorar sus conocimientos en temas de programación, metodología y lineamientos.",
    date: "May 2021",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    description: "",
    date: "Dic 2021",
  },
  {
    id: 4,
    title: "Analista Funcional",
    subtitle: "Banca AFIRME",
    description:
      "Analizar requerimientos Operativos y Regulatorios, así como ser parte del desarrollo y entrega contínua al usuario final. Generé propuestas de valor para migrar plataforma Delphi a Java FX.",
    date: "Dic 2021",
  },
  {
    id: 5,
    title: "",
    subtitle: "",
    description: "",
    date: "Feb 2021",
  },
  {
    id: 6,
    title: "Technical Leader Oracle | Agile Coach ",
    subtitle: "IBM - MAPFRE LATAM",
    description:
      "Responsable de equipo técnico de 27 desarrolladores asignados a paises de LATAM (MX, GTM, CR, RDOM, PR, NIC) para atender servicios de Incidencias N1, mantenimientos operativos y Proyectos. Realicé un ETL para obtener las incidencias de manera agrupada, priorizarlas y darles soluciones de raíz de mi parte (N3) y dar al usuario entrega de valor y eliminar las incidencias. PArticipé activamente en proyectos obteniendo información de diferentes sistemas de base de datos tanto SQL como NoSQL, entre otras cosas más.",
    date: "Ene 2021",
  },
  {
    id: 7,
    title: "",
    subtitle: "",
    description: "",
    date: "Ago 2016",
  },
  {
    id: 8,
    title: "Analista Programador Sr.",
    subtitle: "Ferromex S.A.",
    description:
      "Realicé procedimientos y funciones para optimizar información de trenes que afectaban el servicio dentro de un rango de kilómetros que no se registraban por no pasar por sus respectivas casetas y generar información de sus eventos para controlar gastos de mantenimiento que no se reflejaban anteriormente.",
    date: "Ago 2016",
  },
  {
    id: 9,
    title: "",
    subtitle: "",
    description: "",
    date: "Jun 2016",
  },
  {
    id: 10,
    title: "Analista Programador de Aplicaciones Sr.",
    subtitle: "Grupo Financiero Interacciones",
    description:
      "Participé en proyecto de extracción de información mediante ETLs para su procesamiento y gestión de operaciones realizandas entre Inter-Compañías.",
    date: "May 2016",
  },
  {
    id: 11,
    title: "",
    subtitle: "",
    description: "",
    date: "Mar 2016",
  },
  {
    id: 12,
    title: "Ing. Desarrollo de Aplicaciones Sr.| Líder de Proyectos",
    subtitle: "Grupo Financiero Banorte (Casa de Bolsa y Banco)",
    description:
      "Liderar proyectos y dar seguimiento desde su Análisis Funcional hasta la puesta en producción, conocer todo el flujo de entrega contínua y tener a cargo equipo de trabajo mediante fábricas de Software. Participé activamente en el desarrollo de mantenimientos y propuestas de solución para mejorar el rendimiento del sistema core de Casa de Bolsa y Banco. Analicé y corregí incdencias de causa raíz atendiendo N1 y N3. Liderar prouectos como Implementación de Operaciones Préstamo de Valores, Práctica de Ventas en Fondos de Inversión, crear nuevo formato de documentos oficiales (Estado de Cuenta, Cartas Compra/Venta de Valores y Constancias Fiscales) y realizar una reingeniería al proceso de entrega anual de constancias Fiscales.",
    date: "Oct 2015",
  },
  {
    id: 13,
    title: "",
    subtitle: "",
    description: "",
    date: "Sep 2007",
  },
  {
    id: 14,
    title: "Progamador Analista Sr.",
    subtitle: "TECSICO - Banorte Casa de Bolsa",
    description:
      "Atención de mantenimiento y entrega continua al cliente, así como apoyar en requierimientos retrasados para su pronta atención. Apoyar a equipo de desarrollo del cliente tanto en sitio como en sus instalaciones para el seguimiento del desarrollo, pruebas y puesta en producción. Proponer soluciones mediante mantenimientos preventivos al cliente para mejorar el rendimiento de la base de datos de su sistema.",
    date: "Jun 2007",
  },
  {
    id: 15,
    title: "",
    subtitle: "",
    description: "",
    date: "May 2006",
  },
];

export const dataSobreMi = [
  {
    id: 1,
    description:
      " Soy un Profesional con una trayectoria laboral de +16 años con conocimientos sólidos en diferentes lenguajes de programación y DBs SQL y NoSQL, en el ciclo de vida del software y metodologías SCRUM y propias de algunas empresas y SCRUM. /Tengo conocimientos en diversas industrias como Financiera, Seguros y Retail, manejo de equipos de trabajo con diferentes roles y actividades. /Mis puntos clave son ser autodidacta, capacidad de análisis y resolución de problemas, propuestas de solución, manejo de equipos de trabajo, transferencia de conocimientos, actitud colaborativa y empática.",
  },
];

export const dataParIni = [
  {
    id: 1,
    description:
      "A lo largo de mi carrera he realizado muchos cursos y capacitaciones, aqui muestro parte de ese aprendizaje autodidacta que he realizando en los últimos 3 años, los cuales han sido tanto para actualizarme en el desarrollo de Software como para el área de Data Engineer.",
  },
  {
    id: 2,
    description:
      "En el desarrollo de Software como NodeJS, ReactJS, ViteJS, NextJS, MongoDB, PostgreSQL en el FrontEnd y python con algunas librerías como Pandas, Matplotlib, PySpark, java, PHP, PLSQL para Backend entre los mas actuales.",
  },
  {
    id: 3,
    description:
      "Para el área de DATA Python con algunos frameworks como Anaconda, Jupyter, Google Colab, librerias como Pandas, Polars, Matplotlib, Numpy, PySpark para procesar ETLs en arquitectura Medallón en la nube de Azure con ADF y Databricks.",
  },
];

export const coursesData = [
  {
    id: 1,
    title: "Azure Databricks y Azure Data Factory",
    platform: "COURSERA",
    image: "/cursos/COURSERA_Azure_databricks_ADF.jpg",
    link: "https://coursera.org/share/7a79df07b8afba795cbe0131419baa67",
  },
  {
    id: 2,
    title: "Introduction to Azure Cloud Services",
    platform: "COURSERA",
    image: "/cursos/COURSERA_Azure_Fundamentals.jpg",
    link: "https://coursera.org/share/e719cb416b0bebcbb2ba73a9c2b0bbb7",
  },
  {
    id: 3,
    title: "Apache Spark (TM) SQL for Data Analysts",
    platform: "COURSERA",
    image: "/cursos/COURSERA_COURSERA_Spark_Analisis_datos.jpg",
    link: "https://coursera.org/share/56d93b9211c924665b3fbeb9cefb4770",
  },
  {
    id: 4,
    title: "Create Data Flows in Azure Data Factory",
    platform: "COURSERA",
    image: "/cursos/COURSERA_Data_Flows.jpg",
    link: "https://coursera.org/share/9bf8101f08b389bea8e9eb9fb34dfa1e",
  },
  {
    id: 5,
    title: "Databricks Concepts",
    platform: "DATACAMP",
    image: "/cursos/DC_Databricks.jpg",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/39d55ceb27ebcba0a50af77208ee1b6eebf261f3",
  },
  {
    id: 6,
    title: "Introduction to Databricks",
    platform: "DATACAMP",
    image: "/cursos/DC_Int_Databricks.jpg",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/5e5a84be32551b43cd145d51b9408c944f12ffa7",
  },
  {
    id: 7,
    title: "Databricks: Arquitecrura Delta Lake",
    platform: "PLATZI",
    image: "/cursos/PLATZI_Databricks.jpg",
    link: "#!",
  },
  {
    id: 8,
    title: "Fundamentos de Base de Datos",
    platform: "PLATZI",
    image: "/cursos/PLATZI_Fund_DBs.jpg",
    link: "#!",
  },
  {
    id: 9,
    title: "Introducción a la línea de Comandos",
    platform: "PLATZI",
    image: "/cursos/PLATZI_Int_Terminal.jpg",
    link: "#!",
  },
  {
    id: 10,
    title: "Pensamiento Computacional con Python",
    platform: "PLATZI",
    image: "/cursos/PLATZI_Pens_Comp_Python.jpg",
    link: "#!",
  },
  {
    id: 11,
    title: "PostgreSQL",
    platform: "PLATZI",
    image: "/cursos/PLATZI_PostgreSQL.jpg",
    link: "#!",
  },
  {
    id: 12,
    title: "Python Basics",
    platform: "PLATZI",
    image: "/cursos/PLATZI_Python.jpg",
    link: "#!",
  },
  {
    id: 13,
    title: "SQL y MySQL",
    platform: "PLATZI",
    image: "/cursos/PLATZI_SQL_MySQL.jpg",
    link: "#!",
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Azure Data Engineer con Databricks y ADF",
    description:
      "Fundamentos de ADF y Databricks, generación de pipelines en ADF",
  },
  {
    icon: <Pencil />,
    title: "Azure Fundamentals",
    description:
      "Conocimientos sólidos para mantenimiento y propuestas para FrontEnd.",
  },
  {
    icon: <Computer />,
    title: "BackEnd",
    description:
      "Conocimientos sólidos para mejorar rendimiento de DBs, así como la comunicación entre sistemas.",
  },
  {
    icon: <Book />,
    title: "Agile Coach",
    description:
      "Conocimientos sólidos en SCRUM para apoyar a las diferentes áreas de desarrollo para entrega continua.",
  },
  {
    icon: <Rocket />,
    title: "Analista Programador",
    description:
      "Mi enfoque ha sido principalmente en la optimización y mejoramiento de los sistemas del cliente.",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 6,
    text: "Años de Experiencia FrontEnd",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 1,
    endCounter: 16,
    text: "Años de Experiencia BackEnd",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 10,
    text: "Años de Experiencia Líder Proyectos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 3,
    endCounter: 7,
    text: "Años de Experiencia Technical Leader",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Puzzle Images",
    image: "/puzzle0.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Counter app",
    image: "/counter1.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Personal Web",
    image: "/images/webper1.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "THC Admin. Ordenes",
    image: "/images/inicio.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const projectData = [
  {
    idProject: 1,
    title: "Puzzle Images",
    description:
      "App Juego puzzle armar imagenes de 3x3, 4x4 y 5x5 medida de tiempo y contador de movimientos.",
    subtitle: "Herramientas:",
    subDescription:
      "• Flutter 3.29+ / • Java 17+ / • Gradle: 8.3+ / • SDK mínimo: 23 / • NDK Version: 27.0.12077973",
    images: [
      "puzzle1.jpg",
      "puzzle2.jpg",
      "puzzle4.jpg",
      "puzzle5.jpg",
      "puzzle6.jpg",
      "puzzle7.jpg",
      "puzzle8.jpg",
      "puzzle9.jpg",
      "puzzle10.jpg",
    ],
  },
  {
    idProject: 2,
    title: "Counter App",
    description:
      "App para contar veces que presionamos un botón podemos aumentarlo, disminuir o resetear el contador",
    subtitle: "Herramientas:",
    subDescription:
      "• Flutter 3.29+ / • Java 17+ / • Gradle: 8.3+ / • SDK mínimo: 23 / • NDK Version: 27.0.12077973",
    images: ["counter1.png", "counter2.png"],
  },
  {
    idProject: 3,
    title: "Personal Web",
    description:
      "Página Web personal donde muestro mi Historial de Trabajo en grandes empresas y la habilidad autodidacta para aprender otras tecnologías para crear y mantener sistemas.",
    subtitle: "Herramientas:",
    subDescription:
      "• NodeJS 22.16.0 / • ReactJS 18.3.1 / • NextJS 14.0.0 / • libs: tsparticles, framer-motion lucide-react, react-countup, react-type-animation",
    images: [
      "webper1.png",
      "webper2.png",
      "webper3.png",
      "webper4.png",
      "webper5.png",
      "webper6.png",
    ],
  },
  {
    idProject: 4,
    title: "Administración de Ordenes",
    description:
      "Agregar funcionalidad a página web de empresa de envío de muestras médicas Nacionales para la administración de sus envíos por la República Mexicana.",
    subtitle: "Herramientas:",
    subDescription:
      "• PHP 8.2.12 / • MySQL 8.0.42 / • HTML5, CSS3 JS / • FPDF Creación de recibo en PDF",
    images: [
      "inicio.jpg",
      "menuprincipal.jpg",
      "ordenes.png",
      "admincat.png",
      "estcargo.jpg",
      "catlab.png",
      "buscalab.jpg",
    ],
  },
];

export const dataProyEmp = [
  {
    id: 1,
    title: "Grupo BIMBO MX",
    image: "/BB.png",
    description:
      "• Mantenimiento a procesos ETLs, atención de incidencias en pipelines, documentación y seguimiento de la solución, manejo de esquemas Bronze, Silver y Gold para transofrmación de la DATA mediante Databricks con PySpark, SQL y sentencias sobre dbfs.",
    subtitle: "Herramientas y Metodologías: ",
    subDescription:
      "• Python, librerias Pandas, Matplotlib./ • PySpark, Databricks, Azure Data Factory, Pipelines, Notebooks, SQL, dbfs./ • SCRUM.",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "MAPFRE - Argentina",
    image: "/BM.png",
    description:
      "• Fungí como Agile Coach para que en conjunto con el Product Owner generaramos las historias de usuario de los mantenimientos asignados al equipo, reuniones periódicas, apoyo a equipo para evitar retrasos y realizar la entrega continua./ • Realicé análisis de procesos para mejorar el rendimiento del sistema a corto plazo./ • Generé soluciones de causa raíz a problemas de incidencias bajando en un 17% aproximadamente cada mes./• Lideré proyecto de reingenieria de CTLs COBOL a Oracle en tiempo y forma logrando la asignación del proceso completo de la reingeniera al equipo de Baufest./• Mantenimiento a app TRONWEB agregando funcionalidades requeridas por área usuaria.",
    subtitle: "Herramientas y Metodologías:",
    subDescription:
      "• Python con Pandas./ • SQL, TRONWEB CORE Java, Jasper Reports, Oracle PL/SQL./ • PLSQL Developer, DBeaver, SVN Tortoise./ • SCRUM, Jira ",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Banca AFIRME",
    image: "/BA.png",
    description:
      "• Realizar Análisis de requerimientos con usuarios de Mesa de Dinero (Regulatorios, Operativos y Normativos)./ • Generación de propuestas de corrección de raíz para atención de incidencias recurrentes./ • Migrar aplicación de reporteria de usuario Mesa de Dinero de Delphi a Java FX",
    subtitle: "Herramientas y Metodologías: ",
    subDescription:
      "• Oracle 11g PLSQL. /• Python en Anaconda y Spyder./ • Delphi./• Java FX./• shellscripts./• SVN.",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "IBM - MAPFRE - LATAM",
    image: "/IBMML.png",
    description:
      "• Ser Agile Coach para apoyar a la implementación de metodología SCRUM al equipo de LATAM realizando la creación de las hisotiras de usuario de lso mantenimientos priroizandolos de acuerdo a lo requerido por área usuaria./ • Creé ETLs para optimizar la atención de incidencias de acuerdo a ciertos criterios y bajar de manera pronta el % de éstas e poco tiempo./ • Fui responsable de equipo de desarrollo de 27 integrantes asingando sus tareas para atención de incidencias, mantenimientos y proyectos para los distintos paises de MAPFRE-LATAM./ • Realicé correcciones de raíz de incidencias N3 que el cliente tenia atrasadas por la complejidad del error reportado.",
    subtitle: "Herramientas y Metodologías: ",
    subDescription:
      "• TRONWEB CORE con Java 1_3, Jasper Reports./ • Python con Pandas y Matplotlib./• CORE MAPFRE Oracle 11g PLSQL (Packages, Procedures, Functions, Views, Triggers, DDL, DML, etc)./• SVN Tortoise./• Metodologías MUM y SCRUM ",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Grupo Financiero Interacciones",
    image: "/GFIn.png",
    description:
      "• Participé en proyecto de extracción de información mediante ETLs de operaciones Intercompañias creando procesos de Base de Datos Oracle para mejorar el rendimiento del sistema. • Agregar funcionalidad a sistema creada en APEX para mostrar informes de resultados mediante parámetros requeridos por usuario",
    subtitle: "Tecnologías y Herramientas: ",
    subDescription:
      "• APEX Oracle, DB Oracle 11g (Procedures, Functions, triggers, DDLs)./ • SVN Tortoise",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Banorte Casa de Bolsa y Banca",
    image: "/GFBCBB.png",
    description:
      "• Proyecto Implementación De Operaciones Préstamo de Valores. /• Proyecto Regulatorio Prácticas de Ventas para Fondos de Inversión./ • Reingeniería Generación de Constancias Fiscales Casa de Bolsa y Banco./• Creación Funcionalidad Conexión Banorte para Traspaso de Fondos. /• Reingenieróa de Reemplazo de SW para Documentos con Marca de Agua EDC y Const. Fiscales./ • Mantenimientos Preventivos y Correctivos.",
    subtitle: "Herramientas y Metodologías: ",
    subDescription:
      "• PowerHouse 4GL, shellscripts (unix)./ • Oracle PLSQL (Packages, Procedures, Functions, Triggers, DDLs, DMLs)./ • Java GI, weblogic, Oracle Forms y Reports./ • Control-M./ • Harvest./ • Crisol V",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "TECSICO - Consultoría de SW ",
    image: "/TSCB.png",
    description:
      "• Asignación de desarrollo de mantenimientos e incidencias por parte del cliente Banorte./ • Proponer soluciones a requerimientos de usuario participando activamente en Análisis funcionales y Técnicos./ • Crear procesos batch para ejecución de DMLs mediante procedures.",
    subtitle: "Herramientas y Metodología: ",
    subDescription:
      "• PowerHouse 4GL, Oracle PL/SQL (Packages, Procedures, Functions, Views, DDLs, DMLs)./ • Shellscripts./• Control-M./• Crisol V",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];
