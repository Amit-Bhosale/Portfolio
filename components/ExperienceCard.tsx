import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
      <motion.img
      initial={{y:-100,opacity:0}}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='w-32 h-32 rounded-full object-cover object-center xl:w-[100px] xl:h-[100px]'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png'/>
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of Eco-Pay</h4>
        <p className='font-bold text-2xl mt-1'>Eco-Pay Pvt Ltd</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
          <img className='h-10 w-10 rounded-full' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
          <img className='h-10 w-10 rounded-full' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
          <img className='h-10 w-10 rounded-full' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
          
        </div>
        <p className='uppercase py-5 text-gray-300'>Started word .... - Ended ...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points to be there</li>
          <li>Summary points to be there</li>
          <li>Summary points to be there</li>
          <li>Summary points to be there</li>
          <li>Summary points to be there</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard