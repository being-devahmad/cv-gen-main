// import React, { useState, useCallback } from 'react'
// import { motion } from 'framer-motion'
// import { FileText, AlertTriangle, Check, AlertCircle } from 'lucide-react'
// import { AIFileParser } from './AIResumeParser'

import { GoogleGenerativeAI } from "@google/generative-ai"
import { GoogleAIFileManager } from "@google/generative-ai/server"
import { useEffect } from "react"

// interface TemplatePreviewProps {
//     fileName: string
//     fileContent: string | ArrayBuffer | null
// }

// export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ fileName, fileContent }) => {
//     const [parsedResumeData, setParsedResumeData] = useState<any>(null)
//     const [parsingError, setParsingError] = useState<string | null>(null)
//     const [parsingProgress, setParsingProgress] = useState(0)

//     const handleParseComplete = useCallback((data: any) => {
//         setParsedResumeData(data)
//         setParsingProgress(100)
//     }, [])

//     const handleParseError = useCallback((error: string) => {
//         setParsingError(error)
//         setParsingProgress(0)
//     }, [])

//     const handleParsingProgress = useCallback((progress: number) => {
//         setParsingProgress(progress)
//     }, [])

//     if (parsingError) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-4 flex items-center justify-center">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
//                 >
//                     <div className="flex items-center justify-center mb-4">
//                         <AlertTriangle className="w-12 h-12 text-red-500" />
//                     </div>
//                     <h2 className="text-xl font-semibold text-center text-red-600 mb-2">Error Processing Document</h2>
//                     <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
//                         <div className="flex items-center">
//                             <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
//                         </div>
//                         <p className="mt-2 text-sm text-red-700">
//                             {parsingError || "We're experiencing high demand. Please try again in a few minutes or contact support if the issue persists."}
//                         </p>
//                     </div>
//                 </motion.div>
//             </div>
//         )
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
//             >
//                 <div className="flex items-center space-x-4 mb-6">
//                     <div className="bg-blue-100 rounded-full p-3">
//                         <FileText className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                         <h2 className="text-xl font-semibold text-gray-800">{fileName}</h2>
//                         <p className="text-sm text-gray-500">Processing your resume...</p>
//                     </div>
//                 </div>

//                 <div className="relative mb-4">
//                     <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
//                         <motion.div
//                             initial={{ width: 0 }}
//                             animate={{ width: `${parsingProgress}%` }}
//                             transition={{ duration: 0.5 }}
//                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//                         />
//                     </div>
//                     {parsingProgress === 100 && (
//                         <motion.div
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             className="absolute right-0 top-1/2 transform -translate-y-1/2"
//                         >
//                             <div className="bg-green-500 rounded-full p-1">
//                                 <Check className="w-4 h-4 text-white" />
//                             </div>
//                         </motion.div>
//                     )}
//                 </div>

//                 <p className="text-center text-sm font-medium text-gray-600 mb-4">
//                     {parsingProgress < 100 ? "Analyzing your resume..." : "Resume analysis complete!"}
//                 </p>

//                 {parsedResumeData && (
//                     <div className="mt-6">
//                         <h3 className="text-lg font-semibold text-gray-800 mb-2">Parsed Resume Data:</h3>
//                         <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-60 text-sm">
//                             {JSON.stringify(parsedResumeData, null, 2)}
//                         </pre>
//                     </div>
//                 )}

//                 <AIFileParser
//                     fileContent={fileContent}
//                     onParseComplete={handleParseComplete}
//                     onParseError={handleParseError}
//                     onParsingProgress={handleParsingProgress}
//                 />
//             </motion.div>
//         </div>
//     )
// }



interface TemplatePreviewProps {
    fileName: string
    fileContent: string | ArrayBuffer | null
}



export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ fileName, fileContent }) => {

    console.log("fileName-->", fileName)
    console.log("fileContent-->", fileContent)

    const readContentThroughAPI = async () => {
        // Initialize GoogleGenerativeAI with your API_KEY.
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
        // Initialize GoogleAIFileManager with your API_KEY.
        const fileManager = new GoogleAIFileManager(import.meta.env.VITE_GEMINI_KEY);

        const model = genAI.getGenerativeModel({
            // Choose a Gemini model.
            model: "gemini-1.5-flash",
        });

        // Upload the file and specify a display name.
        const uploadResponse = await fileManager.uploadFile("media/gemini.pdf", {
            mimeType: "application/pdf",
            displayName: "Gemini 1.5 PDF",
        });

        console.log("uploadedResponse-->", uploadResponse)

        // View the response.
        console.log(
            `Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`,
        );

        // Generate content using text and the URI reference for the uploaded file.
        const result = await model.generateContent([
            {
                fileData: {
                    mimeType: uploadResponse.file.mimeType,
                    fileUri: uploadResponse.file.uri,
                },
            },
            { text: "Can you summarize this document as a bulleted list?" },
        ]);

        // Output the generated text to the console
        console.log("test---->", result.response.text());

    }


    useEffect(() => {
        readContentThroughAPI()
    })

    return (
        <div>
            TemplatePreview
        </div>
    )
}

export default TemplatePreview
