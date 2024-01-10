import React from 'react'
import ProjectCard from './ProjectCard'
import Unne from '../assets/Unne.png'
import Aulen from '../assets/Aulen.png'
import Panal from '../assets/Panal.png'
import QR from '../assets/QR.png'
import Kanjeo from '../assets/Kanjeo.png'
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from "../utils/motion";
const data = [
    {
        title: 'Portal Web | Unne',
        desc: 'Web empresa dedica al arriendo venta e inversión en propiedades de manera informada, segura y rápida.',
        skills: ['Reactjs', 'Axios', 'Tailwindcss', 'Headless UI', 'Cloudinary'],
        github: '#github',
        href: 'https://unne.cl/',
        img: Unne
    },
    {
        title: 'Portal Web | Aulen',
        desc: 'Web empresa dedicada a la asesoría e intermediación de compra, arriendo y administración de propiedades.',
        skills: ['Reactjs', 'Axios', 'Tailwindcss', 'Emotion'],
        github: '#github',
        href: 'https://aulenpropiedades.cl/propiedades',
        img: Aulen
    },

    {
        title: 'Portal Web | Acción Panal Chile',
        desc: 'Web empresa dedicada al corretaje inmobiliario, creando proyectos de Software y herramientas que van orientadas a la mejora del trabajo del corredor.',
        skills: ['Nextjs', 'Tailwindcss', 'Headless UI', 'Cloudinary'],
        github: '#github',
        href: 'https://accionpanal.com/',
        img: Panal
    },


    {
        title: 'Portal Web y aplicación | QR Services',
        desc: 'Web y aplicación dedicada a la gestión, monotorización, prevención y manteción de flotas de vehículos',
        skills: ['Reactjs', 'Axios', 'Tailwindcss', 'Cloudinary'],
        github: '#github',
        href: 'https://qrservice.netlify.app/',
        img: QR
    },


    {
        title: 'Portal Web | Yo Kanjeo',
        desc: 'Web especializada en corretaje inmobiliario con herramientas y software inteligente. Optimiza la gestión de propiedades y análisis de mercado. Su motor de búsqueda integrado actúa como un asistente en línea, mejorando la eficiencia para corredores y elevando la calidad del servicio.',
        skills: ['Reactjs', 'Tailwindcss', 'Cloudinary'],
        github: '#github',
        href: 'https://yocanjeo.cl/',
        img: Kanjeo
    },

]

const Projects = () => {
    return (
        <div className='' id='Projects'>

            <h4 className={`${styles.sectionHeadText} text-center`}>
                Proyectos
            </h4>
            <p className={`${styles.sectionSubText} text-center mb-10`}>
                Proyectos en lo que he trabajo
            </p>


            <div className="flex justify-center">

                <div className="grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8">
                    {data.map((items, index) => (


                        <ProjectCard key={index} items={items} />


                    ))}
                </div>



            </div>
        </div>
    )
}

export default Projects
