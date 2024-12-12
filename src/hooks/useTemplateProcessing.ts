import { useState, useCallback } from 'react'
import { GEMINI_API_KEY } from '@/lib/config'

interface ProcessingResult {
    isComplete: boolean
    isProcessing: boolean
    categoryData: any | null
    processingError: string | null
}

const MAX_RETRIES = 3
const RETRY_DELAY = 1000 // 1 second

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

        const fetchWithRetry = async (retryCount = 0): Promise<any> => {
            try {
                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{
                                    //                                 text: `Analyze and categorize the following resume content into a structured JSON format. Use the following guidelines:
                                    // 1. Main categories should be: "Personal Information", "Education", "Work Experience", "Projects", "Skills", and any other relevant sections found in the resume.
                                    // 2. For "Personal Information", create key-value pairs for each piece of information (e.g., "Name", "Phone", "Email").
                                    // 3. For "Education", "Work Experience", and "Projects", create an array of objects. Each object should represent one entry and contain key-value pairs for details like "Institution/Company", "Degree/Position", "Duration", "Location", etc.
                                    // 4. For "Work Experience" and "Projects", include a "Description" key with an array of bullet points as its value.
                                    // 5. For "Skills", create subcategories as needed (e.g., "Languages", "Frameworks", "Tools") with arrays of skills as values.
                                    // 6. Ensure all standard resume categories are included, using empty arrays or objects for missing information.
                                    // 7. Remove any PDF-specific formatting artifacts (e.g., "Tj" at the end of lines).
                                    // 8. The object names should be in camel case just like personalInformation etc.
                                    // Parse and structure the following resume content:

                                    // ${fileContent}`
                                    text: `Analyze the uploaded file to determine if it matches a resume format. If it is a resume, extract its content into a structured JSON format. The JSON should include key-value pairs such as personalInformation, education, experience, projects, and skills. Each section should adhere to the following structure:
personalInformation should include fields like name, contact, and email.
education should be an array of objects, each containing institution, degree, location, and year.
experience should be an array of objects with jobTitle, company, location, duration, and responsibilities.
projects should be an array of objects with name, technologies, and description.
skills should list languages, frameworks, tools, and libraries.
Return the result in JSON format, preserving the hierarchy and logical groupings of the information.
Parse and structure the following resume content:
                                    ${fileContent}`
                                }]
                            }]
                        })
                    }
                )

                if (response.status === 429 && retryCount < MAX_RETRIES) {
                    await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)))
                    return fetchWithRetry(retryCount + 1)
                }

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                return await response.json()
            } catch (error) {
                if (error instanceof Error && error.message.includes('429') && retryCount < MAX_RETRIES) {
                    await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)))
                    return fetchWithRetry(retryCount + 1)
                }
                throw error
            }
        }

        try {
            const data = await fetchWithRetry()
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
            setResult(prev => ({ ...prev, processingError: error instanceof Error ? error.message : 'An unknown error occurred' }))
        } finally {
            setResult(prev => ({ ...prev, isProcessing: false }))
        }
    }, [])

    return { ...result, processDocument }
}

