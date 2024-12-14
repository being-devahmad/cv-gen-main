import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Check, AlertCircle } from 'lucide-react';
import { useTemplateProcessing } from '@/hooks/useTemplateProcessing';
import { templates } from '@/data/templates';

interface ContinuousTemplatePreviewProps {
    fileName: string;
    fileContent: string | ArrayBuffer | null;
}

export const TemplatePreview: React.FC<ContinuousTemplatePreviewProps> = ({ fileName, fileContent }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { isComplete, isProcessing, categoryData, processingError, processDocument } = useTemplateProcessing();
    const [progress, setProgress] = useState(0);
    const [applyCount, setApplyCount] = useState(0);

    const getTemplateImage = useCallback((templateId?: string) => {
        const template = templates.find((temp) => temp.id === templateId);
        return template?.image || "/placeholder.svg?height=240&width=320";
    }, []);

    const applyTemplate = useCallback(() => {
        if (fileContent) {
            processDocument(fileContent);
            setApplyCount((prev) => prev + 1);
        }
    }, [fileContent, processDocument]);

    useEffect(() => {
        applyTemplate();
    }, [applyTemplate]);

    useEffect(() => {
        if (categoryData) {
            navigate(`/select/${id}/start`, { state: { categoryData } });
        } else if (isComplete) {
            const timer = setTimeout(() => {
                applyTemplate();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [categoryData, id, navigate, isComplete, applyTemplate]);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = Math.min(oldProgress + Math.random() * 10, 100);
                if (newProgress === 100) {
                    clearInterval(timer);
                }
                return newProgress;
            });
        }, 500);

        return () => clearInterval(timer);
    }, [applyCount]);

    if (processingError) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
                >
                    <div className="flex items-center justify-center mb-4">
                        <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>
                    <h2 className="text-xl font-semibold text-center text-red-600 mb-2">Error Processing Document</h2>
                    {/* <p className="text-center text-gray-600">{processingError}</p> */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                        <div className="flex items-center">
                            <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                            <p className="text-sm text-red-700">
                                {processingError}
                            </p>
                        </div>
                        <p className="mt-2 text-sm text-red-700">
                            We're experiencing high demand. Please try again in a few minutes or contact support if the issue persists.
                        </p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            >
                <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                        <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">{fileName}</h2>
                        <p className="text-sm text-gray-500">Applying template... (Attempt {applyCount})</p>
                    </div>
                </div>

                <div className="relative mb-4">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        />
                    </div>
                    {progress === 100 && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2"
                        >
                            <div className="bg-green-500 rounded-full p-1">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                        </motion.div>
                    )}
                </div>

                <p className="text-center text-sm font-medium text-gray-600 mb-4">
                    {isProcessing ? "Processing your document..." : "Preparing for next attempt..."}
                </p>

                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <img
                        src={getTemplateImage(id)}
                        alt="Resume template preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white text-center"
                        >
                            <h3 className="text-xl font-bold mb-2">Your New Resume</h3>
                            <p className="text-sm">Customizing and optimizing...</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

