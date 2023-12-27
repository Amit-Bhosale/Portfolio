import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{x:-500, opacity:0, scale:0.5}}
        animate={{x:0, opacity:1,scale:1}}
        transition ={{duration:1}}
        className='flex flex-row items-center'>
            <SocialIcon url="https://www.instagram.com" bgColor='transparent' fgColor='#cd486b' />
            <SocialIcon url="https://www.youtube.com" bgColor='transparent' fgColor='#FF0000' />
            <SocialIcon url="https://www.twitter.com" bgColor='transparent' fgColor='#1DA1F2' />
            <SocialIcon url="https://www.facebook.com" bgColor='transparent' fgColor='#1DA1F2' />
        </motion.div>

        <motion.div
        initial={{x:500,opacity:0,scale:0.5}}
        animate={{x:0, opacity:1,scale:1}}
        transition={{duration:1}}
        
        className='flex flex-row items-center cursor-pointer'>
            <SocialIcon className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </motion.div>
    </header>
  )
}

export default Header