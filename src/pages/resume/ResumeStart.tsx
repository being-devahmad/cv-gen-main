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




// import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
// import { PreviewSection } from '@/components/resumeDashboard/ResumePreview';
import { ResumeForm2 } from '@/components/forms/ResumeForm/ResumeForm2';
import { ResumeForm2 } from '@/components/forms/ResumeForm/ResumeForm2';
import { ResumeProvider } from '@/hooks/useResume';
import { Azurill } from '@/templates/azurill';
// import Azurill from '@/templates/azurill';
import Chikorita from '@/templates/chikorita';
import { Nosepass } from '@/templates/nosepass';
// import { Azurill } from '@/templates/azurill';
// import { Chikorita } from '@/templates/chikorita';
import React, { useState } from 'react';

const ResumeStart: React.FC = () => {
      // Manage allData state here
  const [allData, setAllData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    postal_code: "",
    description: "",
    experience: [],
    education: [],
  });
    return (
        <ResumeProvider>
            <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
                <div className="w-full lg:w-1/2 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
                    <ResumeForm2 allData={allData} setAllData={setAllData}/>
                </div>
                <div className="w-full lg:w-1/2 overflow-y-auto">
                    {/* <PreviewSection /> */}
                    <Azurill allData={allData} />
                    {/* <Chikorita /> */}
                    <Nosepass/>
                </div>
            </div>
        </ResumeProvider>
    );
};

export default ResumeStart;