import image1 from '../images/image1.jpg'; 
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import HeadAndPara from './headAndPara';

export default function Team(){
    const teams = [
        {image: image1, name: 'tom cooper', position: 'CEO', facebook: '', twitter: '', instagram: '', linkedin: '', id: 1},
        {image: image2, name: 'jon cooper', position: 'loctician', facebook: '', twitter: '', instagram: '', linkedin: '', id: 2},
        {image: image3, name: 'marlin jacks', position: 'nail technician', facebook: '', twitter: '', instagram: '', linkedin: '', id: 3},
        {image: image4, name: 'alvin rox', position: 'makeup artist', facebook: '', twitter: '', instagram: '', linkedin: '', id: 4}
    ];

    return(
        <section
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16"
        >
            <HeadAndPara 
                head='our experts'
                para='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur'
            />
            
            <div
                className="flex flex-wrap justify-center lg:justify-between items-center"
            >
                {
                    teams.map((team)=>(
                        <div
                            key={team.id}
                            className='w-full sm:w-[80%] lg:w-[22%] group mb-12 lg:mb-0'
                        >
                            <div
                                className='w-full h-[30vh] relative overflow-hidden'
                            >
                                <Image
                                    src={team.image}
                                    alt='Team photo'
                                    className='w-[95%] lg:w-[90%] h-full group-hover:scale-[1.3] group-hover:w-full transition-all duration-[.7s] linear'
                                />
                                <div
                                    className='absolute bottom-4 right-0 h-[90%] sm:h-[50%] lg:h-[90%] group-hover:bottom-0 transition-all duration-[.7s] linear p-4 lg:p-2 flex flex-col justify-between items-center bg-primary-gold opacity-80 border border-dashed border-gray-200'
                                >
                                    <Link
                                        href={team.facebook}
                                        className='text-xl'
                                    >
                                        <FaFacebookF />
                                    </Link>
                                    <Link
                                        href={team.twitter}
                                        className='text-xl'
                                    >
                                        <FaTwitter />
                                    </Link>
                                    <Link
                                        href={team.instagram}
                                        className='text-xl'
                                    >
                                        <FaInstagram />
                                    </Link>
                                    <Link
                                        href={team.linkedin}
                                        className='text-xl'
                                    >
                                        <FaLinkedin />
                                    </Link>
                                </div>
                            </div>
                            
                            <div
                                className='w-full border border-dashed border-gray-300 text-center py-4'
                            >
                                <h1
                                    className='capitalize text-xl font-oswald font-bold text-secondary-black-200 mb-4'
                                >
                                    {team.name}
                                </h1>
                                <p
                                    className='capitalize'
                                >
                                    {team.position}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}