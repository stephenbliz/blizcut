'use client';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image8 from '../images/image8.jpg';
import {motion, Variants, AnimatePresence, animate} from 'framer-motion';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const dropdownVariant: Variants = {
        initial: {
            height: '10%',
            visibility: 'hidden',
        },
        exit: {
            height: '10%',
            opacity: 0
        },
        animate: {
            height: '100%',
            visibility: 'visible',
            transition: {
                duration: .5,
            }
        }
    }

    const dropdownVariant2: Variants = {
        initial: {
            opacity: 0,
            transform: 'translateY(100%)'
        },
        animate: {
            opacity: 1,
            transform: 'translateY(250%)',
            transition: {
                delay: .3,
                duration: .5,
                type: 'spring',
                stiffness: 120
            }
        }
    }

    const modalVariant:Variants = {
        initial:{
            opacity: 0, 
            width: '2vw', 
            height: '2vh', 
            top: '40%', 
            left: '40%',
        },
        animate:{
            opacity: 1, 
            width: '100vw', 
            height: '100vh', 
            top: '0%', 
            left: '0%',
            transition:{duration: .5,}
        },             
    }

    const imageVariant:Variants = {
        initial: {
            // width: '5%',
            // height: '0%',
            scale: .8,
            rotateY: '120deg',
            opacity: 0
        },
        animate: {
            // width: '70%',
            // height: '70%',
            scale: 1,
            opacity: 1,
            rotateY: '0deg',
            transition: {
                duration: .2,
                // ease: 'easeOut'
                type: 'spring',
                stiffness: 120
            }
        },
        exit: {
            opacity: 0,
            y: 500,
            transition: {
                duration: .2
            }
        }
    }

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
    const pathname = usePathname();
    const [openModal, setOpenModal] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState<null | number>(null)
    const [galleries, setGalleries] = useState<galsProp[]>(galeries);
    const [activeTag, setActiveTag] = useState<string>('all');

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

    // const filteredGalleries = (tag: string) => {
    //   if(tag === 'all'){
    //     setGalleries(galeries);
    //   }else{
    //     const filtered = galeries.filter((gallery) => gallery.tag.includes(tag));
    //     setGalleries(filtered);
    //   }
    // }

    const tags = [
        {name: 'all', link: () => filteredGalleries('all')},
        {name: 'normal haircut', link: () =>  filteredGalleries('normal haircut')},
        {name: 'hair pump', link: () =>  filteredGalleries('hair pump')},
        {name: 'hair clean', link: () =>  filteredGalleries('hair clean')},
    ]

    const handleImageClick = (id:number)=>{
      setOpenModal(true);
      setSelectedImageId(id)
    }

    // const handlePrevClick = ()=> {
    //     setSelectedImageId(prev => prev === null || prev === 0 ? galleries.length - 1 : prev - 1)
    // }

    // const handleNextClick = ()=> {
    //     setSelectedImageId(prev => prev === null || prev === galleries.length - 1 ? 0 : prev + 1)
    // }

    const handlePrevClick = ()=> {
      setSelectedImageId(prev => {
          if (prev === null) return galleries.length - 1;
          return prev === 1 ? galleries.length : prev - 1;
      });
  }

  const handleNextClick = ()=> {
      setSelectedImageId(prev => {
          if (prev === null) return 0;
          return prev === galleries.length ? 1 : prev + 1;
      });
  }

    return(
        <section
          className="relative pt-24 pb-2 w-[100vw] px-8 lg:px-16"
        >
            <h1
                className="capitalize text-secondary-black-200 text-center font-bold text-3xl sm:text-5xl font-oswald mb-8"
            >
                awesome gallery
            </h1>
            <p
                className="text-center lg:w-[70%] mx-auto mb-12"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et tempore repudiandae quos temporibus saepe quaerat, quisquam,
                necessitatibus soluta eaque odio assumenda impedit quasi tenetur 
            </p>
            <ul
                className="lg:w-[70%] mb-16 mx-auto flex flex-wrap justify-center gap-4 items-center"
            >
                {
                    tags.map((tag, index) => (
                        <li
                            key={index}
                        >
                            <button
                                onClick={tag.link}
                                className={`${activeTag === tag.name ? 'bg-primary-gold text-white' : 'text-secondary-black-100 bg-none'} block px-6 py-2  border rounded-full border-dashed border-primary-gold capitalize text-secondary-black-100 hover:bg-primary-gold hover:text-white`}
                            >
                                {tag.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div
                className="flex flex-wrap justify-center lg:justify-between items-center"
            >
               {
                galleries.map((gallery)=>(
                    <AnimatePresence key={gallery.id}>
                        <motion.div
                            className="relative w-full mb-8 sm:w-[90%] lg:w-[30%] "
                            title="A nice hair cut from blizcut"
                            initial='initial'
                            whileHover='animate'
                            exit='initial'
                            onClick={()=> handleImageClick(gallery.id)}
                        >
                            <Image 
                                src={gallery.image}
                                alt="hair photos"
                                
                            />
                            <motion.div
                                className="invisible absolute w-full px-[45%] h-full bg-primary-gold opacity-70 top-0 left-0"
                                variants={dropdownVariant}
                            >
                                <motion.div
                                    className="translate-y-[250%] sm:translate-y-[300%] lg:translate-y-[250%] cursor-pointer"
                                    variants={dropdownVariant2}
                                >
                                    <FaSearch 
                                        className="text-white text-4xl sm:text-6xl lg:text-4xl text-center "
                                        onClick={()=> handleImageClick(gallery.id)}
                                    />
                                </motion.div>
                            

                            </motion.div>
                            
                        </motion.div>
                    </AnimatePresence>
                ))
               }
            </div>
            <AnimatePresence>
            {openModal && 
              <motion.div
                  className="fixed flex px-2 justify-between items-center z-30 w-[100vw] h-[100vh] top-0 left-0 bg-secondary-black-200"
                  initial='initial'
                  animate='animate'
                  variants={modalVariant}
                  exit='initial'
              >
                  <IoMdClose 
                      className={`fixed top-4 right-4 text-white text-4xl cursor-pointer`}
                      onClick={()=> setOpenModal(false)}
                  />
                  <div
                      className="w-[10%] text-gray-400 hover:text-white text-4xl cursor-pointer"
                      onClick={handlePrevClick}
                  >
                      <FaArrowLeft />
                  </div>
                  <AnimatePresence mode="wait">
                  <motion.div
                    className="h-fit lg:h-[70%] aspect-auto "
                    key={selectedImageId}
                    variants={imageVariant}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                  >
                      <Image 
                        src={galleries.find(g => g.id === selectedImageId)?.image || ''}
                          alt="photo galleries"
                          className="mb-8 w-full border-4 h-full border-white"
                      />
                      <p
                          className="text-center text-white mb-4"
                      >
                          Hair cut photo from blizcut
                      </p>
                  </motion.div>
                  </AnimatePresence>
                  <div
                      className="w-[10%] text-gray-400 hover:text-white text-4xl cursor-pointer"
                      onClick={handleNextClick}
                  >
                      <FaArrowRight />
                  </div>
              </motion.div>
            }
            </AnimatePresence>

        </section>
    )
}