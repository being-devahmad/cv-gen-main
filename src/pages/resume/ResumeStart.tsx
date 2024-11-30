
import { ContactInformmation } from '@/components/forms/ResumeForm/ContactInfo';
import ResumeForm from '@/components/forms/ResumeForm/ResumeForm';
import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
import { ResumeProvider } from '@/hooks/useResume';
import React from 'react';

const ResumeStart: React.FC = () => {
    return (
        <ResumeProvider>
            <div className="flex">
                <div className="w-1/2 border-r border border-red-600 bg-[#F7F7FC]">
                    <ResumeForm />
                </div>
                <div className="w-1/2">
                    <PreviewSection />
                </div>
            </div>
        </ResumeProvider>
    );
};

export default ResumeStart;

