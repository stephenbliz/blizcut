'use client';
import wallpaper from '../images/wallpaper.png';
import Image, { StaticImageData } from "next/image";
import {motion} from 'framer-motion';
import Link from "next/link";

interface offer {
    name: string
    desc: string
    image: StaticImageData
}

interface serviceSectionProp {
    offers1 : offer[]
    offers2: offer[]
    display: string
    childWidth: string
    parentWidth: string
}

export default function ServiceSection({offers1, offers2, display, childWidth, parentWidth}: serviceSectionProp){
    
    return(
        <div
                className="relative flex flex-wrap justify-center lg:justify-between items-center w-[100%]"
            >
                <div
                    className={`flex flex-wrap justify-between items-center w-full sm:w-[90%] ${parentWidth}`}
                >
                    {
                        offers1.map((offer1, index)=>(
                            <motion.div
                                key={index}
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{delay: .1, duration: 2, type: 'spring', stiffness: 120}}
                                viewport={{once: true}}
                                className={`w-full sm:w-[90%] ${childWidth}`}
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
                    className={`w-[35%] absolute top-[33%] left-[33%] hidden lg:${display}`}
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
                    className={`flex flex-wrap justify-between items-center w-full sm:w-[90%] ${parentWidth}`}
                >
                    {
                        offers2.map((offer2, index)=>(
                            <motion.div
                                key={index}
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{delay: .5, duration: 2, type: 'spring', stiffness: 120}}
                                viewport={{once: true}}
                                className={`w-full sm:w-[90%] ${childWidth}`}
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
    )
}