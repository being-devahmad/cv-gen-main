// import ResumeForm2 from '@/components/forms/ResumeForm/ResumeForm2';
// // import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
// // import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
// import { ResumeProvider } from '@/hooks/useResume';
// // import Chikorita from '@/templates/chikorita';
// import { Azurill } from '@/templates/azurill';
// // import { Chikorita } from '@/templates/chikorita';
// import React from 'react';

// const ResumeStart: React.FC = () => {
//     return (
//         <ResumeProvider>
//             <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
//                 <div className="w-full lg:w-1/2 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
//                     <ResumeForm2 />
//                 </div>
//                 <div className="w-full lg:w-1/2 overflow-y-auto">
//                     {/* <PreviewSection /> */}
//                     <Azurill />
//                     {/* <Chikorita /> */}
//                 </div>
//             </div>
//         </ResumeProvider>
//     );
// };

// export default ResumeStart;



import ResumeForm2 from '@/components/forms/ResumeForm/ResumeForm2';
// import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
// import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
import { ResumeProvider } from '@/hooks/useResume';
// import Azurill from '@/templates/azurill';
import Chikorita from '@/templates/chikorita';
// import { Azurill } from '@/templates/azurill';
// import { Chikorita } from '@/templates/chikorita';
import React from 'react';

const ResumeStart: React.FC = () => {
    return (
        <ResumeProvider>
            <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
                <div className="w-full lg:w-1/2 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
                    <ResumeForm2 />
                </div>
                <div className="w-full lg:w-1/2 overflow-y-auto">
                    {/* <PreviewSection /> */}
                    {/* <Azurill /> */}
                    <Chikorita />
                </div>
            </div>
        </ResumeProvider>
    );
};

export default ResumeStart;