'use client';
import beardcut from '../images/beardCut.jpg';
import normalHaircut from '../images/normalHaircut.jpg';
import wallpaper from '../images/wallpaper.png';
import hairWash from '../images/hairWash.jpg';
import hairpuump from '../images/hairPump.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Offer(){
    const offers1 = [
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut},
        {name: 'hair pump', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: hairpuump}
    ];

    const offers2 = [
        {name: 'hair clean', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: hairWash},
        {name: 'new beard cut', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: beardcut}
    ];

    return(
        <section
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16 bg-tertiary-blue"
        >
            <h1
                className="capitalize text-secondary-black-200 text-center font-bold text-3xl sm:text-5xl font-oswald mb-8"
            >
                what we offer
            </h1>
            <p
                className="text-center lg:w-[70%] mx-auto mb-8"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur 
            </p>
            <div
                className="flex flex-wrap justify-center lg:justify-between items-center w-[100%]"
            >
                <div
                    className="flex flex-col justify-between items-center w-full sm:w-[90%] lg:w-[25%]"
                >
                    {
                        offers1.map((offer1, index)=>(
                            <motion.div
                                key={index}
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{delay: .1, duration: 2, type: 'spring', stiffness: 120}}
                                viewport={{once: true}}

                            >
                                <div
                                    className='w-full relative'
                                >
                                    <Image 
                                        src={offer1.image}
                                        alt={offer1.name}
                                        className='w-full'
                                    />
                                    <Link
                                        href=''
                                        className='absolute right-[5%] bottom-[-8%] w-[40%] capitalize inline-block py-[4%] text-center text-white bg-primary-gold hover:bg-tertiary-blue hover:text-primary-gold hover:border border-dashed border-primary-gold'
                                    >
                                        Details
                                    </Link>
                                </div>
                                <h2
                                    className='font-bold text-xl sm:text-2xl font-oswald text-secondary-black-200 mt-4 mb-0 capitalize'
                                >
                                    {offer1.name}
                                </h2>
                                <p
                                    className='mb-12'
                                >
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Sunt 
                                </p>
                            </motion.div>
                        ))
                    }

                </div>
                <motion.div
                    className="w-[35%] hidden lg:flex flex-col items-center justify-center"
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{delay: .5, duration: 2, type: 'spring', stiffness: 120}}
                    viewport={{once: true}}
                >
                    <Image 
                        src={wallpaper}
                        alt='group of barbers'
                        className='w-full'
                    />
                </motion.div>
                <div
                    className="flex flex-col justify-between items-center w-full sm:w-[90%] lg:w-[25%]"
                >
                    {
                        offers2.map((offer2, index)=>(
                            <motion.div
                                key={index}
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{delay: .5, duration: 2, type: 'spring', stiffness: 120}}
                                viewport={{once: true}}

                            >
                                <div
                                    className='w-full relative'
                                >
                                    <Image 
                                        src={offer2.image}
                                        alt={offer2.name}
                                        className='w-full'
                                    />
                                    <Link
                                        href=''
                                        className='absolute right-[5%] bottom-[-8%] w-[40%] capitalize inline-block py-[4%] text-center text-white bg-primary-gold hover:bg-tertiary-blue hover:text-primary-gold hover:border border-dashed border-primary-gold'
                                    >
                                        Details
                                    </Link>
                                </div>
                                <h2
                                    className='font-bold text-xl sm:text-2xl font-oswald text-secondary-black-200 mt-4 mb-0 capitalize'
                                >
                                    {offer2.name}
                                </h2>
                                <p
                                    className='mb-12'
                                >
                                    {offer2.desc}
                                </p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}