'use client';
import BlogSideBar from "@/app/component/blogSideBar";
import Breadcrumb from "@/app/component/breadcrumb";
import beardTrim from '../../images/beardTrim.jpg';
import hairpump from '../../images/hairpuump.jpg';
import image from '../../images/image1.jpg';
import normalHaircut from '../../images/normalHaircut.jpg';
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTag } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Comment from "@/app/component/comment";

interface blogDetailProp{
    params: {
        blogDetail: string
    }
}
interface blog {
    image: StaticImageData
    tag: string
    date: string
    title: string
}

export default function BlogDetail({params}:blogDetailProp){

    const [blogdetail, setBlogdetail] = useState<blog | null>(null)

    const blogs = [
        {image: beardTrim, tag: 'beard trim', date: '01 Aug, 2024', title: "Let's see trending beard trim in 2024 only for men", id:1},
        {image: hairpump, tag: 'hair pump', date: '01 Aug, 2024', title: "Let's see trending hair pump in 2024 only for men", id:2},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men", id:3},
        {image: beardTrim, tag: 'beard trim', date: '01 Aug, 2024', title: "Let's see trending beard trim in 2024 only for men", id:4},
        {image: hairpump, tag: 'hair pump', date: '01 Aug, 2024', title: "Let's see trending hair pump in 2024 only for men", id:5},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men", id:6},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men", id:7},
        {image: beardTrim, tag: 'beard trim', date: '01 Aug, 2024', title: "Let's see trending beard trim in 2024 only for men", id:8},
        {image: hairpump, tag: 'hair pump', date: '01 Aug, 2024', title: "Let's see trending hair pump in 2024 only for men", id:9},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men", id:10},
    ];

    useEffect(()=>{
        const getBlog = ()=>{
            const filterblog = blogs.find((blog)=>{
                return blog.id.toString() === params.blogDetail
            })
            if(filterblog){
                setBlogdetail(filterblog)
            }
        }
        getBlog();
    },[])
    return(
        <section
            className="overflow-hidden text-secondary-black-100 font-roboto"
        >
            <Breadcrumb 
                title="blog details"
            />
            <section
                className="pt-24 pb-2 w-[100vw] px-8 lg:px-16 lg:grid gap-4 grid-cols-3"
            >
                <section
                    className="col-span-2"
                >
                    <div
                        className="w-full"
                    >
                        <Image
                            src={blogdetail?.image!}
                            alt="Blog photo"
                            className="w-full"
                        />
                    </div>
                    <div
                        className='flex flex-wrap justify-start gap-4 items-center'
                    >
                        <div
                            className='w-fit flex justify-start gap-2 items-center lg:text-md capitalize mt-4'
                        >
                            <span>
                                <FaTag />
                            </span>
                            <span>
                                {blogdetail?.tag}
                            </span>
                        </div>
                        <div
                            className='w-fit flex justify-start gap-2 items-center lg:text-md mt-4'
                        >
                            <span>
                            <FaCalendarAlt />
                            </span>
                            <span>
                                {blogdetail?.date}
                            </span>

                        </div>
                        <h1
                            className='capitalize w-full mb-8 text-secondary-black-200 text-2xl font-oswald font-bold'
                        >
                            {blogdetail?.title}

                        </h1>
                    </div>
                    <p
                        className="mb-4"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Provident, impedit veniam quidem ratione culpa natus? Nulla 
                        consequatur soluta suscipit, impedit optio laudantium corrupti 
                        sunt harum fuga quisquam, ducimus corporis sapiente consectetur 
                        rerum ipsam atque aliquid est culpa odio nihil iusto illo, quas. 
                        Asperiores sint earum, cum odio non voluptatem dolor accusamus 
                        qui soluta doloremque sit?
                    </p>
                    <p
                        className="mb-8"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Unde doloribus, quaerat libero cumque non harum voluptatem, 
                        tempore aliquam repellendus perspiciatis a debitis ratione. 
                        Veniam laudantium provident officia, explicabo doloribus 
                        deleniti nemo eum corporis!
                    </p>
                    <div
                        className="flex justify-start items-center gap-4 mb-8"
                    >
                        <p
                            className="w-fit"
                        >
                            Share:
                        </p>
                        <div
                            className="flex w-fit gap-4"
                        >
                            <Link
                                className="w-fit border p-2 border-dashed border-gray-300 text-md text-primary-gold"
                                href='https://facebook.com'
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                className="w-fit border p-2 border-dashed border-gray-300 text-md text-primary-gold"
                                href='https://instagram.com'
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                className="w-fit border p-2 border-dashed border-gray-300 text-md text-primary-gold"
                                href='https://linkedin.com'
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                className="w-fit border p-2 border-dashed border-gray-300 text-md text-primary-gold"
                                href='https://twitter.com'
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                className="w-fit border p-2 border-dashed border-gray-300 text-md text-primary-gold"
                                href='https://facebook.com'
                            >
                                <FaFacebookF />
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex items-start justify-between mb-8"
                    >
                        <div
                            className="w-[30%] lg:w-[25%] mt-2"
                        >
                            <Image 
                                src={image}
                                alt="Author photo"
                                className="w-full"
                            />
                        </div>
                        <div
                            className="w-[65%] lg:w-[70%]"
                        >
                            <h2
                                className="text-xl capitalize text-secondary-black-200 font-oswald font-bold mb-2"
                            >
                                ebuka stephen uzoma
                            </h2>
                            <p
                                className="border-b border-gray-300 mb-4 pb-4 pr-2"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit. Error, accusamus possimus odit eos cum velit 
                                id? Obcaecati optio libero debitis ipsa, quos 
                                vero vel veritatis, deserunt atque at pariatur labore?
                            </p>
                            <div
                                className="flex w-fit gap-2"
                            >
                                <Link
                                    className="w-fit p-2 text-md text-primary-gold"
                                    href='https://facebook.com'
                                >
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    className="w-fit p-2 text-md text-primary-gold"
                                    href='https://instagram.com'
                                >
                                    <FaInstagram />
                                </Link>
                                <Link
                                    className="w-fit p-2 text-md text-primary-gold"
                                    href='https://linkedin.com'
                                >
                                    <FaLinkedin />
                                </Link>
                                <Link
                                    className="w-fit p-2 text-md text-primary-gold"
                                    href='https://twitter.com'
                                >
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Comment />
                </section>
                <section
                    className="col-span-1 mb-8 lg:mb-0"
                >
                    <BlogSideBar/>
                </section>
            </section>
        </section>
    )
}