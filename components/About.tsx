import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
    const imageUrl = require('../public/IMG_20231003_230047.jpg').default.src;
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-9xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-20 uppercase tracking-[20px] text-2xl">About</h3>

        <motion.img 
        initial={{
            x:-200,     
            opacity:0    
        }}
        whileInView={{ x:0,opacity:1}}
        className="mt-20 md:mb-0 flex-shrink-0 rounded-full h-56 w-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        transition={{duration:1.2}}
        src={imageUrl}
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className='text-4xl font-semibold'>Here is a little background</h4>
            <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, vel, est recusandae nemo odio ducimus nobis temporibus ad aperiam consectetur commodi fugit praesentium architecto! Illum neque tenetur ullam quaerat qui at. Accusantium, numquam, tenetur non magni ipsam sapiente harum mollitia sequi nihil sint laborum voluptates dolore ut perferendis laudantium. Enim iusto qui reprehenderit voluptates provident temporibus incidunt est, eius officiis ea consectetur amet quas dolor non soluta error illum minus cumque in! Sunt quasi pariatur officia assumenda aut sit blanditiis velit laboriosam qui voluptatibus soluta dolorum odit quis, iusto eum aliquam nihil dolorem veniam ut molestiae facere! Labore, fuga quia!</p>
        </div>
    </motion.div>
  )
}

export default About