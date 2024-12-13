import { useState, useCallback } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { GEMINI_API_KEY } from '@/lib/config'

interface ProcessingResult {
    isComplete: boolean
    isProcessing: boolean
    categoryData: any | null
    processingError: string | null
}

export function useTemplateProcessing() {
    const [result, setResult] = useState<ProcessingResult>({
        isComplete: false,
        isProcessing: false,
        categoryData: null,
        processingError: null,
    })

    const processDocument = useCallback(async (fileContent: string | ArrayBuffer | null) => {
        if (!fileContent) {
            setResult(prev => ({ ...prev, processingError: "No file content provided" }))
            return
        }

        setResult(prev => ({ ...prev, isProcessing: true, processingError: null, categoryData: null }))

        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
        const model = genAI.getGenerativeModel({ model: "gemini-pro" })

        const prompt = `Analyze the uploaded file to determine if it matches a resume format. If it is a resume, extract its content into a structured JSON format. The JSON should include key-value pairs such as personalInformation, education, experience, projects, and skills. Each section should adhere to the following structure:
    personalInformation should include fields like name, contact, and email.
    education should be an array of objects, each containing institution, degree, location, and year.
    experience should be an array of objects with jobTitle, company, location, duration, and responsibilities.
    projects should be an array of objects with name, technologies, and description.
    skills should list languages, frameworks, tools, and libraries.
    Return the result in JSON format, preserving the hierarchy and logical groupings of the information.
    Parse and structure the following resume content:
    ${fileContent}`

        try {
            const result = await model.generateContent(prompt)
            const response = await result.response
            const text = response.text()

            const jsonMatch = text.match(/\{[\s\S]*\}/)
            if (jsonMatch) {
                const jsonString = jsonMatch[0]
                const categorizedContent = JSON.parse(jsonString)

                const allEmpty = Object.values(categorizedContent).every(value =>
                    value === "" || value === null ||
                    (Array.isArray(value) && value.length === 0) ||
                    (typeof value === 'object' && Object.keys(value).length === 0)
                )

                if (allEmpty) {
                    throw new Error('No relevant information found in the document')
                }

                setResult(prev => ({ ...prev, categoryData: categorizedContent, isComplete: true }))
            } else {
                throw new Error('Unable to extract valid JSON from the API response')
            }
        } catch (error) {
            setResult(prev => ({ ...prev, processingError: error instanceof Error ? error.message : 'An unknown error occurred' }))
        } finally {
            setResult(prev => ({ ...prev, isProcessing: false }))
        }
    }, [])

    return { ...result, processDocument }
}

