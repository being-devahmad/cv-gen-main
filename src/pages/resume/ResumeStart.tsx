import ResumeForm from '@/components/forms/ResumeForm/ResumeForm';
import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
import { ResumeProvider } from '@/hooks/useResume';
import React from 'react';

const ResumeStart: React.FC = () => {
    return (
        <ResumeProvider>
            <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
                <div className="w-full lg:w-1/2 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
                    <ResumeForm />
                </div>
                <div className="w-full lg:w-1/2 overflow-y-auto">
                    <PreviewSection />
                </div>
            </div>
        </ResumeProvider>
    );
};

export default ResumeStart;

