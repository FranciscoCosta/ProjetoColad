"use client"

import React from 'react'
import './Footer.scss'
import { ImLinkedin2 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { FaBook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Footer__rights">
        Copyright © 2023 Todos os direitos reservados|{" "}
        <a
          className="text-custom-blue "
          href="https://www.linkedin.com/in/francisco-costa-dev/"
          target="_blank"
        >
          Francisco Costa{" "}
        </a>
      </div>
      <div className='Footer__social'>
        <div
          className="social__container"
          data-testid="Footer-Linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/francisco-costa-dev/",
              "_blank"
            )
          }
        >
          <ImLinkedin2 className="svg-social" />
        </div>
        <div
          className="social__container"
          data-testid="Footer-Github"
          onClick={() =>
            window.open(
              "https://github.com/FranciscoCosta",
              "_blank"
            )
          }
        >
          <BsGithub className="svg-social" />
        </div>
        <div
          className="social__container"
          data-testid="Footer-Portfolio"
          onClick={() =>
            window.open(
              "https://franciscostaportfolio.netlify.app/",
              "_blank"
            )
          }
        >
          <FaBook className="svg-social" />
        </div>
      </div>
    </div>

  )
}

export default Footer