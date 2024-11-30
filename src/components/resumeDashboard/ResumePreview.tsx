import React from 'react';
import { Maximize2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';

export const PreviewSection: React.FC = () => {
    const { resumeData } = useResume();
    const { contact } = resumeData;

    return (
        <div className="w-full h-full bg-gray-200 p-8 overflow-auto">
            <div className="max-w-[21cm] mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4 flex justify-between items-center border-b border-gray-300">
                    <h2 className="text-lg font-semibold text-gray-700">Resume Preview</h2>
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        <Maximize2 className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-8 min-h-[29.7cm] border-8 border-white outline outline-1 outline-gray-300">
                    <div className="flex justify-between items-start">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800">
                            {contact.firstName} {contact.lastName}
                        </h1>
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                            {contact.firstName && contact.lastName ?
                                `${contact.firstName[0]}${contact.lastName[0]}` : 'CV'}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-medium mb-4 text-gray-700 border-b border-gray-300 pb-2">CONTACT</h2>
                        <div className="space-y-2 text-gray-600">
                            {contact.phone && <p>{contact.phone}</p>}
                            {contact.email && <p>{contact.email}</p>}
                            {contact.city && contact.postalCode && (
                                <p>{contact.city}, {contact.postalCode}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

