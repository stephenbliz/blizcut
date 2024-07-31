'use client';
import { StaticImageData } from "next/image";
import { useState } from "react";
import Breadcrumb from "../component/breadcrumb";
import Galery from "../component/galery";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image8 from '../images/image8.jpg';

interface galsProp {
    tag: string[]
    image: StaticImageData
    id: number
}

const galeries: galsProp[] = [
      {tag: ['normal haircut', 'hair clean'], id: 1, image: image1},
      {tag: ['hair clean', 'hair pump'], id: 2, image: image2},
      {tag: ['normal haircut', 'hair pump'], id: 3, image: image3},
      {tag: ['normal haircut', 'hair clean',], id: 4, image: image5},
      {tag: ['normal haircut', 'hair pump'], id: 5, image: image8},
      {tag: ['normal haircut', 'hair pump'], id: 6, image: image4},
  ]


export default function Gallery(){
    const [galleries, setGalleries] = useState<galsProp[]>(galeries);
    const [activeTag, setActiveTag] = useState<string>('all');

    const tags = [
        {name: 'all', link: () => filteredGalleries('all')},
        {name: 'normal haircut', link: () =>  filteredGalleries('normal haircut')},
        {name: 'hair pump', link: () =>  filteredGalleries('hair pump')},
        {name: 'hair clean', link: () =>  filteredGalleries('hair clean')},
    ]

    const filteredGalleries = (tag: string) => {
        setActiveTag(tag);
  
        if(tag === 'all'){
          setGalleries(galeries)
        }else{
          const filtered = () => {
            return galeries.filter((galery) => {
              return galery.tag.includes(tag)
            })
          }
          setGalleries(filtered)
        }
      }
    return(
        <section
            className="overflow-hidden"
        >
            <Breadcrumb title='gallery' />
            <section
                className="pt-24 pb-2 w-[100vw] px-8 lg:px-16"
            >
                <Galery 
                    galleries={galleries}
                    tags={tags}
                    activeTag={activeTag}
                />
            </section>
        </section>
    )
}