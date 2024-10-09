'use client';
import wallpaper from '../images/wallpaper.png';
import Image from "next/image";
import {motion} from 'framer-motion';
import Link from "next/link";
import { serviceSectionProp } from '../utils/type';

export default function ServiceSection({services, display, childWidth, parentWidth, gap}: serviceSectionProp){
    
    return(
        <div
                className="relative flex flex-wrap justify-center lg:justify-between items-center w-[100%]"
            >
                <div
                    className={`flex flex-wrap ${gap} items-center w-full sm:w-[90%] ${parentWidth}`}
                >
                    {
                        services?.map((service)=>(
                            <motion.div
                                key={service.id}
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 2, type: 'spring', stiffness: 120}}
                                viewport={{once: true}}
                                className={`w-full sm:w-[90%] ${childWidth}`}
                            >
                                <div
                                    className='w-full relative'
                                >
                                    <img 
                                        src={service.featuredImage.url}
                                        alt={service.featuredImage.alt}
                                        className='w-full'
                                    
                                    />
                                    <Link
                                        href={`/service/${service.slug}`}
                                        className='absolute right-[5%] bottom-[-8%] w-[40%] capitalize inline-block py-[4%] text-center text-white bg-primary-gold hover:bg-tertiary-blue hover:text-primary-gold hover:border border-dashed border-primary-gold'
                                    >
                                        Details
                                    </Link>
                                </div>
                                <h2
                                    className='font-bold text-xl sm:text-2xl font-oswald text-secondary-black-200 mt-4 mb-0 capitalize'
                                >
                                    {service.title}
                                </h2>
                                <p
                                    className='mb-12'
                                >
                                    {service.excerpt}
                                </p>
                            </motion.div>
                        ))
                    }

                </div>
                <motion.div
                    className={`w-[35%] absolute top-[33%] left-[33%] hidden lg:${display}`}
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 2, type: 'spring', stiffness: 120}}
                    viewport={{once: true}}
                >
                    <Image 
                        src={wallpaper}
                        alt='group of barbers'
                        className='w-full'
                    />
                </motion.div>
            </div>
    )
}