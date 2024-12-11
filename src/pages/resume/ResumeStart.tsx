import React, { useState } from 'react';
import { ResumeForm2 } from '@/components/forms/ResumeForm/ResumeForm2';
import { ResumeProvider } from '@/hooks/useResume';
import { Azurill } from '@/templates/azurill';
import { Chikorita } from '@/templates/chikorita';
import { Nosepass } from '@/templates/nosepass';
// import { Chicago } from '@/templates/chicago';
// import { Perth } from '@/templates/perth';
import { useParams } from 'react-router-dom';

const ResumeStart: React.FC = () => {
    const { id } = useParams()
    console.log("TemplateId------->", id)

    const [allData, setAllData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        postalCode: "",
        summary: "",
        experiences: [],
        education: [],
        projects: [],
        // skills: []
    });

    const renderTemplate = () => {
        switch (id) {
            case '1':
                return <Azurill allData={allData} />;
            case '2':
                return <Chikorita allData={allData} />;
            case '3':
                return <Nosepass allData={allData} />;
            default:
                return <Azurill allData={allData} />;
        }
    };

    return (
        <ResumeProvider>
            <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
                <div className="w-full lg:w-1/2 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
                    <ResumeForm2 allData={allData} setAllData={setAllData} />
                </div>
                <div className="w-full lg:w-1/2 overflow-y-auto">
                    {renderTemplate()}
                </div>
            </div>
        </ResumeProvider>
    );
};

export default ResumeStart;
