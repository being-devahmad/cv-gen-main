import { useState, useCallback } from 'react'
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

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `Analyze and categorize the following resume content into a structured JSON format. Use the following guidelines:
1. Main categories should be: "Personal Information", "Education", "Work Experience", "Projects", "Skills", and any other relevant sections found in the resume.
2. For "Personal Information", create key-value pairs for each piece of information (e.g., "Name", "Phone", "Email").
3. For "Education", "Work Experience", and "Projects", create an array of objects. Each object should represent one entry and contain key-value pairs for details like "Institution/Company", "Degree/Position", "Duration", "Location", etc.
4. For "Work Experience" and "Projects", include a "Description" key with an array of bullet points as its value.
5. For "Skills", create subcategories as needed (e.g., "Languages", "Frameworks", "Tools") with arrays of skills as values.
6. Ensure all standard resume categories are included, using empty arrays or objects for missing information.
7. Remove any PDF-specific formatting artifacts (e.g., "Tj" at the end of lines).
Parse and structure the following resume content:

${fileContent}`
                            }]
                        }]
                    })
                }
            )

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            const rawText = data.candidates[0].content.parts[0].text

            const jsonMatch = rawText.match(/\{[\s\S]*\}/)
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
            setResult(prev => ({ ...prev, processingError: error.message }))
        } finally {
            setResult(prev => ({ ...prev, isProcessing: false }))
        }
    }, [])

    return { ...result, processDocument }
}

