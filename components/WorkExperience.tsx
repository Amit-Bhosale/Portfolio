import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex flex-col overflow-hidden relative text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="mt-7 uppercase tracking-[20px] text-2xl">Experience</h3>
        <div className='w-full flex space-y-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}

export default WorkExperience