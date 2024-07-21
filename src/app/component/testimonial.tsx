'use client';
import { useState, useEffect } from 'react';
import image10 from '../images/image5.jpg';
import image11 from '../images/image8.jpg';
import image12 from '../images/image12.jpg';
import heroImage1 from '../images/heroImage1.png';
import Image, { StaticImageData } from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

interface testimonialProps {
    image: StaticImageData
    name: string
    text: string
    occupation: string
}

const testimonialVariant = {
    initial: {
        opacity: 0,
        x: 200
    },
    animate: {
        opacity: 1,
        x: 0,
        // transition: {
        //     duration: .5
        // }
    },
    exit: {
        x: -200,
        opacity: 0,
        // transition: {
        //     duration: .5
        // }
    }
}

const niceWords = 'Blizcut is one of the best beauty home in the world. There service is top notch and they emphasizes on customer satisfaction';

const testimonials: testimonialProps[] = [
    {image: image10, name: 'favian alen', text: niceWords, occupation: 'CEO, Blizfx'},
    {image: image11, name: 'cris jordan', text: niceWords, occupation: 'CEO, Blizfx'},
    {image: image12, name: 'tom arixon', text: niceWords, occupation: 'CEO, Blizfx'}
];

export default function Testimonial(){
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return(
        <section
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16 bg-tertiary-blue"
        >
            <h1
                className="capitalize text-secondary-black-200 font-bold text-3xl sm:text-5xl font-oswald mb-8"
            >
                what people says
            </h1>
            <p
                className="mb-16"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur 
            </p>
            
            <div
                className='lg:w-[70%] mx-2 lg:mx-auto overflow-x-hidden mb-8'
                
            >
                <AnimatePresence mode='wait' >
                <motion.div
                    className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start p-4 bg-white border border-dashed border-gray-300 '
                    key={index}
                    variants={testimonialVariant}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                >
                    <div
                        className='w-[150px] mb-4 lg:mb-0 lg:w-[15%] aspect-auto '
                    >
                        <Image 
                            src={testimonials[index]?.image}
                            alt='Testifier photo'
                            className='w-full h-full'
                        />
                    </div>
                    <div
                        className='w-full lg:w-[80%] text-center lg:text-left'
                    >
                        <p
                            className='mb-4'
                        >
                            {testimonials[index]?.text}
                        </p>
                        <p
                            className='text-xl capitalize font-bold font-oswald text-secondary-black-200'
                        >
                            {testimonials[index]?.name}
                        </p>
                        <p
                            className='mb-4 text-xl font-thin'
                        >
                            {testimonials[index]?.occupation}
                        </p>
                    </div>
                </motion.div>
                </AnimatePresence>
            </div>
            <motion.div
                className='lg:w-[40%] mx-2 lg:mx-auto overflow-x-hidden'
                initial={{opacity: 0, x:100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{delay: 1, duration: 5, type: 'spring', stiffness: 120}}
                viewport={{once: true}}
            >
                <Image 
                    src={heroImage1}
                    alt='Image'
                    className='w-full mx-auto mb-0'
                />
            </motion.div>
        </section>
    )
}