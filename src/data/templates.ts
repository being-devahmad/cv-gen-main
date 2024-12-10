import templateOne from "@/assets/images/resumeOne.png"
import templateTwo from "@/assets/images/resumeTwo.png"
import templateThree from "@/assets/images/resumeThree.png"
import templateFour from "@/assets/images/resumeFour.png"


interface Template {
    id: string
    name: string
    image: string
    popularity: 'most' | 'recommended' | null
}

export const templates: Template[] = [
    { id: '1', name: 'Azurill', image: templateOne, popularity: null },
    { id: '2', name: 'Chikorita', image: templateTwo, popularity: null },
    { id: '3', name: 'Nosepass', image: templateThree, popularity: 'most' },
    { id: '4', name: 'Chicago', image: templateFour, popularity: 'recommended' },
    { id: '5', name: 'Perth', image: templateTwo, popularity: null },
]