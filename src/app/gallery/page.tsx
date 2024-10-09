'use client';
import { useState, useEffect } from "react";
import Breadcrumb from "../component/breadcrumb";
import { getAllGallery, getSomeGallery } from "../utils/fetch";
import { gallery, categories } from "../utils/type";
import Galery from "../component/galery";


export default function Gallery(){
    const [galleries, setGalleries] = useState<gallery[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeTag, setActiveTag] = useState<string>('all');

    useEffect(()=>{
      const fetchAllGallery = async () => {
        try{
          const result = await getAllGallery();
          setGalleries(result);
        }
        catch(error){
          console.log(error)
          setError('Failed to fetch resource');
        }
        finally{
          setLoading(false);
        }
      }
      fetchAllGallery();
    }, [])

    const fetchAllGallery = async () => {
      try{
        const result = await getAllGallery();
        setGalleries(result)
        setActiveTag('all')
      }
      catch(error){
        console.log(error)
        setError('Failed to fetch resource');
      }
      finally{
        setLoading(false);
      }
    }

    const fetchSomeGallery = async (category: string) => {
      try{
        if(category){
          setActiveTag(category);
        }
        const result = await getSomeGallery(category);
        setGalleries(result);
      }
      catch(error){
        console.log(error)
        setError('Failed to fetch resource');
      }
      finally{
        setLoading(false);
      }
    }

    const categories: categories[] = [
      {name: 'all', link: () => fetchAllGallery(), id:1},
      {name: 'haircut', link: () =>  fetchSomeGallery('haircut'), id:2},
      {name: 'dreadlock', link: () =>  fetchSomeGallery('dreadlock'), id:3},
      {name: 'hair coloring', link: () =>  fetchSomeGallery('hair coloring'), id:4},
      {name: 'hair wash', link: () =>  fetchSomeGallery('hair wash'), id:5},
      {name: 'beard trim', link: () =>  fetchSomeGallery('beard trim'), id:6},
      {name: 'hair plating', link: () =>  fetchSomeGallery('hair plating'), id:7},
  ]

    return(
        <section
            className="overflow-hidden"
        >
            <Breadcrumb title='gallery' />
            <section
                className="pt-24 pb-2 w-[100vw] px-8 lg:px-16"
            >
              { loading &&
                <div
                  className="text-4xl font-bold text-center mt-16"
                >
                  Loading...
                </div>
              }

              { error &&
                <div
                  className="text-4xl font-bold text-center mt-16"
                >
                  {error}
                </div>
              }

              {!loading && !error &&
                <Galery 
                    galleries={galleries!}
                    categories={categories}
                    activeTag={activeTag}
                />
              }
            </section>
        </section>
    )
}