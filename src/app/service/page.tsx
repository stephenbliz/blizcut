'use client';
import Breadcrumb from "../component/breadcrumb";
import ServiceSection from "../component/service";
import { getServices } from "../utils/fetch";
import { service } from "../utils/type";
import { useEffect, useState } from "react";



export default function Services(){
    const [services, setServices] = useState<null | service[]>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        const fetch = async ()=>{
            try{
                const result = await getServices();
                setServices(result);
            }
            catch(error){
                console.error(error);
                setError('Unable to fetch');
            }
            finally{
                setIsLoading(false);
            }
            
        }
        fetch();
    }, [])

   return(
    <section
        className="overflow-hidden"
    >
        <Breadcrumb title='service' />
        <section
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16"
        >
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
            <ServiceSection 
                services={services!}
                gap="gap-[5%]"
                display="hidden"
                parentWidth="lg:w-full"
                childWidth="lg:w-[30%]"
            />
        </section>
        
    </section>
   )
}