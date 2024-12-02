import React, { createContext, useState, useContext, ReactNode } from 'react';
import { PersonalInfoSchema } from '@/lib/validations'

interface ResumeData {
    personalInfo: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        country: string;
        city: string;
        postalCode: string;
        address: string;
    };
    experience: any[]; // We'll define this structure later
    education: any[]; // We'll define this structure later
    skills: string[];
    // Add more sections as needed
}

interface ResumeContextType {
    resumeData: ResumeData;
    updateResumeData: (section: keyof ResumeData, data: any) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    personalInfoSchema: typeof PersonalInfoSchema;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [resumeData, setResumeData] = useState<ResumeData>({
        personalInfo: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            country: "",
            city: "",
            postalCode: "",
            address: "",
        },
        experience: [],
        education: [],
        skills: [],
    });
    const [currentPage, setCurrentPage] = useState(0);

    const updateResumeData = (section: keyof ResumeData, data: any) => {
        setResumeData(prev => ({ ...prev, [section]: data }));
    };

    return (
        <ResumeContext.Provider value={{ resumeData, updateResumeData, currentPage, setCurrentPage, personalInfoSchema: PersonalInfoSchema }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResumeContext = () => {
    const context = useContext(ResumeContext);
    if (context === undefined) {
        throw new Error('useResumeContext must be used within a ResumeProvider');
    }
    return context;
};
