import Image from "next/image";
import image from '../images/image1.jpg';
import image2 from '../images/image10.jpg'
import image3 from '../images/image11.jpg';
import image4 from '../images/image12.jpg'
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Comment(){
    const comments = [
        {
            name:'anthony hoffman',
            id: 1,
            image: image,
            time: '29 min ago',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus id quisquam aliquam',
            replies: [
                {
                    name: 'ebuka uzoma',
                    image: image2,
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus',
                    time: '30 min age',
                    id: 1,
                },
                {
                    name: 'julia wright',
                    image: image3,
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus',
                    time: '32 min ago',
                    id: 2,
                }
            ]
          
        },
        {
            name: 'cheryl allen',
            image: image4,
            id: 2,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus id quisquam aliquam',
            time: '40 min ago',
            replies : [
                {
                    name: 'ebuka uzoma',
                    image: image2,
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus',
                    time: '30 min age',
                    id: 1,
                }
            ]
        }
    ];

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values)=>{
            console.log(values)
        }
    })

    return(
        <section>
            <p
                className="text-2xl flex justify-start items-center gap-2 capitalize text-secondary-black-200 font-oswald font-bold mb-8"
            >
               <span
                className="inline-block w-fit"
               >
                comments
                </span>  
               <span
                className="text-primary-gold inline-block w-fit"
               >
                    ({comments.length})
               </span>
            </p>
            <div
                className="mb-8"
            >
                {
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="flex flex-wrap items-start justify-between border-b border-dashed border-gray-300 py-6"
                        >
                            <div
                                className="w-[20%] lg:w-[25%]"
                            >
                                <Image 
                                    src={comment.image}
                                    alt="Author photo"
                                    className="w-full"
                                />
                            </div>
                            <div
                                className="w-[75%] lg:w-[70%]"
                            >
                                <div
                                    className="flex justify-between items-center mb-4"
                                >
                                    <div>
                                        <h2
                                            className="text-xl capitalize text-secondary-black-200 font-oswald font-bold mb-2"
                                        >
                                            {comment.name}
                                        </h2>
                                        <span
                                            className=""
                                        >{comment.time}</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="capitalize border border-gray-300 py-2 px-4 rounded w-fit"
                                    >
                                        reply
                                    </button>
                                </div>
                                <p
                                    className="mb-4"
                                >
                                    {comment.message}
                                </p>
                            </div>
                            <div
                                className="w-[85%] ml-[15%]"
                            >
                                {
                                    comment.replies.map((reply)=> (
                                        <div
                                            key={reply.id}
                                            className="flex flex-wrap items-start justify-between border-t border-dashed border-gray-300 py-6"
                                        >
                                            <div
                                                className="w-[20%] lg:w-[25%]"
                                            >
                                                <Image 
                                                    src={reply.image}
                                                    alt="Author photo"
                                                    className="w-full"
                                                />
                                            </div>
                                            <div
                                                className="w-[75%] lg:w-[70%]"
                                            >
                                                <div
                                                    className="flex justify-between items-center mb-4"
                                                >
                                                    <div>
                                                        <h2
                                                            className="text-xl capitalize text-secondary-black-200 font-oswald font-bold mb-2"
                                                        >
                                                            {reply.name}
                                                        </h2>
                                                        <span
                                                            className=""
                                                        >{reply.time}</span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="capitalize border border-gray-300 py-2 px-4 rounded w-fit"
                                                    >
                                                        reply
                                                    </button>
                                                </div>
                                                <p>
                                                    {reply.message}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <p
               className="text-2xl capitalize text-secondary-black-200 font-oswald font-bold mb-8" 
            >
                leave a comment!
            </p>
            <form
                onSubmit={formik.handleSubmit}
            >
                <div
                    className="mb-4"
                >
                    <input 
                        type="text"
                        name= 'name'
                        placeholder="Name"
                        className="w-full h-[3rem] bg-tertiary-blue focus:outline-none focus:border border-primary-gold py-2 px-4 mb-2"
                        value={formik.values.name} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.name && formik.touched.name &&
                        <div
                            className="text-red-800"
                        >
                            {formik.errors.name}
                        </div>
                    }
                </div>
                <div
                    className="mb-4"
                >
                    <input 
                        type="text"
                        name= 'email'
                        placeholder="Email"
                        className="w-full h-[3rem] bg-tertiary-blue focus:outline-none focus:border border-primary-gold py-2 px-4 mb-2"
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.email && formik.touched.email &&
                        <div
                            className="text-red-800"
                        >
                            {formik.errors.email}
                        </div>
                    }
                </div>
                <div
                    className="mb-4"
                >
                    <input 
                        type="text"
                        name= 'subject'
                        placeholder="Subject"
                        className="w-full h-[3rem] bg-tertiary-blue focus:outline-none focus:border border-primary-gold py-2 px-4 mb-2"
                        value={formik.values.subject} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.subject && formik.touched.subject &&
                        <div
                            className="text-red-800"
                        >
                            {formik.errors.subject}
                        </div>
                    }
                </div>
                <div
                    className="mb-4"
                >
                    <textarea 
                        name= 'message'
                        placeholder="Write Your Message Here..."
                        className="w-full h-[7rem] bg-tertiary-blue focus:outline-none focus:border border-primary-gold py-2 px-4 mb-2"
                        value={formik.values.message} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.message && formik.touched.message &&
                        <div
                            className="text-red-800"
                        >
                            {formik.errors.message}
                        </div>
                    }
                </div>
                <button
                    className=' transition duration-[.5s] w-[25%] capitalize inline-block py-[2%] px-[2%] text-center text-white bg-primary-gold hover:bg-tertiary-blue hover:text-primary-gold hover:border border-dashed border-primary-gold'
                    type="submit"
                >
                    send message
                </button>
            </form>
        </section>
    )
}