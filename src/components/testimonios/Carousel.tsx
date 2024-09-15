import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./carousel.css";
import { testimonios } from '../../data/testimonios';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import { Button } from '@nextui-org/react';


export const Carousel = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    return (
        <div className="h-fit embla pb-[10vh] text-white" ref={emblaRef}>
            <div className="mx-auto h-fit embla__container">

                {
                    testimonios.map((testimony, index) => (
                        <div className='embla__slide' key={index}>
                            <section className='w-full flex justify-between place-items-center'>

                                <article className='w-[50%] flex justify-center'>
                                    <img className='cel:h-[35vh] cel:w-full w-[60%] max-h-[80vh] h-[80vh]' src={testimony.before} />
                                </article>
                                <article className='w-[50%] flex justify-center'>
                                    <img className='cel:h-[35vh] cel:w-full max-h-[80vh] w-[60%] h-[80vh]' src={testimony.after} />
                                </article>

                            </section>
                        </div>
                    ))
                }
            </div>

            <div className="w-full h-fit py-[2vh] mt-[3vh] flex justify-between place-items-center">
                <h2 className="2xl:text-[2.3rem] cel:text-[1.2rem] text-[var(--light)] shadow-text text-center w-full text-[2rem] font-semibold tracking-[3px]">ANTES</h2>
                <h2 className="2xl:text-[2.3rem] cel:text-[1.2rem] text-[var(--light)] shadow-text text-center w-full text-[2rem] font-semibold tracking-[3px]">DESPUÉS</h2>
            </div>

            <div className='flex justify-center gap-x-4'>
                <Button isIconOnly className="2xl:transfrom 2xl:scale-[1.4] bg-transparent w-fit h-fit p-[2vh]  embla__prev" onClick={scrollPrev}>
                    <ArrowLeft />
                </Button>
                <Button isIconOnly className="2xl:transform 2xl:scale-[1.4] bg-transparent w-fit h-fit p-[2vh]  embla__prev" onClick={scrollNext}>
                    <ArrowRight />
                </Button>
            </div>

        </div>
    )
}

