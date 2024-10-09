'use client';
import {motion, Variants, AnimatePresence} from 'framer-motion';
import { galeryProp } from '../utils/type';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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
        scale: .8,
        rotateY: '120deg',
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        rotateY: '0deg',
        transition: {
            duration: .2,
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

export default function Galery({categories, galleries, activeTag}: galeryProp){
    const [openModal, setOpenModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<null | number>(null)

      const handleImageClick = (index:number)=>{
        setOpenModal(true);
        setSelectedImageIndex(index);
      }
  
      const handlePrevClick = ()=> {
        setSelectedImageIndex(prev => {
            if (prev === null) return 0;
            return (prev === 0) ? galleries.length - 1 : prev - 1;
        });
    }
  
    const handleNextClick = ()=> {
        setSelectedImageIndex(prev => {
            if (prev === null) return 0;
            return (prev === galleries.length - 1) ? 0 : prev + 1;
        });
    }

    return(
        <>
            <ul
                className="lg:w-[70%] mb-16 mx-auto flex flex-wrap justify-center gap-4 items-center"
            >
                {
                    categories?.map((category) => (
                        <li
                            key={category.id}
                        >
                            <button
                                onClick={category.link}
                                className={`${activeTag === category.name ? 'bg-primary-gold text-white' : 'text-secondary-black-100 bg-none'} block px-6 py-2  border rounded-full border-dashed border-primary-gold capitalize text-secondary-black-100 hover:bg-primary-gold hover:text-white`}
                            >
                                {category.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div
                className="flex flex-wrap justify-center lg:gap-[5%] items-center"
            >
               {
                galleries.map((gallery, index)=>(
                    <AnimatePresence key={gallery.id}>
                        <motion.div
                            className="relative w-full mb-8 sm:w-[90%] lg:w-[30%] "
                            title="A nice hair cut from blizcut"
                            initial='initial'
                            whileHover='animate'
                            exit='initial'
                            onClick={()=> handleImageClick(index)}
                        >
                            <img 
                                src={gallery.image.url}
                                alt={gallery.image.alt}
                                
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
                                        onClick={()=> handleImageClick(index)}
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
                    key={selectedImageIndex}
                    variants={imageVariant}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                  >
                      <img 
                        src={galleries[selectedImageIndex!]?.image.url || ''}
                        alt={galleries[selectedImageIndex!]?.image.alt || ''}
                        className="mb-8 w-full border-4 h-full border-white"
                      />
                      <p
                          className="text-center text-white mb-4 capitalize"
                      >
                          {galleries[selectedImageIndex!].title}
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
        </>
    )
}