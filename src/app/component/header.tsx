'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion';

export default function Header(){
    const [scrolY, setScrolY] = useState(0);

    const handleScroll = () =>{
            setScrolY(window.scrollY);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const pathname = usePathname();
    
    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Service', path: '/service'},
        {name: 'Gallery', path: '/gallery'},
        {name: 'Blog', path: '/blog'},
        {name: 'Contact', path: '/contact'},
    ]

    return(
        <>
        <motion.header 
            className={`${scrolY < 70 && 'hidden'} bg-white font-roboto text-secondary-black-200 text-md fixed top-0 left-0 xl:text-2xl flex justify-between items-center py-4 px-8 lg:py-0 lg:px-20 w-full h-[12vh] lg:h-[17vh] border-b border-gray-500`}
            initial={{opacity: 0, y: '-20px'}}
            whileInView={{opacity: 1, y: 0}}
        >
            <div className="w-[10%] text-4xl text-primary-gold  text-center">
                Blizcut
            </div>

            <nav 
                className="hidden lg:flex justify-between lg:w-[60%] items-center h-full lg:h-20"
            >
            
                <ul 
                    className="w-full lg:flex justify-between inline-block items-center"
                >
                    {
                        navItems.map((navItem) => (
                            <li>
                                <Link 
                                    href={navItem.path}
                                    className={`lg:py-[6.3vh] px-2 hover:border-b-2 ${pathname === navItem.path ? 'border-b-2' : ''} border-primary-gold`}
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                
            </nav>
        </motion.header>

        <header 
            className={`bg-transparent font-roboto flex text-md xl:text-2xl justify-between items-center py-4 px-8 lg:py-0 lg:px-20 h-[12vh] lg:h-[17vh] w-full border-b border-gray-500`}
        >
            <div className="w-[10%] text-4xl text-primary-gold">
                Blizcut
            </div>

            <nav 
                className="text-white hidden lg:flex justify-between lg:w-[60%] items-center h-full lg:h-20"
            >
               
                <ul 
                    className="w-full h-full lg:flex justify-between inline-block items-center"
                >
                    {
                        navItems.map((navItem) => (
                            <li>
                                <Link 
                                    href={navItem.path}
                                    className={`lg:py-[6.3vh] px-2 hover:border-b-2 ${pathname === navItem.path ? 'border-b-2' : ''} border-primary-gold`}
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>  
            </nav>
        </header>
        </>
    )
}