import React, { useState, useRef } from 'react';
import { ResumeProvider } from '@/hooks/useResume';
import { Azurill } from '@/templates/azurill';
import { Chikorita } from '@/templates/chikorita';
import { Nosepass } from '@/templates/nosepass';
import { useLocation, useParams } from 'react-router-dom';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { toast } from '@/hooks/use-toast';
import { Onyx } from '@/templates/onyx';
import Bronzor from '@/templates/bronzor';
import Pikachu from '@/templates/pikachu';
import TemplateArtboard from '@/components/resumeDashboard/TemplateArtboard';
import { Button } from '@/components/ui/button';
import { ResumeForm } from '@/components/forms/ResumeForm/ResumeForm';
// import generatePDF, { Resolution, Margin } from 'react-to-pdf';

const ResumeStart: React.FC = () => {
    const { id } = useParams()
    console.log("TemplateId------->", id)


    const location = useLocation();
    const { categoryData } = location.state || {};

    console.log("Received categoryData:", categoryData);

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
        // skills: []
    });

    // const handleDownload = async () => {
    //     if (resumeRef.current) {
    //         try {
    //             const canvas = await html2canvas(resumeRef.current, {
    //                 scale: 2,
    //                 useCORS: true,
    //                 logging: false,
    //             });
    //             const imgData = canvas.toDataURL('image/png');
    //             const pdf = new jsPDF('p', 'mm', 'a4');
    //             const pdfWidth = pdf.internal.pageSize.getWidth();
    //             const pdfHeight = pdf.internal.pageSize.getHeight();
    //             const imgWidth = canvas.width;
    //             const imgHeight = canvas.height;
    //             const ratio = pdfWidth / imgWidth;
    //             const totalPages = Math.ceil(imgHeight * ratio / pdfHeight);

    //             // First page
    //             pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, 0, '', 'FAST');

    //             // Add subsequent pages if needed
    //             for (let i = 1; i < totalPages; i++) {
    //                 pdf.addPage();
    //                 pdf.addImage(
    //                     imgData,
    //                     'PNG',
    //                     0,
    //                     -(pdfHeight * i),
    //                     pdfWidth,
    //                     0,
    //                     '',
    //                     'FAST'
    //                 );
    //             }

    //             pdf.save('resume.pdf');
    //             toast({
    //                 title: "Success",
    //                 description: "Your resume has been downloaded as a PDF.",
    //             });
    //         } catch (error) {
    //             console.error('Error generating PDF:', error);
    //             toast({
    //                 title: "Error",
    //                 description: "Failed to download resume. Please try again.",
    //                 variant: "destructive",
    //             });
    //         }
    //     }
    // };


    // const handleDownload = async () => {
    //     if (resumeRef.current) {
    //         try {
    //             const canvas = await html2canvas(resumeRef.current, {
    //                 scale: 2,
    //                 useCORS: true,
    //                 logging: false,
    //                 width: 210 * 2.83465, // Convert mm to pixels at 72 DPI
    //                 height: 297 * 2.83465,
    //             });

    //             const imgData = canvas.toDataURL('image/png');
    //             const pdf = new jsPDF({
    //                 orientation: 'portrait',
    //                 unit: 'mm',
    //                 format: 'a4',
    //             });

    //             pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
    //             pdf.save('resume.pdf');

    //             toast({
    //                 title: "Success",
    //                 description: "Your resume has been downloaded as a PDF.",
    //             });
    //         } catch (error) {
    //             console.error('Error generating PDF:', error);
    //             toast({
    //                 title: "Error",
    //                 description: "Failed to download resume. Please try again.",
    //                 variant: "destructive",
    //             });
    //         }
    //     }
    // };


    const renderTemplate = () => {
        switch (id) {
            case '1':
                return <Azurill allData={allData} />;
            case '2':
                return <Chikorita allData={allData} />;
            case '3':
                return <Nosepass allData={allData} />;
            case '4':
                return <Onyx allData={allData} />;
            case '5':
                return <Bronzor allData={allData} />;
            case '6':
                return <Pikachu allData={allData} />;
            default:
                return <Azurill allData={allData} />;
        }
    };


    return (

        <>



            <ResumeProvider>
                <div className="flex flex-col lg:flex-row min-h-screen">
                    <div className="w-full lg:w-1/2 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
                        <ResumeForm allData={allData} setAllData={setAllData} categoryData={categoryData} />
                    </div>
                    <div className="w-full lg:w-1/2 overflow-y-auto flex flex-col">
                        {/* <div className="sticky top-0 z-10 bg-white p-4 shadow-md"> */}
                        <Button
                            // onClick={handleDownload}
                            // onClick={}
                            className="w-full bg-gray-400 text-white px-4 py-2 rounded-md font-semibold
                            hover:bg-gray-500 transition-colors"
                        >
                            Download as PDF
                        </Button>
                        {/* </div> */}
                        {/* <div className="flex-grow overflow-hidden flex justify-center">
                            <div className="w-full max-w-[1200px] ">
                                <TemplateArtboard>
                                    <div ref={resumeRef} id="content-id">
                                        {renderTemplate()}
                                    </div>
                                </TemplateArtboard>
                            </div>
                        </div> */}

                        <div className="flex-grow overflow-hidden flex justify-center">
                            <div className="w-full max-w-[1200px] ">
                                <TemplateArtboard>
                                    <div ref={resumeRef}>
                                        {renderTemplate()}
                                    </div>
                                </TemplateArtboard>
                            </div>
                        </div>
                    </div>
                </div>
            </ResumeProvider>
        </>

    );
};

export default ResumeStart;

