import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { Check } from 'lucide-react'
import { Image } from "@nextui-org/react"

interface TemplatePreviewProps {
    fileName: string
}

export function TemplatePreview({ fileName }: TemplatePreviewProps) {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer)
                    setIsComplete(true)
                    return 100
                }
                return prevProgress + 10
            })
        }, 500)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl space-y-8">
                <div className="relative w-full aspect-[210/297] bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=1000&width=707"
                        alt="Resume template preview"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="w-full max-w-md space-y-4">
                            {isComplete ? (
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="rounded-full bg-green-500 p-2">
                                        <Check className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-xl font-semibold text-center text-green-500">
                                        Applied
                                    </h2>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-xl font-semibold text-center text-blue-500">
                                        Applying Template...
                                    </h2>
                                    <Progress value={progress} className="w-full" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-600">
                    {isComplete ? "Template applied successfully!" : `Applying template to ${fileName}`}
                </p>
            </div>
        </div>
    )
}

