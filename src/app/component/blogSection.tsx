'use client';
import beardTrim from '../images/beardTrim.jpg';
import hairpump from '../images/hairpuump.jpg';
import normalHaircut from '../images/normalHaircut.jpg';
import { FaTag } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeadAndPara from './headAndPara';
import Blogs from './blogs';

export default function BlogSection(){
    const blogs = [
        {image: beardTrim, tag: 'beard trim', date: '01 Aug, 2024', title: "Let's see trending beard trim in 2024 only for men"},
        {image: hairpump, tag: 'hair pump', date: '01 Aug, 2024', title: "Let's see trending hair pump in 2024 only for men"},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men"},
    ]
    return (
        <section
            className="text-secondary-black-100 pt-24 pb-2 w-[100vw] px-8 lg:px-16"
        >
            <HeadAndPara 
                head='latest news'
                para='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur'
            />
            <Blogs 
                blogs={blogs}
                width='lg:w-[30%]'
            />
            
            {/* <div
                className="mb-12 flex flex-wrap justify-center lg:justify-between items-center"
            >
                {
                    blogs.map((blog, index)=> (
                        <motion.div
                            className='relative mb-16 lg:mb-0 capitalize lg:w-[30%] p-2 border-2 border-dashed border-gray-300'
                            key={index}
                            initial={{opacity: 0, scale: 1.5}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 1}}
                            viewport={{once: true}}
                        >
                            <div
                                className='w-full mb-4  overflow-hidden '
                            >
                                <Image 
                                    src={blog.image}
                                    alt='blog image'
                                    className='w-full transition ease-out duration-[.7s] hover:scale-125'
                                />
                            </div>
                            <div
                                className='p-4 flex flex-wrap justify-start gap-4 items-center'
                            >
                                <div
                                    className='w-fit flex justify-start gap-2 items-center'
                                >
                                    <span>
                                        <FaTag />
                                    </span>
                                    <span>
                                        {blog.tag}
                                    </span>
                                </div>
                                <div
                                    className='w-fit flex justify-start gap-2 items-center'
                                >
                                    <span>
                                    <FaCalendarAlt />
                                    </span>
                                    <span>
                                        {blog.date}
                                    </span>

                                </div>
                                <h1
                                    className='w-full mb-8 text-secondary-black-200 text-xl font-oswald font-bold'
                                >
                                    {blog.title}

                                </h1>
                            </div>
                            <Link
                                href=''
                                className='absolute transition duration-[.5s] right-[5%] bottom-[-8%] w-[40%] capitalize inline-block py-[4%] text-center text-white bg-primary-gold hover:bg-tertiary-blue hover:text-primary-gold hover:border border-dashed border-primary-gold'
                            >
                                Details
                            </Link>
                        </motion.div>
                    ))
                }
            </div> */}
        </section>
    )
}