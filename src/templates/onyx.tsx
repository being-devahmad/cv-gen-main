import { NextUIProvider } from "@nextui-org/react";
import { MapPin, Phone, Mail, Linkedin, Github, Globe } from "lucide-react";
import { Image } from "@nextui-org/react";
import React from "react";

const Header = ({ allData }) => {
  const { firstName, lastName, phone, email, city, postalCode, country, summary } = allData;
  return (
    <header className="flex flex-col items-center justify-between border-b pb-6 mb-8 w-full overflow-x-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="flex justify-center items-center space-x-4 w-full ms-5 mt-4">
        {/* <div className=" w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </div> */}
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-white">{`${firstName} ${lastName}`}</h1>
          {/* <p className="text-lg text-gray-300">
            Creative and Innovative Web Developer
          </p> */}
        </div>
      </div>
      <div className="mt-4 md:mt-0 text-gray-300 text-sm text-center w-full">
        <p>{`${city}, ${country} ${postalCode}`}</p>
        <p>{`${phone} · ${email}`}</p>
        {/* <p>https://johndoe.me</p> */}
      </div>
      {/* <div className="flex space-x-6 mt-4 md:mt-0 w-full justify-center">
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500  flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Linkedin size={20} className="" />
          <span className="mt-1">LinkedIn</span>
        </a>
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Github size={20} />
          <span className="mt-1">GitHub</span>
        </a>
        <a
          href="https://johndoe.me"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Globe size={20} />
          <span className="mt-1">Portfolio</span>
        </a>
      </div> */}
    </header>
  );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const Summary = ({ allData }: { allData: { summary: string } }) => {
  const { summary } = allData;
  return (
    <Section title="Summary">
      <p className="text-gray-700">
        {summary}
      </p>
    </Section>
  )
};

const Experience = ({ allData }: { allData: { experiences: Array<{ company: string, startDate: string, endDate: string, title: string, location: string, description: string }> } }) => {
  const { experiences } = allData;
  return (
    <Section title="Experience">
      {
        experiences.map((exp, i) => {
          const { company, startDate, endDate, title, location, description } = exp
          return (
            <div className="mb-6" key={i}>
              <h3 className="font-bold text-gray-800">{company}</h3>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">
                  {`${title} · `}
                </p>
                <p>{`${startDate} - ${endDate}`}</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  {description}
                </li>
              </ul>
            </div>
          )
        })
      }
    </Section>
  )
};

const Education = ({ allData }: { allData: { education: Array<{ degree: string, startDate: string, endDate: string, organization: string, location: string }> } }) => {
  const { education } = allData;
  return (
    <Section title="Education">
      {
        education.map((edu, i) => {
          const { degree, startDate, endDate, organization, location } = edu
          return (
            <div>
              <h3 className="font-bold text-gray-800">{organization}</h3>
              <p className="text-gray">{location}</p>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">
                  {`${degree} · `}
                </p>
                <p>{`${startDate} - ${endDate}`}</p>
              </div>
            </div>
          )
        })
      }
    </Section>
  )
};

// const Projects = () => (
//   <Section title="Projects">
//     <ul className="list-disc list-inside text-gray-700">
//       <li>
//         <strong>E-Commerce Platform:</strong> Led the development of a
//         full-stack platform, improving sales conversion by 25%.
//       </li>
//       <li>
//         <strong>Interactive Dashboard:</strong> Designed an analytics dashboard
//         for a SaaS application, enhancing data visualization.
//       </li>
//     </ul>
//   </Section>
// );


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
    <Section title="Skills">
      <div className="grid grid-cols-2 gap-4 text-gray-700">

        {
          skills?.map((skill, i) => {
            const { category, items } = skill
            return (
              <div key={i}>
                {items.length > 0 && (
                  <div>
                    <strong>{category}:</strong>
                    <p className="text-gray-700">{items.join(", ")}</p>
                  </div>
                )}
              </div>
            )
          })
        }
      </div>
    </Section>
  )
};

export const Onyx = ({ allData }) => {
  return (
    <NextUIProvider>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
        <Header allData={allData} />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Summary allData={allData} />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Experience allData={allData} />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Education allData={allData} />
        {/* <div className="border-b-2 border-gray-300 my-6"></div>
        <Projects /> */}
        <div className="border-b-2 border-gray-300 my-6"></div>
        {/* <Certifications allData={allData} /> */}
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Skills allData={allData} />
      </div>
    </NextUIProvider>
  );
};
