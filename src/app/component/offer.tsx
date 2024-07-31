'use client';
import beardcut from '../images/beardCut.jpg';
import normalHaircut from '../images/normalHaircut.jpg';
import wallpaper from '../images/wallpaper.png';
import hairWash from '../images/hairWash.jpg';
import hairpuump from '../images/hairPump.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeadAndPara from './headAndPara';
import ServiceSection from './service';

export default function Offer(){
    const offers1 = [
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut},
        {name: 'hair pump', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: hairpuump}
    ];

    const offers2 = [
        {name: 'hair clean', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: hairWash},
        {name: 'new beard cut', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: beardcut}
    ];

    return(
        <section
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16 bg-tertiary-blue"
        >
            <HeadAndPara 
                head='what we offer'
                para='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur'
            />
            
            <ServiceSection 
                offers1={offers1}
                offers2={offers2}
                display='block'
                parentWidth='lg:w-[25%]'
                childWidth='lg:w-full'
            />
        </section>
    )
}