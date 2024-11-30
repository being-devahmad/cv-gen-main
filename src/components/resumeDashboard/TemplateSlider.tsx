'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import { Template } from '@/types'
import { TemplateCard } from './TemplateCard'

interface TemplateSliderProps {
    templates: Template[]
}

export function TemplateSlider({ templates }: TemplateSliderProps) {
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    return (
        <div className="relative px-16 overflow-hidden border border-red-700 ">
            <button
                ref={prevRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView="auto"
                centeredSlides
                loop
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                className="!overflow-visible"
            >
                {templates.map((template) => (
                    <SwiperSlide key={template.id} className="!w-auto">
                        <TemplateCard
                            template={template}
                            isActive={template.city === 'Budapest'}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                ref={nextRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}

