import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Contact from "./Contact";

const HeroContent = () => {
    return (
        <div
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start rounded">
                <div
                    className="Welcome-box py-[8px] px-[7px] border border-[#3b7ad1] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#3b7ad1] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Bienvenido a mi portafolio
                    </h1>
                </div>


                <div
                    className="flex flex-col gap-6 mt-6 text-3xl lg:text-7xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Manuel Montenegro
                        <span className="bg-clip-text text-blue-500">
                            {" "}
                            Web Developer{" "}
                        </span>

                    </span>
                </div>

                <p
                    className="text-lg text-gray-300 my-5 max-w-[600px]"
                >

                    ¡Hola! Soy Manuel, un desarrollador web con experiencia tanto en Front-end como en Back-end. Mi pasión radica en transformar ideas en experiencias cautivadoras.
                </p>
                <div
                    className=""
                >
                    <Contact />
                </div>
            </div>

            <div
                className="w-full h-full flex justify-center items-center"
            >
                <img
                    src="/Astronauta2hd.webp"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </div>


            <div className='absolute bottom-10 right-10 lg:right-1/2'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                    />
                </div>
            </div>
        </div>


    );
};

export default HeroContent;
