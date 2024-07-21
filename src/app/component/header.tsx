'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import {AnimatePresence, motion} from 'framer-motion';

export default function Header(){
    const [scrolY, setScrolY] = useState(0);
    const [width, setWidth] = useState(0);
    const [toggleMenu, setToggle] = useState(false);
  
    const handleToggle = () =>{
        setToggle(!toggleMenu);
    }

    const handleScroll = () =>{
            setScrolY(window.scrollY);
    }

    const handleWidth = ()=>{
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        handleScroll();
        handleWidth();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleWidth);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleWidth);
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
            className={`${scrolY > 70 ? "text-secondary-black-200 bg-white" : 'bg-transparent text-white'} font-roboto z-10 text-2xl lg:text-[17px] fixed top-0 left-0 xl:text-2xl flex justify-between items-center py-4 px-8 lg:py-0 lg:px-20 w-[100vw] h-[12vh] lg:h-[17vh] border-b border-gray-500`}
        >
            <div className="w-[10%] text-4xl text-primary-gold uppercase text-center">
                Blizcut
            </div>

            <IoMenu 
                className="lg:hidden text-4xl"
                onClick={handleToggle}
            />

            {width < 1024 ? 
            <AnimatePresence>
            <motion.nav 
                className={`${toggleMenu ? 'block' : 'hidden'} lg:flex justify-between lg:w-[60%] w-[100vw] items-center h-[100vh] lg:h-20 fixed text-secondary-black-200 lg:text-inherit bg-tertiary-blue lg:bg-transparent lg:static top-0 right-0`}
                animate={toggleMenu ? {opacity: 1, x:0} : {opacity: 0, x:'100%'}}
                transition={{duration: .5}}
            >
                <IoMdClose 
                    className={`lg:hidden fixed top-4 right-4 text-secondary-black-200 text-4xl`}
                    onClick={handleToggle}
                />
            
                <ul 
                    className="lg:w-full w-fit lg:flex mx-auto lg:mx-0 justify-between lg:mt-0 mt-[20%] h-fit block items-center"
                >
                    {
                        navItems.map((navItem) => (
                            <li
                                className="text-center py-4 lg:py-0"
                            >
                                <Link 
                                    href={navItem.path}
                                    className={`lg:py-[6.3vh] py-4 px-2 hover:border-b-2 ${pathname === navItem.path ? 'border-b-2' : ''} border-primary-gold`}
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                
            </motion.nav></AnimatePresence> :
            <nav 
            className={`${toggleMenu ? 'block' : 'hidden'} lg:flex justify-between lg:w-[60%] w-[100vw] items-center h-[100vh] lg:h-20 fixed text-secondary-black-200 lg:text-inherit bg-tertiary-blue lg:bg-transparent lg:static top-0 right-0`}
            // initial={toggleMenu ? {opacity: 0, x:'100%'} : {opacity: 1, x:0}}
            // animate={!toggleMenu ? {opacity: 1, x:0} : {opacity: 0, x:'100%'}}
            // transition={{duration: 1}}
        >
            <IoMdClose 
                className={`lg:hidden fixed top-4 right-4 text-secondary-black-200 text-4xl`}
                onClick={handleToggle}
            />
        
            <ul 
                className="lg:w-full w-fit lg:flex mx-auto lg:mx-0 justify-between lg:mt-0 mt-[40%] h-fit block items-center"
            >
                {
                    navItems.map((navItem) => (
                        <li
                            className="text-center py-4 lg:py-0"
                        >
                            <Link 
                                href={navItem.path}
                                className={`lg:py-[6.3vh] py-4 px-2 hover:border-b-2 ${pathname === navItem.path ? 'border-b-2' : ''} border-primary-gold`}
                            >
                                {navItem.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            
        </nav>}
        </motion.header>
        </>
    )
}