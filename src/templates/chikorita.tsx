// import React, { useRef } from "react";
// const Header = ({ allData }: { allData: { firstName: string, lastName: string, jobTitle: string } }) => {
//   const { firstName, lastName, jobTitle } = allData;

//   return (
//     <div className="bg-slate-800 text-white">
//       {/* <div className="p-8">
//         <Image
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
//           alt="Profile"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto"
//         />
//       </div> */}
//       <div className="p-8 ">
//         <div className="flex flex-col gap-1">
//           <h1 className="text-4xl font-bold text-white">{`${firstName} ${lastName}`}</h1>
//           <p className="text-sm text-white">{jobTitle} </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Contact = ({ allData }: { allData: { phone: string, email: string, city: string, postalCode: string, country: string } }) => {
//   const { phone, email, city, postalCode, country } = allData;
//   return (
//     <div className="bg-gray-100 p-8">
//       <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">CONTACT</h2>
//       <div className="space-y-2 text-sm">
//         <div className="flex items-center gap-2">
//           <i className="ph ph-phone" />
//           <span>{phone}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <i className="ph ph-envelope" />
//           <span>{email}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <i className="ph ph-map-pin" />
//           <span>{`${city}, ${postalCode}, ${country}`}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Profile = ({ allData }: { allData: { summary: string } }) => {
//   const { summary } = allData;
//   return (
//     <div className="p-8">
//       <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">PROFILE</h2>
//       <p className="text-sm leading-relaxed">{summary}</p>
//     </div>
//   );
// };

// const Experience = ({ allData }: { allData: { experiences: any[] } }) => {
//   const { experiences } = allData;

//   return (
//     <div className="p-8">
//       <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-8">WORK EXPERIENCE</h2>
//       <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
//         {experiences.map((exp, index) => {
//           const { company, startDate, endDate, title, description, location } = exp;
//           return (
//             <div key={index} className="relative">
//               <div className="absolute left-[-34px] top-0 w-4 h-4 bg-slate-800 rounded-full" />
//               <div className="flex justify-between items-start mb-2">
//                 <div>
//                   <h3 className="font-bold text-lg">{title}</h3>
//                   <p className="text-gray-600">{company}</p>
//                   <p className="text-gray-600">{location}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-0.5">
//                 <span className="text-sm text-gray-600">{startDate}</span>
//                 <span>-</span>
//                 <span className="text-sm text-gray-600">{endDate ? endDate : "present"}</span>
//               </div>
//               <ul className="list-disc ml-4 space-y-2">
//                 {description}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Education = ({ allData }: { allData: { education: any[] } }) => {
//   const { education } = allData;

//   return (
//     <div className="p-8">
//       <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-8">EDUCATION</h2>
//       <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
//         {education.map((edu, index) => {
//           const { degree, startDate, endDate, organization } = edu;
//           return (
//             <div key={index} className="relative">
//               <div className="absolute left-[-34px] top-0 w-4 h-4 bg-slate-800 rounded-full" />
//               <div className="flex justify-between items-start mb-2">
//                 <div>
//                   <h3 className="font-bold text-lg">{degree}</h3>
//                   <p className="text-gray-600">{organization}</p>
//                 </div>
//                 <div className="flex items-center gap-0.5">
//                   <span className="text-sm text-gray-600">{startDate}</span>
//                   <span className="text-sm text-gray-600">-</span>
//                   <span className="text-sm text-gray-600">{endDate}</span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Skills = ({ allData }: { allData: { skills: (string | { category: string; items: string[] })[] } }) => {
//   const { skills } = allData;

//   const renderSkillItem = (item: string | { category: string; items: string[] }) => {
//     if (typeof item === 'string') {
//       return <li className="ml-4">{item}</li>;
//     } else if (typeof item === 'object' && item !== null) {
//       return (
//         <li>
//           {item.items.length > 0 && <h3 className="font-semibold">{item.category}</h3>}
//           <ul className="list-disc list-inside">
//             {Array.isArray(item.items) ? item.items.map((subItem, index) => (
//               <li key={index} className="ml-4">{subItem}</li>
//             )) : null}
//           </ul>
//         </li>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="bg-gray-100 p-8">
//       <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">SKILLS</h2>
//       <ul className="space-y-2">
//         {Array.isArray(skills) ? skills.map((skill, index) => (
//           <React.Fragment key={index}>
//             {renderSkillItem(skill)}
//           </React.Fragment>
//         )) : null}
//       </ul>
//     </div>
//   );
// };

// export const Chikorita = ({ allData }: { allData: any }) => {
//   const resumeRef = useRef(null);

//   return (
//     <div ref={resumeRef} className="max-w-[1000px] mx-auto shadow-xl">
//       <Header allData={allData} />
//       <div className="grid grid-cols-[300px_1fr]">
//         <div>
//           <Contact allData={allData} />
//           <Skills allData={allData} />
//         </div>
//         <div>
//           <Profile allData={allData} />
//           <Experience allData={allData} />
//           <Education allData={allData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chikorita;




