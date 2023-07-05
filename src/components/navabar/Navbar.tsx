import React from 'react'
import Image from 'next/image'
import './Navbar.scss'

import Link from 'next/link'

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
    <div className="Navbar__mobile">
      X
    </div>
    </nav>
  )
}

export default Navbar