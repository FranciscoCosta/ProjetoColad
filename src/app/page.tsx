import Image from 'next/image'
import './Home.scss'

import Hero from '@/components/hero/Hero'
import Display from '@/components/display/Display'
export default function Home() {
  return (
    <main className='Home'>
      <Hero />
      <div className="spacer hero__display" />
      <Display />
      <div className="spacer display__display" />
    </main>
  )
}
