'use client';
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import trending from '../images/trendingHaircut.jpg';
import beardcut from '../images/beardCut.jpg';
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Footer(){

    const news = [
        {images: trending, date: '24 Aug, 2024', snippet: 'The work of Blizcut is the talk of the town.'},
        {images: beardcut, date: '24 Aug, 2024', snippet: 'The work of Blizcut is the talk of the town.'},
    ];

    const contacts = [
        {icon: <FaLocationDot />, details: '220 Even Green Hamton Road, New York'},
        {icon: <IoCall />, details: '+012 123 123 123'},
        {icon: <IoCall />, details: '+012 123 123 123'},
        {icon: <MdEmail />, details: 'yourmailaddress@gmail.com'}
    ]
    const validate = Yup.object({
        email: Yup.string()
                .email('Invalid Email')
                .required('Email is required')
    })

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validate,
        onSubmit: (values)=>{
            console.log(values)
        }
    })
    
    return(
        <section 
            className="relative flex flex-wrap font-roboto items-start justify-start lg:justify-between mt-[10%] text-secondary-black-100 px-8 lg:px-16 bg-tertiary-blue pb-[15%] pt-[40%] sm:pt-[25%] lg:pt-[20%]"
        >
            <div
                className="w-[full] lg:w-[30%] mb-8 lg:mb-0"
            >
                <h1
                    className="text-xl lg:text-2xl font-oswald font-bold text-secondary-black-200 capitalize mb-8"
                >
                    about us
                </h1>
                <p
                    className="mb-8"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi molestiae, aut perferendis quos sit tempore, 
                    earum commodi ipsam blanditiis doloremque hic corrupti
                </p>
                <div
                    className="flex flex-wrap justify-start w-full items-center gap-4"
                >
                    <Link
                        href=''
                        className="w-fit p-4 bg-white"
                    >
                        <FaFacebookF 
                            className="text-2xl text-primary-gold"
                        />
                    </Link>
                    <Link
                        href=''
                        className="w-fit p-4 bg-white"
                    >
                        <FaTwitter 
                            className="text-2xl text-primary-gold"
                        />
                    </Link>
                    <Link
                        href=''
                        className="w-fit p-4 bg-white"
                    >
                        <FaInstagram 
                            className="text-2xl text-primary-gold"
                        />
                    </Link>
                    <Link
                        href=''
                        className="w-fit p-4 bg-white"
                    >
                        <FaLinkedinIn 
                            className="text-2xl text-primary-gold"
                        />
                    </Link>
                </div>
            </div>

            <div
                className="w-[full] lg:w-[30%] mb-8 lg:mb-0"
            >
                <h1
                    className="text-xl lg:text-2xl font-oswald font-bold text-secondary-black-200 capitalize mb-8"
                >
                    popular news
                </h1>
                <div
                    className="flex flex-col"
                >
                  {
                    news.map((item, index)=>(
                        <div
                            key={index}
                            className="flex w-full justify-between items-start first:border-b border-dashed border-gray-300 first:pb-8  last:pt-8"
                        >
                            <div
                                className="w-[25%]"
                            >
                                <Image 
                                    src={item.images}
                                    alt="News image"
                                    className="w-full"
                                />
                            </div>
                            <div
                                className="w-[70%]"
                            >
                                <p
                                    className="mb-8"
                                >
                                    {item.snippet}
                                </p>
                                <p
                                    className="text-primary-gold text-sm"
                                >
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))
                  }
                </div>
            </div>
            <div
                className="w-[full] lg:w-[30%] mb-8 lg:mb-0"
            >
                <h1
                    className="text-xl lg:text-2xl font-oswald font-bold text-secondary-black-200 capitalize mb-8"
                >
                    contact us
                </h1>
                <div
                    className="flex flex-col"
                >
                    {
                        contacts.map((contact, index)=>(
                            <address
                                className="w-full flex justify-start items-center gap-4 border-b border-dashed border-gray-300 pb-4 mb-4"
                                key={index}
                            >
                                <span
                                    className="text-primary-gold text-xl w-fit"
                                >
                                    {contact.icon}
                                </span>
                                <span
                                    className="w-fit"
                                >
                                    {contact.details}
                                </span>
                            </address>
                        ))
                    }
                </div>
            </div>
            <p
                className="absolute text-sm lg:text-lg bottom-4 left-[50%] -translate-x-[50%] text-gray-400"
            >
                Copyright © 2022 by Blizcut
            </p>
            <div
                className="absolute w-[90%] lg:w-[60%] -top-[5%] px-6 py-8 bg-white border border-dashed border-gray-300 left-[50%] -translate-x-[50%]"
            >
                <h1
                    className="font-oswald capitalize mb-4 font-bold text-xl lg:text-2xl text-secondary-black-200 text-center"
                >
                    subscribe our newsletter
                </h1>
                <form
                    className=""
                    onSubmit={formik.handleSubmit}
                >
                    <div
                        className="flex justify-center "
                    >
                        <input 
                            type="text"
                            className="w-[70%] h-16 border outline-none  focus:border-gray-400 border-gray-300 px-4 text-secondary-black-100 font-roboto"
                            placeholder="Your Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        
                    
                    <button
                        type="submit"
                        className="w-[30%] text-white bg-primary-gold capitalize text-center py-4"
                    >
                        subscribe
                    </button>
                    </div>
                    {
                        formik.errors.email && formik.touched.email && 
                            <div
                                className="text-red-500 opacity-80 mt-2"
                            >
                                {formik.errors.email}
                            </div>
                    }
                </form>
            </div>
        </section>
    )
}