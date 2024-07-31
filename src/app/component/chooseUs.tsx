'use client';
import trendingHaircut from '../images/trendingHaircut.jpg';
import hairPump from '../images/hairPump.jpg';
import faceWash from '../images/faceWash.jpg';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeadAndPara from './headAndPara';

interface Appointment {
    name: string;
    image: StaticImageData | string;
    link: string;
  }


export default function ChooseUs(){
    const appointments:Appointment[] = [
        {name:'trending haircut', image: trendingHaircut, link: '#'},
        {name:'hair pump', image: hairPump, link: '#'},
        {name:'face wash', image: faceWash, link: '#'}
    ];

    return(
        <section
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16 text-secondary-black-100"
        >
            <HeadAndPara 
                head='why choose us'
                para='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur 
                atque deleniti eius obcaecati. Cupiditate, deserunt.'
            />
            
            <div
                className="flex flex-wrap justify-center lg:justify-between items-center mt-8"
            >
                {
                    appointments.map((appointment, index) => (
                        <motion.div
                            key={index}
                            className='sm:w-[80%] mb-12 lg:mb-0 lg:w-[30%] relative'
                            initial={{opacity: 0, scale:1.2}}
                            whileInView={{opacity:1, scale:1}} 
                            transition={{delay: .5, duration: 2, type:'spring', stiffness: 120}}
                            viewport={{once: true}}
                        >
                            <h2
                                className='font-bold text-xl sm:text-2xl font-oswald text-secondary-black-200 mb-4 capitalize'
                            >
                                {appointment.name}
                            </h2>
                            <div
                                className='w-[90%]'
                            >
                                <Image 
                                    src={appointment.image} 
                                    alt={appointment.name}
                                    className='w-[full]'
                                    priority={true}
                                />
                            </div>
                            <Link
                                className='absolute right-0 bottom-[-8%] w-[40%] capitalize inline-block py-[4%] text-center text-white bg-primary-gold hover:bg-tertiary-blue hover:text-primary-gold hover:border border-dashed border-primary-gold'
                                href={appointment.link}
                            >
                                book now
                            </Link>

                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}