// import { useState } from 'react';
// import { Progress } from '@/components/ui/progress';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Experience from './Experience';
// import Education from './Education';
// import Skills from './Skills';
// import ContactInfo from './ContactIfo';

// const steps = [
//     { id: 'contact', title: 'Contact Info', component: ContactInfo },
//     { id: 'experience', title: 'Experience', component: Experience },
//     { id: 'education', title: 'Education', component: Education },
//     { id: 'skills', title: 'Skills', component: Skills },
// ];

// export default function ResumeForm() {
//     const [currentStep, setCurrentStep] = useState(0);
//     const [formData, setFormData] = useState({
//         contact: {} as Record<string, string>,
//         experience: [] as any[],
//         education: [] as any[],
//         skills: [] as any[],
//     });

//     const CurrentStepComponent = steps[currentStep]?.component;
//     const progress = ((currentStep + 1) / steps.length) * 100;

//     const handleNext = () => {
//         if (currentStep < steps.length - 1) {
//             setCurrentStep((prev) => prev + 1);
//         }
//     };

//     const handlePrev = () => {
//         if (currentStep > 0) {
//             setCurrentStep((prev) => prev - 1);
//         }
//     };

//     const updateFormData = (section: string, data: any) => {
//         setFormData((prev) => ({
//             ...prev,
//             [section]: data,
//         }));
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
//             <div className="container mx-auto px-4 py-8">
//                 <div className="max-w-4xl mx-auto">
//                     {/* Header */}
//                     <div className="mb-8 text-center">
//                         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
//                             Build Your Resume
//                         </h1>
//                         <p className="text-gray-600 dark:text-gray-300">
//                             Create a professional resume in minutes
//                         </p>
//                     </div>

//                     {/* Progress */}
//                     <div className="mb-8">
//                         <div className="flex justify-between mb-2">
//                             {steps.map((step, index) => (
//                                 <span
//                                     key={step.id}
//                                     className={`text-sm font-medium ${index <= currentStep
//                                         ? 'text-blue-600 dark:text-blue-400'
//                                         : 'text-gray-500 dark:text-gray-400'
//                                         }`}
//                                 >
//                                     {step.title}
//                                 </span>
//                             ))}
//                         </div>
//                         <Progress value={progress} className="h-2" />
//                     </div>

//                     {/* Form Content */}
//                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
//                         <ScrollArea className="h-[600px] pr-4">
//                             {CurrentStepComponent && (
//                                 <CurrentStepComponent
//                                     data={formData[steps[currentStep].id as keyof typeof formData] as any[]}
//                                     updateData={(data: any) =>
//                                         updateFormData(steps[currentStep].id, data)
//                                     }
//                                 />
//                             )}
//                         </ScrollArea>
//                     </div>

//                     {/* Navigation */}
//                     <div className="flex justify-between">
//                         <Button
//                             variant="outline"
//                             onClick={handlePrev}
//                             disabled={currentStep === 0}
//                         >
//                             <ChevronLeft className="mr-2 h-4 w-4" /> Previous
//                         </Button>
//                         <Button
//                             onClick={handleNext}
//                             disabled={currentStep === steps.length - 1}
//                         >
//                             Next <ChevronRight className="ml-2 h-4 w-4" />
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client'

import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import ContactInfo from './ContactIfo';

const steps = [
    { id: 'contact', title: 'Contact Info', component: ContactInfo },
    { id: 'experience', title: 'Experience', component: Experience },
    { id: 'education', title: 'Education', component: Education },
    { id: 'skills', title: 'Skills', component: Skills },
];

export default function ResumeForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        contact: {} as Record<string, string>,
        experience: [] as any[],
        education: [] as any[],
        skills: [] as any[],
    });

    const CurrentStepComponent = steps[currentStep]?.component;
    const progress = ((currentStep + 1) / steps.length) * 100;

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const updateFormData = (section: string, data: any) => {
        setFormData((prev) => ({
            ...prev,
            [section]: data,
        }));
    };
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 lg:p-8 ">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Build Your Resume
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Create a professional resume in minutes
                    </p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {steps.map((step, index) => (
                            <span
                                key={step.id}
                                className={`text-xs lg:text-sm font-medium ${index <= currentStep
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-500 dark:text-gray-400'
                                    }`}
                            >
                                {step.title}
                            </span>
                        ))}
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* Form Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 lg:p-6 mb-6 border">
                    <ScrollArea className="h-[calc(100vh-300px)] lg:h-[450px] pr-4 border border-black">
                        {CurrentStepComponent && (
                            <CurrentStepComponent
                                data={formData[steps[currentStep].id as keyof typeof formData] as any[]}
                                updateData={(data: any) =>
                                    updateFormData(steps[currentStep].id, data)
                                }
                                onNext={handleNext}
                            />
                        )}
                    </ScrollArea>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Button
                        onClick={handleNext}
                        disabled={currentStep === steps.length - 1}
                    >
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

