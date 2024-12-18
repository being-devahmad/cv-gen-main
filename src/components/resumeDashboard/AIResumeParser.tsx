import { AIChatSession } from '@/services/AIModal'
import React, { useEffect } from 'react'

interface AIFileParserProps {
    fileContent: string | ArrayBuffer | null
    onParseComplete: (data: any) => void
    onParseError: (error: string) => void
    onParsingProgress: (progress: number) => void
}

export const AIFileParser: React.FC<AIFileParserProps> = ({
    fileContent,
    onParseComplete,
    onParseError,
    onParsingProgress,
}) => {
    useEffect(() => {
        const parseResume = async () => {
            try {
                onParsingProgress(10)

                if (typeof fileContent !== 'string') {
                    throw new Error('File content must be a string')
                }

                onParsingProgress(30)

                const prompt = `Analyze the following resume content and extract its information into a structured JSON format. Include all content, even text with background colors (e.g., headers or highlighted sections). The JSON should follow this structure:
            {
                    "name": "",
                    "contact": "",
                    "email": ""
                    "city":"",
                    "country:"",
                    "jobTitle":"",
                "education": [
                    {
                        "institution": "",
                        "degree": "",
                        "location": "",
                        "year": ""
                    }
                ],
                "experience": [
                    {
                        "jobTitle": "",
                        "company": "",
                        "location": "",
                        "duration": "",
                        "responsibilities": []
                    }
                ],
                "projects": [
                    {
                        "name": "",
                        "technologies": [],
                        "description": ""
                    }
                ],
                "skills": {
                    "languages": [],
                    "frameworks": [],
                    "tools": [],
                    "libraries": []
                }
            }
            Ensure the extraction process preserves the hierarchy and logical groupings of the information, capturing details across various text styles, layouts, and formats. 
            Return only the JSON object without any additional text or explanation.
            Resume content:
            ${fileContent}`

                onParsingProgress(50)

                const result = await AIChatSession.sendMessage(prompt)
                console.log("result-->", result)
                const response = await result.response
                console.log("response-->", response)
                const text = response.text()
                console.log("text-->", text)


                onParsingProgress(80)

                const parsedData = JSON.parse(text)
                onParseComplete(parsedData)
            } catch (error) {
                console.log("error-->", error)
                onParseError(error instanceof Error ? error.message : 'An unknown error occurred while parsing the resume')
            }
        }

        if (fileContent) {
            parseResume()
        }
    }, [fileContent, onParseComplete, onParseError, onParsingProgress])

    return null
}

