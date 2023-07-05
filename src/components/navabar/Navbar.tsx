import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className=' '>
      <div className=''>
          <Image src= '/images/logo.png' fill className='' alt='logo'/>
        <h1>
          ProjetoColab
        </h1>
        </div>
      <div className='flex-1'>
          basd
        </div>
    </nav>
  )
}

export default Navbar