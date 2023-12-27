import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'


type Props = {}

const Hero = (props: Props) => {
  const imageUrl = require('../public/IMG_20231003_230047.jpg').default.src;
  const [text,count]=useTypewriter({
        words:["Hi, The Name's Amit Bhosale",'Guy-who-loves-Coffee.tsx','<BuildtoCodeMore/>'],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>
      <img src={imageUrl} className='relative rounded-full h-32 w-32 mx-auto object-cover'  alt='profile picture'/>


      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-4 pt-5 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-18'>
        <span>{text}</span>
        <Cursor cursorColor='blue'/>
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experince'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Hero