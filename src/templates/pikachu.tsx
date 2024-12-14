import { MapPin, Phone, Mail, Link2, Linkedin, Github, Layers } from 'lucide-react';
import React from 'react';

const Header = ({ allData }) => {
  const { firstName, lastName, city, country, postalCode, phone, email } = allData
  return (
    <div className="bg-amber-600 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-1">{`${firstName} ${lastName}`}</h1>
        {/* <p className="text-xl mb-4">Creative and Innovative Web Developer</p> */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{`${country}, ${city} ${postalCode}`}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Summary = ({ allData }) => {
  const { summary } = allData
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Summary</h2>
      <p className="text-gray-700">
        {summary}
      </p>
    </div>
  );
};

const Experience = ({ allData }) => {
  const { experiences } = allData
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Experience</h2>
      <div className="space-y-6">
        {
          experiences.map((exp, i) => {
            const { company, startDate, endDate, title, location, description } = exp
            return (
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">{company}</h3>
                    <p className="text-gray-600">{title}</p>
                  </div>
                  <div className="text-right">
                    <p>{`${startDate} to ${endDate}`}</p>
                    <p className="text-gray-600">{location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-5 text-gray-700 text-sm">
                  {description}
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

const Education = ({ allData }) => {
  const { education } = allData;
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Education</h2>
      <div>
        {
          education.map((edu, i) => {
            const { degree, startDate, endDate, organization, location } = edu
            return (
              <div className="flex justify-between items-start" key={i}>
                <div>
                  <h3 className="font-bold">{organization}</h3>
                  <p className="text-gray-600">{location}</p>
                </div>
                <div className="text-right">
                  <p>{`${startDate} to ${endDate}`}</p>
                  <p className="text-gray-600">{degree}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

// const Profiles = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Profiles</h2>
//       <div className="space-y-2">
//         <a href="https://linkedin.com/in/johndoe" className="flex items-center gap-2 text-blue-600">
//           <Linkedin size={16} />
//           <span>johndoe</span>
//           <span className="text-gray-600 text-sm">LinkedIn</span>
//         </a>
//         <a href="https://github.com/johndoe" className="flex items-center gap-2 text-gray-900">
//           <Github size={16} />
//           <span>johndoe</span>
//           <span className="text-gray-600 text-sm">GitHub</span>
//         </a>
//         <div className="flex items-center gap-2">
//           <span className="text-lg"><Layers /></span>
//           <span>johndoe</span>
//           <span className="text-gray-600 text-sm">StackOverflow</span>
//         </div>
//       </div>
//     </div>
//   );
// };

const Skills = ({ allData }) => {
  const { skills } = allData

  const renderSkillItem = (item: string | { category: string; items: string[] }) => {
    if (typeof item === 'string') {
      return <li className="ml-4">{item}</li>;
    } else if (typeof item === 'object' && item !== null) {
      return (
        <li>
          {item.items.length > 0 && <h3 className="font-semibold">{item.category}</h3>}
          <ul className="list-disc list-inside">
            {Array.isArray(skills) ? skills.map((skill, index) => (
              <React.Fragment key={index}>
                {renderSkillItem(skill)}
              </React.Fragment>
            )) : null}
          </ul>
        </li>
      );
    }
    return null;
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Skills</h2>
      <div className="space-y-4">
        {skills?.map((skill, index) => {
          const { category, items } = skill
          return (
            <div key={index} className="flex gap-3">
              {items.length > 0 && <div className="font-bold">{category}:</div>}
              <div>{items.join(", ")}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

// const Certifications = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Certifications</h2>
//       <div className="space-y-2">
//         <div>
//           <h3 className="font-bold">Full-Stack Web Development</h3>
//           <p className="text-gray-600">CodeAcademy</p>
//           <p className="text-sm">2020</p>
//         </div>
//         <div>
//           <h3 className="font-bold">AWS Certified Developer</h3>
//           <p className="text-gray-600">Amazon Web Services</p>
//           <p className="text-sm">2019</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Languages = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Languages</h2>
//       <div className="space-y-2">
//         <div>
//           <h3 className="font-bold">English</h3>
//           <p className="text-gray-600 text-sm">Native Speaker</p>
//         </div>
//         <div>
//           <h3 className="font-bold">Spanish</h3>
//           <p className="text-gray-600 text-sm">Intermediate</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const References = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">References</h2>
//       <p className="text-gray-600">Available upon request</p>
//     </div>
//   );
// };

// const Projects = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Projects</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="font-bold">E-Commerce Platform</h3>
//           <p className="text-gray-600">Project Lead</p>
//           <p className="text-sm">Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>
//         </div>
//         <div>
//           <h3 className="font-bold">Interactive Dashboard</h3>
//           <p className="text-gray-600">Frontend Developer</p>
//           <p className="text-sm">Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Pikachu = ({ allData }) => {

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg">
      <Header />
      <div className="flex">
        <div className="w-1/3 p-6 bg-gray-50">
          <Profiles allData={allData} />
          <Skills allData={allData} />
          {/* <Certifications /> */}
          {/* <Languages allData={allData} /> */}
          {/* <References /> */}
        </div>
        <div className="w-2/3 p-6">
          <Summary allData={allData} />
          <Experience allData={allData} />
          <Education allData={allData} />
          {/* <Projects /> */}
        </div>
      </div>
    </div>
  );
};

export default Pikachu;