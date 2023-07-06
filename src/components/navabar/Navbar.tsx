"use client"

import React from 'react'
import Image from 'next/image'
import './Navbar.scss'

import { useState } from 'react';


import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';

import Link from 'next/link'
import { link } from 'fs';

const links = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Sobre',
    path: '/about'
  },
  {
    id: 3,
    name: 'Contato',
    path: '/contact'
  },
  {
    id: 4,
    name: 'Projetos',
    path: '/projects'
  }
]

const Navbar = () => {


  const [open, setOpen] = useState(false);


  return (
    <nav className='Navbar'>
      <div className='Navbar__left'>
        <div className="Image__container">
          <Image src='/images/logo1.png' fill className='object-contain' alt='logo'/>
        </div>
        <h1>
        <span>Projeto</span>Colab
        </h1>
      </div>
      <div className='Navbar__right'>
        {
          links.map(link => (
            <Link href={link.path} key={link.id} className='Navbar__link'>
              <p>{link.name}</p>
              <div className='Link__line'/>
            </Link>
          ))
        }
      </div>
    <div className="Navbar__mobile-icon">
        {
          open ? (
            <CgCloseR onClick={() => setOpen(!open)} className='Navbar__icon'/>
            ) : (
              <GiHamburgerMenu onClick={() => setOpen(!open)} className='Navbar__icon'/>
          )
        }
    </div>
    <div className={`Navbar__mobile ${open ? 'Navbar__mobile--open' : ''}`}>
      {
        links.map(link => (
          <Link href={link.path} key={link.id} className='Navbar__link'>
            <p>{link.name}</p>
            <div className='Link__line'/>
          </Link>
        ))
      }
    </div>
    </nav>
  )
}

export default Navbar