// import { Image } from "@nextui-org/react";

// import { Mail, Phone, MapPin } from "lucide-react";

// export function PersonalInformation({ allData }: { allData: { email: string; contact: string; city: string; country: string; postalCode: string } }) {
//   const { email, contact, city, country, postalCode } = allData
//   return (
//     <section className="mb-6 text-sm">
//       <h2 className="font-semibold mb-3 border-b border-gray-600 pb-1 flex items-center gap-2">
//         <Mail /> CONTACT ME
//       </h2>
//       <ul className="space-y-2">
//         <li className="flex items-center gap-2">
//           <a href={`mailto:${email}`} className="hover:underline ">
//             {email}
//           </a>
//         </li>
//         <li className="flex items-center">
//           <Phone className="w-4 h-4 mr-2" />
//           <a href={`tel:${contact}`} className="hover:underline">
//             {contact}
//           </a>
//         </li>
//         <li className="flex items-center">
//           <MapPin className="w-4 h-4 mr-2" />
//           <span>{`${country}, ${city} ${postalCode}`}</span>
//         </li>
//       </ul>
//     </section>
//   );
// }

// import { GraduationCap } from "lucide-react";

// export function Education({ allData }: { allData: { institution: string; degree: string; year: string; location: string } }) {
//   const { institution, degree, year } = allData
//   return (
//     <section>
//       <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
//         <GraduationCap className="w-6 h-6 mr-2 text-blue-500" /> EDUCATION
//       </h2>
//       <div className="bg-gray-100 rounded-lg p-4">
//         <h3 className="font-semibold text-gray-800 text-lg">
//           {institution}
//         </h3>
//         <p className="text-gray-700">{degree}</p>
//         <p className="text-gray-600 mt-1">{year}</p>
//       </div>
//     </section>
//   );
// }

// export function Header({ allData }: { allData: { firstName: string; lastName: string } }) {
//   const { firstName, lastName } = allData
//   return (
//     <header className="text-center">
//       <h1 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//         {`${firstName} ${lastName}`}
//       </h1>
//       {/* <h2 className="text-md font-semibold text-gray-300">
//         Creative and Innovative Web Developer
//       </h2> */}
//     </header>
//   );
// }

// import { User } from "lucide-react";

// export function Summary({ allData }: { allData: { summary: string } }) {
//   const { summary } = allData
//   return (
//     <section className="mb-6">
//       <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
//         <User className="w-6 h-6 mr-2 text-blue-500" /> SUMMARY
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         {summary}
//       </p>
//     </section>
//   );
// }



// // export function Profiles() {
// //   return (
// //     <section className="mb-6 text-sm">
// //       <h2 className="font-semibold mb-3 border-b border-gray-600 pb-1">PROFILES</h2>
// //       <ul className="space-y-2">
// //         <li className="flex items-center gap-2">
// //           <Linkedin className="w-4 h-4" />
// //           <a href="https://linkedin.com/in/johndoe" className="hover:underline">
// //             linkedin.com/joh
// //           </a>
// //         </li>
// //         <li className="flex items-center gap-2">
// //           <Github className="w-4 h-4" />
// //           <a href="https://github.com/johndoe" className="hover:underline">
// //             github.com/john
// //           </a>
// //         </li>
// //       </ul>
// //     </section>
// //   )
// // }



// import { Briefcase } from "lucide-react";

// // export function Projects({ allData }) {
// //   const projects = [
// //     "E-commerce Website",
// //     "Banking Portal",
// //     "News Website",
// //     "Books Store",
// //     "YouTube Clone",
// //     "Budget Tracking Application",
// //     "Google Meet Layout",
// //   ];

// //   return (
// //     <section className="mb-6">
// //       <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
// //         <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> PROJECTS
// //       </h2>
// //       <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// //         {projects.map((project, index) => (
// //           <li
// //             key={index}
// //             className="flex items-center bg-gray-100 rounded-lg p-2"
// //           >
// //             <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
// //             <span className="text-gray-700">{project}</span>
// //           </li>
// //         ))}
// //       </ul>
// //     </section>
// //   );
// // }

// export function Experience({ allData }: { allData: { experiences: any[] } }) {
//   const { experiences } = allData;

