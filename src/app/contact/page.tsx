'use client';
import Breadcrumb from "../component/breadcrumb";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Contact(){
    const contacts = [
        {icon: <IoCall />, details: '+012 123 123 123'},
        {icon: <MdEmail />, details: 'yourmailaddress@gmail.com'},
        {icon: <FaLocationDot />, details: '220 Even Green Hamton Road, New York'}
    ];

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.number(),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string()
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values)=>{
            console.log(values)
        }
    })

    console.log(formik)

    return(
        <section
            className="overflow-hidden text-secondary-black-100"
        >
            <Breadcrumb title="contact us" />
            <section
                className="py-12 w-[85vw] mb-[20%] lg:mb-0 mx-auto px-8 lg:px-16 bg-tertiary-blue shadow-2xl mt-[10%]"
            >
                <div
                    className="flex flex-wrap justify-center  items-center lg:items-start mb-4"
                >
                    {
                        contacts.map((contact, index) => (
                            <address
                                className="w-full lg:w-[33%] mb-8 text-center lg:mb-0 p-8 last:lg:border-none lg:border-r border-dashed border-primary-gold"
                                key={index}
                            >
                                <span
                                    className="block"
                                >
                                    <span
                                        className="bg-primary-gold mx-auto block w-fit text-white text-xl p-4 rounded-full mb-6"
                                    >
                                        {contact.icon}
                                    </span>
                                </span>
                                <span>
                                    {contact.details}
                                </span>
                            </address>
                        ))
                    }
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="w-full lg:w-[80%] mx-auto border border-dashed border-primary-gold p-4 lg:p-8 text-secondary-black-100"
                >
                    <div
                        className="flex flex-wrap justify-between items-center"
                    >
                        <div
                            className="w-full lg:w-[47%] mb-4 relative"
                        >
                            <input 
                                type="text"
                                name="name"
                                value={formik.values.name} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Name*"
                                className="h-[3rem] block w-full outline-none mb-6 px-2 border-b border-transparent focus:border-primary-gold"
                            />
                            {
                                formik.errors.name && formik.touched.name &&
                                <div
                                    className="text-red-400 text-sm absolute left-0 bottom-0"
                                >
                                    {formik.errors.name}
                                </div>
                            }

                        </div>
                        <div
                            className="w-full lg:w-[47%] mb-4 relative"
                        >
                            <input 
                                type="text"
                                name="email"
                                value={formik.values.email} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                placeholder="Email*"
                                className="h-[3rem] block w-full outline-none mb-6 px-2 border-b border-transparent focus:border-primary-gold"
                            />
                            {
                                formik.errors.email && formik.touched.email &&
                                <div
                                    className="text-red-400 text-sm absolute left-0 bottom-0"
                                >
                                    {formik.errors.email}
                                </div>
                            }
                            
                        </div>
                        <div
                            className="w-full lg:w-[47%] mb-4 relative"
                        >
                            <input 
                                type="text"
                                name="subject" 
                                value={formik.values.subject} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Subject*"
                                className="h-[3rem] block w-full outline-none mb-6 px-2 border-b border-transparent focus:border-primary-gold"
                            />
                            {
                                formik.errors.subject && formik.touched.subject &&
                                <div
                                    className="text-red-400 text-sm absolute left-0 bottom-0"
                                >
                                    {formik.errors.subject}
                                </div>
                            }
                        </div>
                        <div
                            className="w-full lg:w-[47%] mb-4 relative"
                        >
                            <input 
                                type="number"
                                name="phone" 
                                value={formik.values.phone} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Phone"
                                className="h-[3rem] block w-full outline-none mb-6 px-2 border-b border-transparent focus:border-primary-gold"
                            />
                            {
                                formik.errors.phone && formik.touched.phone &&
                                <div
                                    className="text-red-400 text-sm absolute left-0 bottom-0"
                                >
                                    {formik.errors.phone}
                                </div>
                            }
                        </div>
                    </div>
                    <div
                        className="mb-8 relative"
                    >
                        <textarea 
                            name="message"
                            value={formik.values.message} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Message"
                            className="w-full block h-[8rem] p-4 mb-4 border-b outline-none border-transparent focus:border-primary-gold"
                        />
                        {
                            formik.errors.message && formik.touched.message &&
                            <div
                                className="text-red-400 text-sm absolute left-0 bottom-0"
                            >
                                {formik.errors.message}
                            </div>
                        }
                    </div>
                    <button
                        type="submit"
                        className="block w-fit p-4 text-center mx-auto capitalize border border-dashed border-transparent bg-primary-gold text-white hover:bg-tertiary-blue hover:border-primary-gold hover:text-primary-gold transition-all duration-[.5s]"
                    >
                        send message
                    </button>
                </form>
            </section>
        </section>
    )
}