import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import React, { useRef } from "react";
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Header = ({ allData }: { allData: { firstName: string, lastName: string, jobTitle: string } }) => {
  const { firstName, lastName, jobTitle } = allData;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-8 rounded-t-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">{`${firstName} ${lastName}`}</h1>
        <p className="text-xl text-blue-100">{jobTitle}</p>
      </div>
    </div>
  );
};

const Contact = ({ allData }: { allData: { phone: string, email: string, city: string, postalCode: string, country: string } }) => {
  const { phone, email, city, postalCode, country } = allData;
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">CONTACT</h2>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <PhoneIcon className="h-5 w-5 text-blue-600" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <EnvelopeOpenIcon className="h-5 w-5 text-blue-600" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPinIcon className="h-5 w-5 text-blue-600" />
          <span>{`${city}, ${postalCode}, ${country}`}</span>
        </div>
      </div>
    </div>
  );
};

const Profile = ({ allData }: { allData: { summary: string } }) => {
  const { summary } = allData;
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">PROFILE</h2>
      <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
    </div>
  );
};

const Experience = ({ allData }: { allData: { experiences: any[] } }) => {
  const { experiences } = allData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-8">WORK EXPERIENCE</h2>
      <div className="relative border-l-2 border-blue-300 pl-7 space-y-12">
        {experiences.map((exp, index) => {
          const { company, startDate, endDate, title, description, location } = exp;
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{title}</h3>
                  <p className="text-gray-600 italic">{company} , {location} </p>
                </div>
                <div className="text-sm text-gray-500">
                  {startDate} - {endDate ? endDate : "present"}
                </div>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-gray-700">
                {description}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Education = ({ allData }: { allData: { education: any[] } }) => {
  const { education } = allData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-8">EDUCATION</h2>
      <div className="relative border-l-2 border-blue-300 pl-7 space-y-12">
        {education.map((edu, index) => {
          const { degree, startDate, endDate, organization, location } = edu;
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{degree}  </h3>
                  <p className="text-gray-600 italic">{organization} , {location} </p>
                </div>
                <div className="text-sm text-gray-500">
                  {startDate} - {endDate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Activities = ({ allData }: { allData: { activities: any[] } }) => {
  const { activities } = allData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-8">ACHIEVEMENTS</h2>
      <div className="relative border-l-2 border-blue-300 pl-7 space-y-12">
        {activities && activities.map((activity, index) => {
          const { title, employer, startDate, endDate, description, current } = activity
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{title}  </h3>
                  <p className="text-gray-600 italic">{employer} </p>
                </div>
                <div className="text-sm text-gray-500">
                  {startDate} - {endDate ? endDate : (!endDate && current && "present")}
                </div>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = ({ allData }: { allData: { skills: (string | { category: string; items: string[] })[] } }) => {
  const { skills } = allData;

  const renderSkillItem = (item: string | { category: string; items: string[] }) => {
    if (typeof item === 'string') {
      return <li className="bg-blue-100 rounded-full px-3 py-1 text-blue-800">{item}</li>;
    } else if (typeof item === 'object' && item !== null) {
      return (
        <li className="mb-4">
          {item.items.length > 0 && <h3 className="font-semibold text-blue-700 mb-2">{item.category}</h3>}
          <ul className="flex flex-wrap gap-2">
            {Array.isArray(item.items) ? item.items.map((subItem, index) => (
              <li key={index} className="bg-blue-100 rounded-full px-3 py-1 text-blue-800">{subItem}</li>
            )) : null}
          </ul>
        </li>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">SKILLS</h2>
      <ul className="space-y-4">
        {Array.isArray(skills) ? skills.map((skill, index) => (
          <React.Fragment key={index}>
            {renderSkillItem(skill)}
          </React.Fragment>
        )) : null}
      </ul>
    </div>
  );
};


const Languages = ({ allData }: { allData: { languages: { name: string; level: string }[] } }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">LANGUAGES</h2>
      <ul className="space-y-4">
        {allData.languages.map((lang, id) => {
          return (
            <li key={id}>{lang.name} <span>-</span> <span>{lang.level}</span></li>
          )
        })}
      </ul>
    </div>
  )
}

export const Chikorita = ({ allData }: { allData: any }) => {
  const resumeRef = useRef(null);

  return (
    <div ref={resumeRef} className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden ">
      <Header allData={allData} />
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-6">
        <div className="space-y-6">
          <Contact allData={allData} />
          {allData.skills && <Skills allData={allData} />}
          {allData.languages && <Languages allData={allData} />}
        </div>
        <div className="space-y-6">
          <Profile allData={allData} />
          {allData.experiences.length > 0 && <Experience allData={allData} />}
          <Education allData={allData} />
          {allData.activities && allData.activities.length > 0 && <Activities allData={allData} />}
        </div>
      </div>
    </div>
  );
};

export default Chikorita;

