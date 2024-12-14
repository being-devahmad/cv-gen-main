import { MapPin, Phone, Mail, } from "lucide-react";
import React from "react";

const Header = ({ allData }: { allData: { firstName: string; lastName: string; city: string; country: string; email: string; phone: string } }) => {
  const { firstName, lastName, city, country, email, phone } = allData
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
      <h1 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h1>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1">
          <MapPin size={12} />
          <span>{city}, {country}</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone size={12} />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={12} />
          <span>{email}</span>
        </div>
        {/* <div className="flex items-center gap-1">
          <Globe size={12} />
          <span>johndoe.me</span>
        </div>
        <a href="https://linkedin.com/in/johndoe" className="flex items-center gap-1">
          <Linkedin size={12} />
          <span>johndoe</span>
        </a>
        <a href="https://github.com/johndoe" className="flex items-center gap-1">
          <Github size={12} />
          <span>johndoe</span>
        </a> */}
      </div>
    </div>
  );
};

const Summary = ({ allData }: { allData: { summary: string } }) => {
  const { summary } = allData
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-3">Summary</h2>
      <p className="text-gray-700">
        {summary}
      </p>
    </div>
  )
}

const Experience = ({ allData }: { allData: { experiences: Array<{ company: string; startDate: string; endDate: string; title: string; location: string; description: string }> } }) => {
  const { experiences } = allData
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Experience</h2>
      <div className="space-y-6">
        {
          experiences.map((exp, i) => {
            const { company, startDate, endDate, title, location, description } = exp
            return (
              <div key={i}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{company}</h3>
                    <p className="text-gray-600">{title}</p>
                  </div>
                  <div className="text-right">
                    <p>{`${startDate} to ${endDate}`}</p>
                    <p className="text-gray-600">{location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  <li>{description}</li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const Education = ({ allData }: { allData: { education: Array<{ degree: string; startDate: string; endDate: string; organization: string; location: string }> } }) => {
  const { education } = allData;
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Education</h2>
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
  )
}

// const Profiles = ({ allData }) => {
//   return (
//     <div className="p-6 bg-white">
//       <h2 className="text-xl font-bold text-red-600 mb-4">Projects</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="font-bold">E-Commerce Platform</h3>
//           <p className="text-gray-600">Project Lead</p>
//           <p className="text-gray-700">Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>
//         </div>
//         <div>
//           <h3 className="font-bold">Interactive Dashboard</h3>
//           <p className="text-gray-600">Frontend Developer</p>
//           <p className="text-gray-700">Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

const Skills = ({ allData }: { allData: { skills: Array<{ category: string; items: string[] }> } }) => {
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
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Skills</h2>
      <div className="grid grid-cols-3 gap-6">
        {
          skills?.map((skill, i) => {
            const { category, items } = skill
            return (
              <div key={i}>
                {items.length > 0 && <h3 className="font-bold mb-2">{category}</h3>}
                <p className="text-gray-700">{items.join(", ")}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

// const Certifications = ({ allData }) => {
//   return (
//     <div className="p-6 bg-white">
//       <h2 className="text-xl font-bold text-red-600 mb-4">Certifications</h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <h3 className="font-bold">Full-Stack Web Development</h3>
//           <p className="text-gray-600">CodeAcademy</p>
//           <p className="text-gray-700">2020</p>
//         </div>
//         <div>
//           <h3 className="font-bold">AWS Certified Developer</h3>
//           <p className="text-gray-600">Amazon Web Services</p>
//           <p className="text-gray-700">2019</p>
//         </div>
//       </div>
//     </div>
//   )
// }



const Bronzor = ({ allData }: { allData: any }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 min-h-screen">
      <Header allData={allData} />
      <Summary allData={allData} />
      <Experience allData={allData} />
      <Education allData={allData} />
      {/* <Profiles allData={allData} /> */}
      <Skills allData={allData} />
    </div>
  );
};

export default Bronzor;