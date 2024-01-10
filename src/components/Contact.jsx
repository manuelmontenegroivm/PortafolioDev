import React from 'react'
import Style from '../utils/CSS/Contact.module.css'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={`${Style.card} rounded-xl after:bg-[#3a8bd7] before:bg-[#3a8bd7] hover:shadow-md hover:shadow-white/10 bg-[#347bbe] h-[50px] w-[200px] overflow-hidden flex items-center justify-center relative`}>
      <span className='font-normal text-lg'>Contáctame</span>
      <a className={Style.socialLink} target="_blank" href="https://github.com/manuelmontenegroivm">
        <FaGithub />
      </a>
      <a className={Style.socialLink} target="_blank" href="mailto:m.montenegro.verdugo@gmail.com">
        <SiGmail />
      </a>
      <a className={Style.socialLink} target="_blank" href="https://www.linkedin.com/in/manuel-isa%C3%ADas-montenegro-verdugo-a2bb762a8/">
        <FaLinkedin />
      </a>
      <a className={Style.socialLink} target="_blank" href="https://www.instagram.com/select_ivm/">
        <BsInstagram />
      </a>

    </div>
  )
}

export default Contact