import { Image } from "@nextui-org/react";

import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="mb-6 text-sm">
      <h2 className="font-semibold mb-3 border-b border-gray-600 pb-1 flex items-center gap-2">
        <Mail className="" /> CONTACT ME
      </h2>
      <ul className="space-y-2 ">
        <li className="flex items-center gap-2">
          <Mail className=" " />
          <a href="mailto:john.doe@gmail.com" className="hover:underline ">
            john.doe@gmail.com
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          <a href="tel:+15551234567" className="hover:underline">
            (555) 123-4567
          </a>
        </li>
        <li className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Pleasantville, CA 94588</span>
        </li>
      </ul>
    </section>
  );
}

export function PersonalInformation() {
  return (
    <section className="mb-6 text-sm">
      <h2 className="text-lg font-semibold mb-3 border-b border-gray-600 pb-1 flex items-center gap-2">
        PERSONAL INFORMATION
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:john.doe@gmail.com" className="hover:underline">
            john@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href="tel:+15551234567" className="hover:underline">
            (555) 123-4567
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Pleasantville, CA 94588</span>
        </li>
      </ul>
    </section>
  );
}

import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <GraduationCap className="w-6 h-6 mr-2 text-blue-500" /> EDUCATION
      </h2>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 text-lg">
          University of California
        </h3>
        <p className="text-gray-700">Bachelor's in Computer Science</p>
        <p className="text-gray-600 mt-1">Aug 2012 - May 2016</p>
      </div>
    </section>
  );
}

export function Header() {
  return (
    <header className="text-center">
      <h1 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        John Doe
      </h1>
      <h2 className="text-md font-semibold text-gray-300">
        Creative and Innovative Web Developer
      </h2>
    </header>
  );
}

import { User } from "lucide-react";

export function Summary() {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <User className="w-6 h-6 mr-2 text-blue-500" /> SUMMARY
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Innovative Web Developer with 5 years of experience in building
        impactful and user-friendly websites and applications. Specializes in
        front-end technologies and passionate about modern web standards and
        cutting-edge development techniques. Proven track record of leading
        successful projects from concept to deployment.
      </p>
    </section>
  );
}



export function Profiles() {
  return (
    <section className="mb-6 text-sm">
      <h2 className="font-semibold mb-3 border-b border-gray-600 pb-1">PROFILES</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          <a href="https://linkedin.com/in/johndoe" className="hover:underline">
            linkedin.com/joh
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Github className="w-4 h-4" />
          <a href="https://github.com/johndoe" className="hover:underline">
            github.com/john
          </a>
        </li>
      </ul>
    </section>
  )
}



import { Briefcase } from "lucide-react";

export function Projects() {
  const projects = [
    "E-commerce Website",
    "Banking Portal",
    "News Website",
    "Books Store",
    "YouTube Clone",
    "Budget Tracking Application",
    "Google Meet Layout",
  ];

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> PROJECTS
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex items-center bg-gray-100 rounded-lg p-2"
          >
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-gray-700">{project}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Creative Solutions Inc.",
      position: "Senior Web Developer",
      location: "San Francisco, CA",
      period: "Jan 2019 - Present",
      website: "https://creativesolutions.inc/",
      achievements: [
        "Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.",
        "Developed and implemented a new responsive framework, improving cross-device compatibility.",
        "Mentored a team of four junior developers, fostering a culture of technical excellence."
      ]
    },
    {
      company: "TechAdvancers",
      position: "Web Developer",
      location: "San Jose, CA",
      period: "Jun 2016 - Dec 2018",
      website: "https://techadvancers.com/",
      achievements: [
        "Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.",
        "Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.",
        "Optimized application performance, achieving a 30% reduction in load times."
      ]
    }
  ]

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> EXPERIENCE
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{exp.company}</h3>
                <p className="text-gray-700">{exp.position}</p>
                <p className="text-gray-600">{exp.location}</p>
              </div>
              <span className="text-gray-600 text-sm">{exp.period}</span>
            </div>
            <a href={exp.website} className="text-blue-500 text-sm hover:underline mb-2 block">
              {exp.website}
            </a>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}


import { Linkedin, Github } from 'lucide-react'


export function SocialProfiles() {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-1">
        PROFILES
      </h2>
      <div className="space-y-2 text-sm">
        <a
          href="https://linkedin.com/in/johndoe"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span>linkedin.com/in/johndoe</span>
        </a>
        <a
          href="https://github.com/johndoe"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>github.com/johndoe</span>
        </a>
      </div>
    </section>
  );
}

export const Nosepass = ({ allData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
                  alt="John Doe"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <Header allData={allData} />
            </div>
            <PersonalInformation allData={allData} />
            <Profiles allData={allData} />
          </div>
          <div className="md:col-span-2 p-6">
            <Summary allData={allData} />
            <Experience allData={allData} />
            <Education allData={allData} />
          </div>
        </div>
      </div>
    </div>
  );
};
