import React, { useState, useRef } from 'react';
import { ResumeForm2 } from '@/components/forms/ResumeForm/ResumeForm2';
import { ResumeProvider } from '@/hooks/useResume';
import { Azurill } from '@/templates/azurill';
import { Chikorita } from '@/templates/chikorita';
import { Nosepass } from '@/templates/nosepass';
import { useLocation, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@nextui-org/button';

const ResumeStart: React.FC = () => {
    const { id } = useParams()
    console.log("TemplateId------->", id)

    const location = useLocation();
    const { categoryData } = location.state || {}; // Ensure fallback to empty object

    console.log("Received categoryData:", categoryData); // Debugging log

    const resumeRef = useRef<HTMLDivElement>(null);

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

    const handleDownload = async () => {
        if (resumeRef.current) {
            try {
                const canvas = await html2canvas(resumeRef.current, {
                    scale: 2,
                    useCORS: true,
                    logging: false,
                });
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = pdfWidth / imgWidth;
                const totalPages = Math.ceil(imgHeight * ratio / pdfHeight);

                // First page
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, 0, '', 'FAST');

                // Add subsequent pages if needed
                for (let i = 1; i < totalPages; i++) {
                    pdf.addPage();
                    pdf.addImage(
                        imgData,
                        'PNG',
                        0,
                        -(pdfHeight * i),
                        pdfWidth,
                        0,
                        '',
                        'FAST'
                    );
                }

                pdf.save('resume.pdf');
            } catch (error) {
                console.error('Error generating PDF:', error);
            }
        }
    };

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
                    <ResumeForm2 allData={allData} setAllData={setAllData} categoryData={categoryData} />
                </div>
                <div className="w-full lg:w-1/2 overflow-y-auto flex flex-col">
                    <div className="sticky top-0 z-10 bg-white p-4 shadow-md">
                        <Button
                            onClick={handleDownload}
                            className="w-full bg-gray-400 text-white px-4 py-2 rounded-md font-semibold
                            hover:bg-gray-400 transition-colors"
                        >
                            Download as PDF
                        </Button>
                    </div>
                    <div ref={resumeRef} className="flex-grow p-4">
                        {renderTemplate()}
                    </div>
                </div>
            </div>
        </ResumeProvider>
    );
};

export default ResumeStart;

