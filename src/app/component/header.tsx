'use client'
import Link from "next/link";
import { useEffect, useState } from "react"

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
   
    if (scrolY > 70) {
        return (
            <header 
                className="bg-white font-roboto text-secondary-black-200 fixed flex justify-between items-center py-4 px-4 lg:py-0 w-full border-b border-gray-500"
            >
                <div className="w-[20%] text-primary-gold">
                    BarberLogo
                </div>

                <nav 
                    className="hidden lg:flex justify-between lg:w-[70%] items-center h-full lg:h-20"
                >
                
                    <ul 
                        className="w-full lg:flex justify-between inline-block items-center"
                    >
                        <li>
                            <Link 
                                className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                                href="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                                href="/service"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                                href="/gallery"
                            >
                                Gallery 
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                                href="/blog"
                            >
                                Blog 
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    
                </nav>
            </header>
        )
    }

    return(
        <header 
            className="bg-transparent font-roboto flex justify-between items-center py-4 px-4 lg:py-0 w-full border-b border-gray-500"
        >
            <div className="w-[20%] text-primary-gold">
                BarberLogo
            </div>

            <nav 
                className="text-white hidden lg:flex justify-between lg:w-[70%] items-center h-full lg:h-20"
            >
               
                <ul 
                    className="w-full lg:flex justify-between inline-block items-center"
                >
                    <li>
                        <Link 
                            className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                            href="/service"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                            href="/gallery"
                        >
                            Gallery 
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                            href="/blog"
                        >
                            Blog 
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="lg:py-[29px] px-2 hover:border-b-2 active:border-b-2 border-orange-500" 
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}