//   return (
//     <section className="mb-6">
//       <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
//         <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> EXPERIENCE
//       </h2>
//       <div className="space-y-6">
//         {experiences.map((exp, index) => {
//           const { company, startDate, endDate, title, description, location } = exp;
//           return (
//             <div key={index}>
//               <div className="flex justify-between items-start mb-2">
//                 <div>
//                   <h3 className="font-semibold text-gray-800 text-lg">{company}</h3>
//                   <p className="text-gray-700">{title}</p>
//                   <p className="text-gray-600">{location}</p>
//                 </div>
//                 <span className="text-gray-600 text-sm">{`${startDate} - ${endDate}`}</span>
//               </div>
//               <p className="list-disc list-inside text-gray-700 space-y-1">
//                 {/* {description.map((dec: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, i: any) => (
//                   <li key={index} className="text-sm">{dec}</li>
//                 ))} */}
//                 {description}
//               </p>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }


// // import { Linkedin, Github } from 'lucide-react'
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


// // export function SocialProfiles() {
// //   return (
// //     <section className="mb-6">
// //       <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-1">
// //         PROFILES
// //       </h2>
// //       <div className="space-y-2 text-sm">
// //         <a
// //           href="https://linkedin.com/in/johndoe"
// //           className="flex items-center gap-2 hover:text-blue-400 transition-colors"
// //         >
// //           <Linkedin className="w-4 h-4" />
// //           <span>linkedin.com/in/johndoe</span>
// //         </a>
// //         <a
// //           href="https://github.com/johndoe"
// //           className="flex items-center gap-2 hover:text-blue-400 transition-colors"
// //         >
// //           <Github className="w-4 h-4" />
// //           <span>github.com/johndoe</span>
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }

// export const Nosepass = ({ allData }: { allData: any }) => {
//   return (
//     <div className="h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
//         <div className="flex justify-between items-start border border-red-600">
//           <div className="w-60 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 border-green-700">
//             <div className="mb-6 border border-white" >
//               {/* <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
//                 <Image
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
//                   alt="John Doe"
//                   width={150}
//                   height={150}
//                   className="rounded-full mx-auto"
//                 />
//               </div> */}
//               <Header allData={allData} />
//             </div>
//             <PersonalInformation allData={allData} />
//             {/* <Profiles allData={allData} /> */}
//           </div>
//           <div className="p-6 border border-black w-full">
//             <Summary allData={allData} />
//             <Experience allData={allData} />
//             <Education allData={allData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import { Mail, Phone, MapPin, GraduationCap, User, Briefcase } from "lucide-react";

export function PersonalInformation({ allData }: { allData: { email: string; phone: string; city: string; country: string; postalCode: string } }) {
  const { email, phone, city, country, postalCode } = allData;
  return (
    <section className="mb-6 text-xs">
      <h2 className="font-semibold mb-3 border-b border-gray-300 pb-1 flex items-center gap-2">
        <Mail className="w-4 h-4" /> Contact Me
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{`${country}, ${city} ${postalCode}`}</span>
        </li>
      </ul>
    </section>
  );
}

export function Education({ allData }: { allData: { organization: string; degree: string; startDate: string; endDate: string; location: string } }) {
  const { degree, startDate, endDate, organization } = allData
  return (
    <section>
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-blue-500" /> Education
      </h2>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 text-lg">{organization}</h3>
        <p className="text-gray-700">{degree}</p>
        <p className="text-gray-600 mt-1">{`${startDate} - ${endDate}`}</p>
      </div>
    </section>
  );
}

export function Header({ allData }: { allData: { firstName: string; lastName: string } }) {
  const { firstName, lastName } = allData;
  return (
    <header className="text-center py-6">
      <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        {`${firstName} ${lastName}`}
      </h1>
      {/* <h2 className="text-md font-semibold text-gray-600">
        Creative and Innovative Web Developer
      </h2> */}
    </header>
  );
}

export function Summary({ allData }: { allData: { summary: string } }) {
  const { summary } = allData;
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
        <User className="w-5 h-5 text-blue-500" /> Summary
      </h2>
      <p className="text-gray-600 leading-relaxed text-sm">
        {summary}
      </p>
    </section>
  );
}

export function Experience({ allData }: { allData: { experiences: any[] } }) {
  const { experiences } = allData;
  return (
    <section className="mb-6 text-sm">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-blue-500" /> Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const { company, startDate, endDate, title, description, location } = exp;
          return (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{company}</h3>
                  <p className="text-gray-700">{title}</p>
                  <p className="text-gray-600">{location}</p>
                </div>
                <span className="text-gray-600 text-sm">{`${startDate} - ${endDate}`}</span>
              </div>
              <p className="text-gray-700">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const Nosepass = ({ allData }: { allData: any }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
            <Header allData={allData} />
            <PersonalInformation allData={allData} />
          </div>
          <div className="p-6 w-full">
            <Summary allData={allData} />
            <Experience allData={allData} />
            <Education allData={allData} />
          </div>
        </div>
      </div>
    </div>
  );
};
