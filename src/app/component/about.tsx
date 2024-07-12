'use client';
import aboutImage from '../images/aboutImage.jpg';
import { FcSignature } from "react-icons/fc";
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import {motion} from 'framer-motion'

export default function SectionAbout(){
    return(
        <section
            className="pb-8 pt-[10%] px-8 lg:px-16 flex flex-wrap text-secondary-black-100"
        >
            <motion.div
                className='w-[100%] lg:w-[50%] relative h-fit'
                initial={{opacity: 0, x: '-100%'}}
                whileInView={{opacity: 1, x: 0}}
                transition={{delay:.5, duration:2, type: 'spring', stiffness: 120}}
            >
                <Image 
                    src={aboutImage}
                    alt='Image of a barber'
                    className='w-full'
                    priority={true}
                />
                <div
                    className='h-full border-2 border-dashed border-gray-300 absolute w-[90%] top-[10%] left-[2%] '
                >

                </div>
                <div
                    className='absolute w-[100px] h-[100px] rounded-full border-2 border-dashed border-primary-gold right-[15%] bottom-[10%]'
                >
                    <div
                        className='w-[90%] h-[90%] mx-auto my-1 rounded-full bg-primary-gold'
                    >
                        <a 
                            href=""
                            className='text-white text-center text-2xl p-[13%] absolute top-[25%] left-[25%] w-[50%] h-[50%]'
                        >
                            <FaPlay />
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className='w-[100%] lg:w-[50%] px-4'
                initial={{opacity: 0, x: '100%'}}
                whileInView={{opacity: 1, x: 0}}
                transition={{delay:.5, duration:2, type: 'spring', stiffness: 120}}
            >
                <h1
                    className='font-oswald font-bold text-3xl sm:text-4xl mb-8 mt-[12%] lg:mt-0 capitalize text-secondary-black-200'
                >
                    about BLIZCUT
                </h1>
                <p
                    className='mb-4'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste dolore minus ipsum recusandae accusantium repellendus 
                    sit voluptatem maiores? Veniam sit, maiores earum esse facere 
                    repellendus nisi iure commodi quod ullam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste dolore minus ipsum recusandae accusantium repellendus 
                    sit voluptatem maiores? Veniam sit, maiores earum esse facere 
                    repellendus nisi iure commodi quod ullam?
                </p>
                <div>
                    <FcSignature 
                        className='text-secondary-black-200 text-[150px]'
                    />
                </div>

            </motion.div>

        </section>
    )
}