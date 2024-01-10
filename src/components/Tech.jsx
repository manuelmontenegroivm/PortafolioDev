import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiesFront, technologiesBack, technologiesBD, technologiesTools, technologiesLearning } from "../constants";
import { styles } from "../styles";
const Tech = () => {
  return (
    <div className="" id='Tech'>
      <div className="mb-8" >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Mi Stack Tecnologico
        </h2>
        <section className="bg-[#0d16269d] py-10 mb-5 mt-14">
          <p className={`${styles.sectionSubText} text-center`}>
            Fronted
          </p>
          <div className='flex flex-row flex-wrap justify-center gap-10 relative z-30'>
            {technologiesFront.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </section>


        <section className="bg-[#0d16269d] py-10 mb-5 mt-14">
          <p className={`${styles.sectionSubText} text-center`}>
            Backend
          </p>
          <div className='flex flex-row flex-wrap justify-center gap-10 relative z-30'>
            {technologiesBack.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </section>


        <section className="bg-[#0d16269d] py-10 mb-5 mt-14">
          <p className={`${styles.sectionSubText} text-center`}>
            DB
          </p>
          <div className='flex flex-row flex-wrap justify-center gap-10 relative z-30'>
            {technologiesBD.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </section>



        <section className="bg-[#0d16269d] py-10 mb-5 mt-14">
          <p className={`${styles.sectionSubText} text-center`}>
            Herramientas
          </p>
          <div className='flex flex-row flex-wrap justify-center gap-10 relative z-30'>
            {technologiesTools.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </section>


        <section className="bg-[#0d16269d] py-10 mb-5 mt-14">
          <p className={`${styles.sectionSubText} text-center`}>
            Aprendiendo
          </p>
          <div className='flex flex-row flex-wrap justify-center gap-10 relative z-30'>
            {technologiesLearning.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");