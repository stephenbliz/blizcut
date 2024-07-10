import Header from './header';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function Hero(){
    return(
        <section
            className='lg:h-[100vh] h-fit relative flex flex-col items-center justify-center gap-8 lg:block '
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
              className='text-white lg:w-[70%] leading-relaxed px-[10vw] pt-[21vh] xl:pt-[30vh]'
            >
              <h1 
                className='font-oswald text-center lg:text-left hollow-text text-5xl lg:text-7xl mb-8 lg:mb-4 font-extrabold capitalize bg-clip-text webkit-bg-clip-text text-transparent'
              >
                smart haircut for mens
              </h1>
              <p
                className='mb-8 lg:mb-4 text-center lg:text-left'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Quisquam eos quasi inventore vero 
                 blanditiis ut, asperiores, nam 
              </p>
              <Link 
                href=''
                className='border mx-auto lg:mx-0 block w-fit capitalize border-primary-gold hover:border-white px-12 py-4 bg-primary-gold hover:bg-white hover:text-primary-gold'
              >
                contact us
              </Link>
            </div>
            <div
                className='lg:absolute left-0 top-[22%] xl:top-[30%] -z-10 flex lg:flex-col justify-center lg:justify-between items-center w-full lg:w-[7%] lg:h-[60%] xl:h-[40%]'
            >
                <div
                    className='rotate-90 hidden lg:block text-white'
                >
                    -------
                </div>
                <div
                    className='flex justify-center gap-6 items-center lg:flex-col'
                >
                    <a 
                        href=""
                        className='hover:text-primary-gold text-primary-gold text-2xl'
                    >
                        <FaFacebookF />
                    </a>
                    <a 
                        href=""
                        className='hover:text-primary-gold text-primary-gold text-2xl'
                    >
                        <FaTwitter />
                    </a>
                    <a 
                        href=""
                        className='hover:text-primary-gold text-primary-gold text-2xl'
                    >
                        <FaInstagram />
                    </a>
                    <a 
                        href=""
                        className='hover:text-primary-gold text-primary-gold text-2xl'
                    >
                        <FaLinkedin />
                    </a>
                </div>
                <div
                    className='rotate-90 hidden lg:block text-white'
                >
                    -------
                </div>
            </div>
            <img
                src='/assets/heroImage.png'
                alt='Image of a barber on his client'
                className='lg:absolute h-[300px] lg:h-[100%] xl:h-[70%] bottom-0 right-0 lg:-z-10'
            />
        </section>
    )
}