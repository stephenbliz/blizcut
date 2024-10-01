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
import { serviceDetailProp, service } from "@/app/utils/type";
import { getServices } from "@/app/utils/fetch";


export default function ServiceDetail({params}: serviceDetailProp){
    const [services, setServices] = useState<service[] | null>(null);
    const [detail, setDetail] = useState<service | null>(null)
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(()=>{
        const fetchService = async()=>{
            try{
                const result = await getServices();
                setServices(result);
                const filteredResult = result?.find((r)=>{
                    return r.slug === params.serviceDetail;
                })
                setDetail(filteredResult!);
            }
            catch(error){
                console.log(error)
                setError('Could not fetch the resources');
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchService();
    }, [])

    return(
        <section
            className="overflow-hidden text-secondary-black-100"
        >
            <Breadcrumb title="service details" />
            {
                isLoading && 
                <div
                    className="text-4xl font-bold text-center mt-16"
                >
                    Loading...
                </div>
            }
            {
                error && 
                <div
                    className="text-4xl font-bold text-center mt-16"
                >
                    {error}
                </div>
            }
            <section
                className="pt-24 pb-2 w-[100vw] px-8 lg:px-16"
            >
                    <div
                        className="lg:w-[80%] mx-auto mb-[10%]"
                    >
                        <div
                            className="w-full"
                        >
                            <img 
                                src={detail?.featuredImage.url!}
                                alt={detail?.featuredImage.alt!}
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
                                    {detail?.price}
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
                                    {detail?.title}
                                </h1>
                                <p
                                    className="mt-4"
                                >
                                    {detail?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                
                
                <HeadAndPara 
                    head="other services"
                    para="Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum. Facilis iure rem corrupti laborum"
                />
                {!isLoading && <ServiceSection
                    services={services!}
                    gap="gap-[5%]"
                    display="hidden"
                    parentWidth="lg:w-full"
                    childWidth="lg:w-[30%]" 
                />}
            </section>
        </section>
    )
}