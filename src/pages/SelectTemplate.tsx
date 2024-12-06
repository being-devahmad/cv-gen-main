import { useState } from 'react'
import { ProgressDots } from "@/components/resumeDashboard/ProgressDots"
import { TemplateSlider } from "@/components/resumeDashboard/TemplateSlider"
import { Button } from "@/components/ui/button"
import templateOne from "../assets/images/resumeOne.png"
import templateTwo from "../assets/images/resumeTwo.png"
import templateThree from "../assets/images/resumeThree.png"
import templateFour from "../assets/images/resumeFour.png"
import { Template } from "@/types"
import { useNavigate } from 'react-router-dom'

const templates = [
  {
    id: '1',
    name: 'Riga',
    image: templateOne,
  },
  {
    id: '2',
    name: 'Rotterdam',
    badge: 'new' as const,
    image: templateTwo,
  },
  {
    id: '3',
    name: 'Budapest',
    badge: 'most-selected' as const,
    image: templateThree,
  },
  {
    id: '4',
    name: 'Chicago',
    badge: 'recommended' as const,
    image: templateFour,
  },
  {
    id: '5',
    name: 'Perth',
    image: templateTwo,
  },
  // ... (other templates)
]

const SelectTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const navigate = useNavigate()

  const handleCardSelect = (template: Template) => {
    setSelectedTemplate(template)
    console.log('Selected template:', template)
    // Handle selection logic (e.g., navigate to next step)
  }

  const handleSkip = () => {
    navigate('/select/1')
  }


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Choose Your Perfect Template
        </h1>
        <ProgressDots />
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Browse through our collection of professionally designed templates.
            Select the one that best showcases your skills and experience.
          </p>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors" onClick={handleSkip}>
            Skip this step
          </Button>
        </div>
        <TemplateSlider templates={templates} onCardSelect={handleCardSelect} />
        {selectedTemplate && (
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              Selected Template: {selectedTemplate.name}
            </p>
            <Button
              variant="default"
              className="mt-4"
              onClick={() => {
                // Handle navigation to the next step
                console.log('Proceeding with template:', selectedTemplate)
              }}
            >
              Continue with Selected Template
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}

export default SelectTemplate

