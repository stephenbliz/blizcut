'use client';
import { FaSearch } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from 'yup';
import PostSnippet from "./postSnippet";
import trending from '../images/trendingHaircut.jpg';
import beardcut from '../images/beardCut.jpg';
import heroImage from '../images/heroImage1.png';
import Image from "next/image";

export default function BlogSideBar(){
    const validationSchema = Yup.object({
        search : Yup.string().required('Field is required')
    })

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) =>{
            console.log(values)
        }
    })

    const categories = [
        {name: 'barbing', number: '10', id: 1},
        {name: 'shaving', number: '6', id: 2},
        {name: 'dread locs', number: '3', id: 3},
        {name: 'nails', number: '1', id: 4},
        {name: 'hair wash', number: '2', id: 5}
    ];

    const tags = [
        {name: 'haircut', id: 1},
        {name: 'locs', id: 2},
        {name: 'beard trim', id: 3},
        {name: 'shave', id: 4},
        {name: 'wash', id: 5},
        {name: 'hair pump', id: 6}
    ]

    const posts = [
        {image: trending, date: '24 Aug, 2024', snippet: 'The work of Blizcut is the talk of the town.'},
        {image: beardcut, date: '24 Aug, 2024', snippet: 'The work of Blizcut is the talk of the town.'},
    ];

    return(
        <>
            <form
                className="p-8 border border-dashed border-gray-300 mb-8"
                onSubmit={formik.handleSubmit}
            >
                <label
                    className="block capitalize text-xl lg:text-2xl pb-4 mb-4 text-secondary-black-200 font-oswald font-bold border-b border-dashed border-primary-gold"
                >
                    search
                </label>
                <div
                    className="flex items-center"
                >
                    <input 
                        type="text"
                        className="block w-[80%] h-[3rem] text-secondary-black-100 p-4 bg-tertiary-blue border-b border-transparent focus:border-primary-gold outline-none" 
                        placeholder="Search Here..."
                        name="search"
                        value={formik.values.search}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <button
                        className="block w-[20%] h-[3rem] p-[5%] bg-primary-gold text-center text-white text-2xl cursor-pointer"
                        type="submit"
                    >
                        <FaSearch />

                    </button>
                </div>
                {
                    formik.errors.search && formik.touched.search && 
                    <div
                        className="text-red-400 mt-4"
                    >
                        {formik.errors.search}
                    </div>
                }
            </form>

            <div
                className="p-8 border border-dashed border-gray-300 mb-8"
            >
                <div
                    className="capitalize text-xl lg:text-2xl pb-4 mb-8 text-secondary-black-200 font-oswald font-bold border-b border-dashed border-primary-gold"
                >
                    categories
                </div>
                <div
                    
                >
                    {
                        categories.map((category) => (
                            <div
                                className="flex justify-between capitalize cursor-pointer items-center border-b py-4 border-gray-300 hover:border-none hover:px-4 hover:bg-primary-gold hover:text-white transition-all duration-[.5s] "
                                key={category.id}
                            >
                                <div
                                    className="w-fit"
                                >
                                    {category.name}
                                </div>
                                <div
                                    className="w-fit"
                                >
                                    ({category.number})
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
                
            <div
                className="p-8 border border-dashed border-gray-300 mb-8"
            >
                <PostSnippet 
                    posts={posts}
                    heading="recent posts"
                    width="lg:w-full"
                    border="border-b border-dashed border-primary-gold pb-4"
                    bold="font-bold"
                />
            </div>

            <div
                className="p-8 border border-dashed border-gray-300 mb-8"
            >
                <div
                    className="capitalize text-xl lg:text-2xl pb-4 mb-8 text-secondary-black-200 font-oswald font-bold border-b border-dashed border-primary-gold"
                >
                    popular tags
                </div>
                <div
                    className="flex flex-wrap gap-2 items-center font-roboto text-secondary-black-100"
                >
                    {
                        tags.map((tag) =>(
                            <div
                                className="w-fit p-4 bg-tertiary-blue cursor-pointer uppercase hover:bg-primary-gold hover:text-white transition-all duration-[.5s]"
                                key={tag.id}
                            >
                                {tag.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div
                className="p-8 border border-dashed border-gray-300 mb-8"
            >
                <div
                    className="capitalize text-xl lg:text-2xl pb-4 mb-8 text-secondary-black-200 font-oswald font-bold border-b border-dashed border-primary-gold"
                >
                    ads
                </div>
                <div
                    className="relative bg-secondary-black-100 cursor-pointer"
                >
                    <Image 
                        src={heroImage}
                        alt="Image"
                        className="w-full"
                    />
                    <div
                        className="absolute w-[80%] p-2 bottom-[10%] left-[10%] bg-primary-gold opacity-80 text-white"
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Sapiente saepe.
                    </div>
                </div>
            </div>
        </>
    )
}