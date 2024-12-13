import { useState, useEffect } from "react"
import { Image, Progress } from "@nextui-org/react"
import { useTemplateProcessing } from "@/hooks/useTemplateProcessing"
import { Check } from 'lucide-react'
import { useNavigate, useParams } from "react-router-dom"

interface TemplatePreviewProps {
    fileName: string
    fileContent: string | ArrayBuffer | null
}

export function TemplatePreview({ fileName, fileContent }: TemplatePreviewProps) {
    const { id } = useParams()
    const navigate = useNavigate()
    const { isComplete, isProcessing, categoryData, processingError, processDocument } = useTemplateProcessing()

    useEffect(() => {
        if (fileContent) {
            processDocument(fileContent)
        }
    }, [fileContent, processDocument])

    useEffect(() => {
        if (categoryData) {
            console.log("Navigating with categoryData:", categoryData)
            navigate(`/select/${id}/start`, { state: { categoryData } })
        }
    }, [categoryData, id, navigate])

    if (processingError) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center">
                <div className="w-full max-w-xl space-y-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-center text-red-500 mb-4">Error Processing Document</h2>
                        <p className="text-center">{processingError}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-xl space-y-8">
                <div className="relative w-full aspect-[210/297] bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=1000&width=707"
                        alt="Resume template preview"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {isComplete ? (
                            <div className="flex flex-col items-center space-y-2">
                                <div className="rounded-full bg-green-500 p-2">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-xl font-semibold text-center text-green-500">
                                    Template Applied
                                </h2>
                            </div>
                        ) : (
                            <div className="w-full max-w-xs">
                                <h2 className="text-xl font-semibold text-center text-blue-500 mb-2">
                                    Applying Template...
                                </h2>
                                <Progress value={isProcessing ? 50 : 100} className="w-full" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

