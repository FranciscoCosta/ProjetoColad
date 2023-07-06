"use client"

import { motion } from "framer-motion"

import React, { useState } from 'react'
import './Hero.scss'

import Image from 'next/image'

const hero1 = '/images/hero1.jpg'
const hero2 = '/images/hero2.jpg'
const hero3 = '/images/hero3.jpg'

const steps = [
  {
    title: 'Regista o teu projeto',
    description: 'Regista a tua ideia e pede ajuda para a desenvolver',
    id: 1,
  },
  {
    title: 'Procura membros',
    description: 'Procura os melhores devs para o teu projeto',
    id: 2,
  },
  {
    title: 'Começa a trabalhar',
    description: 'Começa a desenvolver com a tua nova equipa',
    id: 3,
  },
]





const Hero = () => {


  const [activeStep, setActiveStep] = useState(1);

  const handleBoxHover = (id: number) => {
    setActiveStep(id);
  };

  let heroImageSrc = "";
  if (activeStep === 1) {
    heroImageSrc = hero1;
  } else if (activeStep === 2) {
    heroImageSrc = hero2;
  } else if (activeStep === 3) {
    heroImageSrc = hero3;
  }

  return (
    <div className='Hero'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="Hero__cta">
        <h1 className="Hero__title">Construi a tua  <span>ideia</span> com <span>ajuda</span>.</h1>
        <p className="Hero__description">No <span>ProjetoColad</span>  encontras os profissionais motivados a construir a tua ideia.</p>
        <button>Saber mais</button>

      </motion.div>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="Hero__display">
        <div className='Hero__image-container'>
          <Image src={heroImageSrc} alt="Hero__display" fill className='image__display' />

        </div>

      </motion.div>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="Hero__steps">
        {steps.map((step) => (
          <div className={`Hero__step ${activeStep === step.id ? "active" : ""}`} key={step.title} onMouseEnter={() => handleBoxHover(step.id)}>
            <h3 className="Hero__step-title">{step.title}</h3>
            <p className="Hero__step-description">{step.description}</p>
          </div>
        ))}
    </motion.div>
    </div >
  )
}

export default Hero