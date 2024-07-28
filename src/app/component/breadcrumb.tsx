import Header from "./header";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface propType{
    title: string
}

export default function Breadcrumb({title}:propType){
    return(
        <section
            className='lg:h-[100vh] h-[50vh] relative text-secondary-black-100'
        >
            <video 
                autoPlay
                loop
                muted
                className='absolute -z-20 top-0 left-0 h-full object-cover w-full'
                src='/assets/backgroundVideo.mp4'
            />
            <Header />
            <div
                className="w-[95%] sm:w-[70%] lg:w-[50%] border border-dashed border-gray-300 absolute top-[55%] left-[50%] -translate-x-[50%] -translate-y-[45%]"
            >
                <div
                    className="m-2 bg-white py-[5%]"
                >
                    <h1
                        className="text-4xl capitalize text-secondary-black-200 text-center font-bold font-oswald mb-8"
                    >
                        {title}
                    </h1>
                    <div
                        className="flex justify-center items-center gap-4 text-sm sm:text-lg"
                    >
                        <Link
                            href='/'
                            className="w-fit capitalize text-primary-gold "
                        >
                            home
                        </Link>
                        <FaArrowRightLong 
                            // className="text-lg"
                        />
                        <div
                            className="w-fit capitalize"
                        >
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}