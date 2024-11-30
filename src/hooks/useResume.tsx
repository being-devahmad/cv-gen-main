import { FormStep, ResumeData } from '@/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResumeContextType {
    currentStep: FormStep;
    setCurrentStep: (step: FormStep) => void;
    resumeData: ResumeData;
    updateResumeData: (data: Partial<ResumeData>) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState<FormStep>('contact');
    const [resumeData, setResumeData] = useState<ResumeData>({
        contact: { firstName: '', lastName: '', city: '', postalCode: '', phone: '', email: '' },
        experience: [],
        education: [],
        skills: [],
        about: '',
    });

    const updateResumeData = (data: Partial<ResumeData>) => {
        setResumeData(prev => ({ ...prev, ...data }));
    };

    return (
        <ResumeContext.Provider value={{ currentStep, setCurrentStep, resumeData, updateResumeData }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (context === undefined) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
};

