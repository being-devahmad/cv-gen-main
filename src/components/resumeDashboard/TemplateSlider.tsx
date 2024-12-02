import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCreative } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Template } from '@/types'
import { TemplateCard } from './TemplateCard'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

interface TemplateSliderProps {
    templates: Template[]
}

export function TemplateSlider({ templates }: TemplateSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    return (
        <div className="relative px-4 md:px-16 overflow-hidden">
            <button
                ref={prevRef}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous template"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <Swiper
                modules={[Navigation, EffectCreative]}
                spaceBetween={30}
                slidesPerView="auto"
                centeredSlides
                loop
                effect="creative"
                creativeEffect={{
                    prev: {
                        translate: ['-120%', 0, -500],
                        rotate: [0, 0, -15],
                    },
                    next: {
                        translate: ['120%', 0, -500],
                        rotate: [0, 0, 15],
                    },
                    // Add this to ensure the active slide has no rotation
                    // active: {
                    //     translate: [0, 0, 0],
                    //     rotate: [0, 0, 0],
                    // },
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="!overflow-visible py-16"
            >
                {templates.map((template) => (
                    <SwiperSlide key={template.id} className="!w-[300px]">
                        {({ isActive }) => (
                            <div className={`transition-all duration-300 ease-in-out ${isActive ? 'scale-110' : 'scale-90 opacity-50'}`}>
                                <TemplateCard
                                    template={template}
                                    isActive={isActive}
                                />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                ref={nextRef}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next template"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}

