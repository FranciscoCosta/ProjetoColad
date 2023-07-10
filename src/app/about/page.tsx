"use client"

import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import './About.scss'
const About = () => {
  return (
    <div className='About'>
      <div className='About__container'>
        <div className="About__container-me">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="About__container-me--left">
            <h1 className="About__container-me--left-title">Sobre Mim</h1>
            <p>
              Olá a todos!
              <br />
              Chamo-me Francisco Costa, o desenvolvedor por trás do ProjetoColad.
              <br />
              Nasci em Portugal e formei-me em Engenharia Geográfica na Universidade do Porto, trabalhei como gerente de loja na empresa Viveiros Dulce de 2017 a 2021.
              <br />
              Em 2021, minha esposa e eu decidimos fazer uma mudança para o Brasil,  aproveitei a oportunidade para fazer uma transição de carreira para a área de programação.
              <br />
              Foi quando ingressei na Trybe em 2022, buscando aprender e desenvolver minhas habilidades.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}

            className="About__container-me--right">
            <div className='About__container-img'>
              <Image src="/images/profile.png" fill alt="profile-pic" className='img__contain-profile' />
            </div>
          </motion.div>

        </div>
        <div className="About__container-projectColab">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="About__container-projectColab--left">
            <div className='About__container-img'>
              <Image src="/images/logo1.png" fill alt="profile-pic" className='img__contain-profile' />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="About__container-projectColab--right">
            <h1 className="About__container-projectColab--right-title">Origem <span>Projeto</span>Colab</h1>
            <p>

              A ideia para o ProjetoColad surgiu da minha própria experiência. Sempre tive muitas ideias de projetos pessoais, mas enfrentava dificuldades em encontrar uma equipe completa para transformá-los em realidade. <br/>
              Foi frustrante perceber que outras pessoas também enfrentavam o mesmo desafio de encontrar colaboradores adequados para seus projetos.
              Decidi que era hora de resolver esse problema e criar uma solução.
              <br />
              Foi assim que nasceu o ProjetoColad. Meu objetivo principal ao criar essa plataforma foi fornecer um espaço onde as pessoas pudessem compartilhar suas ideias e encontrar outras com habilidades complementares dispostas a se juntar a elas no desenvolvimento desses projetos emocionantes.
              <br />
            </p>
          </motion.div>


        </div>

      </div>

      <div className="spacer display__display" />
    </div>
  )
}

export default About;