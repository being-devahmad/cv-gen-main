import { useState } from 'react'
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import templateOne from "../../assets/images/resumeOne.png"
import templateTwo from "../../assets/images/resumeTwo.png"
import templateThree from "../../assets/images/resumeThree.png"
import templateFour from "../../assets/images/resumeFour.png"

interface Template {
    id: string
    name: string
    image: string
    popularity: 'most' | 'recommended' | null
}

const templates: Template[] = [
    { id: '1', name: 'Riga', image: templateOne, popularity: null },
    { id: '2', name: 'Rotterdam', image: templateTwo, popularity: null },
    { id: '3', name: 'Budapest', image: templateThree, popularity: 'most' },
    { id: '4', name: 'Chicago', image: templateFour, popularity: 'recommended' },
    { id: '5', name: 'Perth', image: templateTwo, popularity: null },
]

export function TemplateSlider() {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % templates.length)
    }

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + templates.length) % templates.length)
    }

    const getAdjustedIndex = (index: number) => {
        return (index + templates.length) % templates.length
    }

    const handleSelectTemplate = (template: Template) => {
        console.log(`Selected template: ${template.name}`)
        // Add your logic for template selection here
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="relative">
                <Button
                    isIconOnly
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    onClick={prevSlide}
                >
                    <ChevronLeft />
                </Button>
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out slider-container"
                        style={{ transform: `translateX(-${(activeIndex * 33.33)}%)` }}
                    >
                        {templates.map((template, index) => (
                            <div
                                key={`${template.id}-${index}`}
                                className="w-1/3 flex-shrink-0 px-2 transition-all duration-300"
                            >
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card
                                            className={`w-full transition-all duration-300 ${getAdjustedIndex(index - activeIndex) === 1
                                                ? 'scale-105 shadow-lg'
                                                : 'scale-95 opacity-70'
                                                }`}
                                        >
                                            <CardBody className="p-0">
                                                <Image
                                                    src={template.image}
                                                    alt={template.name}
                                                    className="w-full h-[400px] object-contain"
                                                />
                                                {template.popularity && (
                                                    <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${template.popularity === 'most' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                                                        }`}>
                                                        {template.popularity === 'most' ? 'Most Selected' : 'Recommended'}
                                                    </div>
                                                )}
                                            </CardBody>
                                            <CardFooter className="justify-between items-center">
                                                <span>{template.name}</span>
                                                {getAdjustedIndex(index - activeIndex) === 1 && (
                                                    <Button
                                                        size="sm"
                                                        color={"primary"}
                                                        onClick={() => handleSelectTemplate(template)}
                                                    >
                                                        Select Template
                                                    </Button>
                                                )}
                                                <span className="text-gray-500 text-sm">WORD | PDF</span>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    isIconOnly
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    onClick={nextSlide}
                >
                    <ChevronRight />
                </Button>
            </div>
        </div >
    )
}

