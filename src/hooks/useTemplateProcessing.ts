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

        const prompt =
            `Analyze the uploaded file to determine if it matches a resume format. If it is a resume, extract its content into a structured JSON format. Ensure that all content, including any text with background colors (e.g., headers or highlighted sections), is included. Utilize OCR or text recognition techniques to handle complex PDF layouts or styles. The JSON should follow this structure:
            personalInformation: Include fields such as name, contact, and email. Make sure to extract text even if it is part of a header or styled with background colors.
            education: An array of objects, each containing institution, degree, location, and year.
            experience: An array of objects with jobTitle, company, location, duration, and responsibilities.
            projects: An array of objects with name, technologies, and description.
            skills: A list of categorized skills, including languages, frameworks, tools, and libraries.
            Ensure the extraction process preserves the hierarchy and logical groupings of the information, capturing details across various text styles, layouts, and formats. 
            Return the result in structured JSON format:
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
            setResult(prev => ({
                ...prev,
                processingError: error instanceof Error ? error.message : 'An unknown error occurred'
            }))
        } finally {
            setResult(prev => ({ ...prev, isProcessing: false }))
        }
    }, [])

    return { ...result, processDocument }
}



// import { openaiModel } from '@/lib/config'
// import { useState, useCallback } from 'react'
// import { generateObject } from 'ai'
// import { z } from 'zod'

// interface ProcessingResult {
//     isComplete: boolean
//     isProcessing: boolean
//     categoryData: any | null
//     processingError: string | null
// }

// const resumeSchema = z.object({
//     personalInformation: z.object({
//         name: z.string(),
//         contact: z.string(),
//         email: z.string(),
//     }),
//     education: z.array(z.object({
//         institution: z.string(),
//         degree: z.string(),
//         location: z.string(),
//         year: z.string(),
//     })),
//     experience: z.array(z.object({
//         jobTitle: z.string(),
//         company: z.string(),
//         location: z.string(),
//         duration: z.string(),
//         responsibilities: z.array(z.string()),
//     })),
//     projects: z.array(z.object({
//         name: z.string(),
//         technologies: z.array(z.string()),
//         description: z.string(),
//     })),
//     skills: z.object({
//         languages: z.array(z.string()),
//         frameworks: z.array(z.string()),
//         tools: z.array(z.string()),
//         libraries: z.array(z.string()),
//     }),
// })

// export function useTemplateProcessing() {
//     const [result, setResult] = useState<ProcessingResult>({
//         isComplete: false,
//         isProcessing: false,
//         categoryData: null,
//         processingError: null,
//     })

//     const processDocument = useCallback(async (fileContent: string | ArrayBuffer) => {
//         if (!fileContent) {
//             setResult(prev => ({ ...prev, processingError: "No file content provided" }))
//             return
//         }

//         setResult(prev => ({ ...prev, isProcessing: true, processingError: null, categoryData: null }))
//         try {
//             const base64Content = Buffer.from(fileContent.toString()).toString('base64')

//             const { object: categorizedContent } = await generateObject({
//                 model: openaiModel,
//                 messages: [
//                     {
//                         role: 'user',
//                         content: [
//                             {
//                                 type: 'text',
//                                 text: "Analyze the uploaded file to determine if it matches a resume format. If it is a resume, extract its content into a structured JSON format. Ensure that all content, including any text with background colors (e.g., headers or highlighted sections), is included. Utilize OCR or text recognition techniques to handle complex PDF layouts or styles.",
//                             },
//                             {
//                                 type: 'file',
//                                 data: base64Content,
//                                 mimeType: 'application/pdf',
//                             },
//                         ],
//                     },
//                 ],
//                 schema: resumeSchema,
//             })
//             const allEmpty = Object.values(categorizedContent)
//                 .every(value =>
//                     value === null ||
//                     (Array.isArray(value) && value.length === 0) ||
//                     (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0)
//                 )

//             if (allEmpty) {
//                 throw new Error('No relevant information found in the document')
//             }

//             setResult(prev => ({ ...prev, categoryData: categorizedContent, isComplete: true }))
//         } catch (error) {
//             setResult(prev => ({
//                 ...prev,
//                 processingError: error instanceof Error ? error.message : 'An unknown error occurred'
//             }))
//         } finally {
//             setResult(prev => ({ ...prev, isProcessing: false }))
//         }
//     }, [])

//     return { ...result, processDocument }
// }

