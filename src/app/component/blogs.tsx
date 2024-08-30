import { FaTag } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import {motion} from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface blog {
    image: StaticImageData
    tag: string
    date: string
    title: string
    id: number
}

interface BlogsProp{
    blogs: blog[]
    width: string
}

export default function Blogs({blogs, width}:BlogsProp){
    return (
        <div
                className="mb-12 flex flex-wrap justify-center lg:justify-between items-center"
            >
                {
                    blogs.map((blog, index: number)=> (
                        <motion.div
                            className={`relative mb-16 capitalize ${width} p-2 border border-dashed border-gray-300`}
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
                                    className='w-fit flex justify-start gap-2 items-center lg:text-sm'
                                >
                                    <span>
                                        <FaTag />
                                    </span>
                                    <span>
                                        {blog.tag}
                                    </span>
                                </div>
                                <div
                                    className='w-fit flex justify-start gap-2 items-center lg:text-sm'
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
                                href={`/blog/${blog.id}`}
                                className='absolute transition duration-[.5s] right-[5%] bottom-[-8%] w-[40%] capitalize inline-block py-[4%] text-center text-white bg-primary-gold hover:bg-tertiary-blue hover:text-primary-gold hover:border border-dashed border-primary-gold'
                            >
                                Details
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
    )
}