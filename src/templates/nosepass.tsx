import { Image } from "@nextui-org/react";
import { Mail, Phone, MapPin, } from "lucide-react";

export function PersonalInformation({
  allData,
}: {
  allData: {
    phone: string;
    email: string;
    city: string;
    postalCode: string;
    country: string;
  };
}) {
  const { phone, email, city, postalCode, country } = allData;
  return (
    <section className="mb-6 text-xs">
      <h2 className="font-semibold mb-3 border-b border-gray-300 pb-1 flex items-center gap-2">
        <Mail className="w-4 h-4" /> Contact Me
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:john.doe@gmail.com"
            className="hover:underline text-xs"
          >
            {email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href={`tel:${phone}`} className="hover:underline text-xs">
            {phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-4 h-4 " />
          <span className="text-xs">{`${city} , ${country} ,  ${postalCode}`}</span>
        </li>
      </ul>
    </section>
  );
}

import { GraduationCap } from "lucide-react";

export function Education({ allData }: { allData: { education: any[] } }) {
  const { education } = allData;
  return (
    <section>
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-blue-500" /> Education
      </h2>
      {education?.map((val, ind) => {
        const { degree, startDate, endDate, organization } = val;
        return (
          <>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {organization}
              </h3>
              <p className="text-gray-700 text-sm">{degree}</p>
              <p className="text-gray-600 mt-1 text-xs">{startDate} - {endDate}</p>
            </div>
          </>
        );
      })}
    </section>
  );
}

export function Header({
  allData,
}: {
  allData: { firstName: string; lastName: string };
}) {
  const { firstName, lastName } = allData;
  return (
    <header className="text-center">
      <h1 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        {`${firstName} ${lastName}`}
      </h1>
    </header>
  );
}

import { User } from "lucide-react";

export function Summary({ allData }: { allData: { summary: string } }) {
  const { summary } = allData;
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
        <User className="w-5 h-5 text-blue-500" /> Summary
      </h2>
      <p className="text-gray-600 leading-relaxed">{summary}</p>
    </section>
  );
}

// export function Profiles() {
//   return (
//     <section className="mb-6 text-sm">
//       <h2 className="font-semibold mb-3 border-b border-gray-600 pb-1">
//         PROFILES
//       </h2>
//       <ul className="space-y-2">
//         <li className="flex items-center gap-2">
//           <Linkedin className="w-4 h-4" />
//           <a href="https://linkedin.com/in/johndoe" className="hover:underline">
//             linkedin.com/joh
//           </a>
//         </li>
//         <li className="flex items-center gap-2">
//           <Github className="w-4 h-4" />
//           <a href="https://github.com/johndoe" className="hover:underline">
//             github.com/john
//           </a>
//         </li>
//       </ul>
//     </section>
//   );
// }

import { Briefcase } from "lucide-react";

// export function Projects() {
//   const projects = [
//     "E-commerce Website",
//     "Banking Portal",
//     "News Website",
//     "Books Store",
//     "YouTube Clone",
//     "Budget Tracking Application",
//     "Google Meet Layout",
//   ];

//   return (
//     <section className="mb-6">
//       <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
//         <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> PROJECTS
//       </h2>
//       <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//         {projects.map((project, index) => (
//           <li
//             key={index}
//             className="flex items-center bg-gray-100 rounded-lg p-2"
//           >
//             <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
//             <span className="text-gray-700">{project}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

export function Experience({ allData }: { allData: { experiences: any[] } }) {
  const { experiences } = allData;


  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> EXPERIENCE
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const { company, startDate, endDate, title, description } = exp;
          console.log("hahah", experiences);
          return (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {company}
                  </h3>
                  <p className="text-gray-700">{title}</p>
                  {/* <p className="text-gray-600">{location}</p> */}
                </div>
                <span className="text-gray-600 text-sm">
                  {startDate} - {endDate}
                </span>
              </div>
              {/* <a
                href={exp.website}
                className="text-blue-500 text-sm hover:underline mb-2 block"
              >
                {exp.website}
              </a>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul> */}
              <p className="text-xs">{description.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
const Skills = ({
  allData,
}: {
  allData: { skills: (string | { category: string; items: string[] })[] };
}) => {
  const { skills } = allData;

  const renderSkillItem = (
    item: string | { category: string; items: string[] }
  ) => {
    if (typeof item === "string") {
      return <li className="ml-4">{item}</li>;
    } else if (typeof item === "object" && item !== null) {
      return (
        <li>
          {item.items.length > 0 && (
            <h3 className="font-semibold text-sm my-2">{item.category}</h3>
          )}
          <ul className="list-disc list-inside">
            {Array.isArray(item.items)
              ? item.items.map((subItem, index) => (
                <li key={index} className="ml-4 text-xs">
                  {subItem}
                </li>
              ))
              : null}
          </ul>
        </li>
      );
    }
    return null;
  };

  return (
    <div className=" ">
      <h2 className="text-xl font-bold border-b border-gray-100 pb-2 mb-4">
        SKILLS
      </h2>
      <ul className="space-y-2">
        {Array.isArray(skills)
          ? skills.map((skill, index) => (
            <React.Fragment key={index}>
              {renderSkillItem(skill)}
            </React.Fragment>
          ))
          : null}
      </ul>
    </div>
  );
};
import { Linkedin, Github } from "lucide-react";
import React from "react";

// export function SocialProfiles() {
//   return (
//     <section className="mb-6">
//       <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-1">
//         PROFILES
//       </h2>
//       <div className="space-y-2 text-sm">
//         <a
//           href="https://linkedin.com/in/johndoe"
//           className="flex items-center gap-2 hover:text-blue-400 transition-colors"
//         >
//           <Linkedin className="w-4 h-4" />
//           <span>linkedin.com/in/johndoe</span>
//         </a>
//         <a
//           href="https://github.com/johndoe"
//           className="flex items-center gap-2 hover:text-blue-400 transition-colors"
//         >
//           <Github className="w-4 h-4" />
//           <span>github.com/johndoe</span>
//         </a>
//       </div>
//     </section>
//   );
// }

export const Nosepass = ({ allData }: { allData: any }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
            <div className="flex flex-col items-center mb-6">
              {/* <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
                  alt="John Doe"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div> */}
              <Header allData={allData} />
            </div>
            <PersonalInformation allData={allData} />
            <Skills allData={allData} />
            {/* <Profiles allData={allData} /> */}
          </div>
          <div className="md:col-span-7 p-6">
            <Summary allData={allData} />
            <Experience allData={allData} />
            <Education allData={allData} />
          </div>
        </div>
      </div>
    </div>
  );
};
