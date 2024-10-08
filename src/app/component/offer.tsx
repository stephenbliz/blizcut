'use client';
import HeadAndPara from './headAndPara';
import ServiceSection from './service';
import { getSixServices } from '../utils/fetch';
import {useState, useEffect} from 'react';
import { service } from '../utils/type';

export default function Offer(){

    const [services, setServices] = useState<null | service[]>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        const fetch = async ()=>{
            try{
                const result = await getSixServices();
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
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16 bg-tertiary-blue"
        >
            <HeadAndPara 
                head='what we offer'
                para='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur'
            />
            {isLoading && 
                <div
                    className="text-4xl font-bold text-center mt-8"
                >
                    Loading...
                </div>
            }

            {error && 
                <div
                    className="text-4xl font-bold text-center mt-8"
                >
                    {error}
                </div>
            }
            
            {!isLoading && !error && 
                <ServiceSection 
                    services={services!}
                    gap='gap-[40%]'
                    display='block'
                    parentWidth='lg:w-[100%]'
                    childWidth='lg:w-[30%]'
                />
            }
        </section>
    )
}