import Azurill from "@/assets/images/azurill.png"
import Chikorita from "@/assets/images/chikorita.png"
import templateThree from "@/assets/images/resumeThree.png"
import templateFour from "@/assets/images/resumeFour.png"


interface Template {
    id: string
    name: string
    image: string
    popularity: 'most' | 'recommended' | null
}

export const templates: Template[] = [
    { id: '1', name: 'Azurill', image: Azurill, popularity: 'recommended' },
    { id: '2', name: 'Chikorita', image: Chikorita, popularity: "most" },
    { id: '3', name: 'Nosepass', image: templateThree, popularity: null },
    { id: '4', name: 'Onyx', image: templateFour, popularity: null },
    { id: '5', name: 'Perth', image: Chikorita, popularity: null },
]