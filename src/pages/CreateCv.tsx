import { ProgressDots } from "@/components/resumeDashboard/ProgressDots"
import { TemplateSlider } from "@/components/resumeDashboard/TemplateSlider"
import { Button } from "@/components/ui/button"


const templates = [
  {
    id: '1',
    name: 'Riga',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Rotterdam',
    badge: 'new' as const,
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Budapest',
    badge: 'most-selected' as const,
    image: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'Chicago',
    badge: 'recommended' as const,
    image: '/placeholder.svg',
  },
  {
    id: '5',
    name: 'Perth',
    image: '/placeholder.svg',
  },
  {
    id: '6',
    name: 'Riga',
    image: '/placeholder.svg',
  },
  {
    id: '7',
    name: 'Rotterdam',
    badge: 'new' as const,
    image: '/placeholder.svg',
  },
  {
    id: '8',
    name: 'Budapest',
    badge: 'most-selected' as const,
    image: '/placeholder.svg',
  },
  {
    id: '9',
    name: 'Chicago',
    badge: 'recommended' as const,
    image: '/placeholder.svg',
  },
  {
    id: '10',
    name: 'Perth',
    image: '/placeholder.svg',
  },
]

export default function CreateCv() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Select Your Template
        </h1>
        <ProgressDots />
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4">
            To get started, select a resume template below.
          </p>
          <Button variant="outline">Skip this step</Button>
        </div>
        <TemplateSlider templates={templates} />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

