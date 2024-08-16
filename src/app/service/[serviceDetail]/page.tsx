'use client';
import Breadcrumb from "@/app/component/breadcrumb";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import beardcut from '../../images/beardCut.jpg';
import normalHaircut from '../../images/normalHaircut.jpg';
import hairWash from '../../images/hairWash.jpg';
import hairpuump from '../../images/hairPump.jpg';
import Image, { StaticImageData } from "next/image";
import HeadAndPara from "@/app/component/headAndPara";
import ServiceSection from "@/app/component/service";

interface serviceDetailProp{
    params : {
        serviceDetail: string
    }
}

interface offer {
    name: string
    desc: string
    image: StaticImageData
    id: number
}

export default function ServiceDetail({params}: serviceDetailProp){
    const [serv, setServ] = useState<offer[] | null>(null);

    const offers1 = [
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut, id:1},
        {name: 'hair pump', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: hairpuump, id:2},
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut, id:3}
    ];

    const offers2 = [
        {name: 'hair clean', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: hairWash, id:4},
        {name: 'new beard cut', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: beardcut, id:5},
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut, id:6}
    ];

    useEffect(()=>{
        const getservice = ()=>{
            const combinedOffer = [...offers1, ...offers2];

           const matchingOffer = combinedOffer.find((offer)=>{
                return offer.id.toString() === params.serviceDetail;
            });
            
            if(matchingOffer){
                setServ([matchingOffer]);
            }
            
        }
        getservice();
    }, [])
    // useEffect(() => {
    //     const getservice = () => {
    //         const combinedOffers = [...offers1, ...offers2];
    //         const matchingOffer = combinedOffers.find(
    //             (offer) => offer.id.toString() === params.serviceDetail
    //         );
    //         if (matchingOffer) {
    //             setServ([matchingOffer]); // Wrapping in an array to match your existing map logic
    //         }
    //     };
    //     getservice();
    // }, [params.serviceDetail]);
    

    console.log(serv)
    return(
        <section
            className="overflow-hidden text-secondary-black-100"
        >
            <Breadcrumb title="service detail" />
            <section
                className="pt-24 pb-2 w-[100vw] px-8 lg:px-16"
            >
                {
                   serv?.map((ser, index)=>(
                    <div
                        key={index}
                        className="lg:w-[80%] mx-auto mb-[10%]"
                    >
                        <div
                            className="w-full"
                        >
                            <Image 
                                src={ser.image}
                                alt="Service Image"
                                className="w-full"
                            />
                        </div>
                        <div
                            className="lg:flex justify-between pt-4 items-start"
                        >
                            <div
                                className="lg:w-[20%] mb-4 lg:mb-0"
                            >
                                <h2
                                    className="font-bold font-oswald text-secondary-black-200"
                                >
                                    Price: $29
                                </h2>
                                <h2
                                    className="font-bold font-oswald mt-4 text-secondary-black-200"
                                >
                                    Review (5.00)
                                </h2>
                                <div
                                    className="text-primary-gold mt-4 flex gap-1"
                                >
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div
                                className="lg:w-[70%]"
                            >
                                <h1
                                    className="text-2xl capitalize text-secondary-black-200 font-oswald font-bold"
                                >
                                    {ser.name}
                                </h1>
                                <p
                                    className="mt-4"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Itaque, tempore, repudiandae distinctio placeat dignissimos
                                     dicta atque. Nisi, tenetur. Laudantium, praesentium eum 
                                     doloribus ipsam alias! Minus, enim, quaerat? Et consectetur 
                                     voluptate, commodi nihil minus assumenda facere ullam sequi, 
                                     eius, culpa id aliquid corporis, veniam fugit dignissimos 
                                     perspiciatis impedit perferendis error ut!


                                </p>
                            </div>
                        </div>
                    </div>
                   ))
                }
                <HeadAndPara 
                    head="other services"
                    para="Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum. Facilis iure rem corrupti laborum"
                />
                <ServiceSection
                    offers1={offers1}
                    offers2={offers2}
                    display="hidden"
                    parentWidth="lg:w-full"
                    childWidth="lg:w-[25%]" 
                />
            </section>
        </section>
    )
}