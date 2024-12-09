import { useState, useEffect } from "react"
import { Image } from "@nextui-org/react"
import { useTemplateProcessing } from "@/hooks/useTemplateProcessing"
import { AIProcessingDialog } from "./AIProcessingDialog"

interface TemplatePreviewProps {
    fileName: string
    fileContent: string | ArrayBuffer | null
}

export function TemplatePreview({ fileName, fileContent }: TemplatePreviewProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const { isComplete, isProcessing, categoryData, processingError, processDocument } = useTemplateProcessing()

    useEffect(() => {
        if (fileContent) {
            setIsDialogOpen(true)
            processDocument(fileContent)
        }
    }, [fileContent, processDocument])

    const handleRetry = () => {
        processDocument(fileContent)
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
                        <h2 className="text-2xl font-bold text-center">
                            {fileName}
                        </h2>
                    </div>
                </div>

                <AIProcessingDialog
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    isComplete={isComplete}
                    isProcessing={isProcessing}
                    processingError={processingError}
                    onRetry={handleRetry}
                />

                {categoryData && (
                    <div className="mt-4 p-4 bg-white rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Categorized Document Data:</h3>
                        <pre className="whitespace-pre-wrap text-sm">
                            {JSON.stringify(categoryData, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    )
}

