import { Image } from "@nextui-org/react"


const Header = () => {
  return (
    <div className="grid grid-cols-[300px_1fr] bg-slate-800 text-white">
      <div className="p-8">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
      </div>
      <div className="p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold">RICHARD SANCHEZ</h1>
        <p className="text-xl mt-2">MARKETING MANAGER</p>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">CONTACT</h2>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <i className="ph ph-phone" />
          <span>+123-456-7890</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="ph ph-envelope" />
          <span>hello@reallygreatsite.com</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="ph ph-globe" />
          <span>www.reallygreatsite.com</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="ph ph-map-pin" />
          <span>123 Anywhere St., Any City</span>
        </div>
      </div>
    </div>
  )
}

const Profile = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">PROFILE</h2>
      <p className="text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
      </p>
    </div>
  )
}

const Experience = () => {
  const experiences = [
    {
      company: "Borcelle Studio",
      date: "2030 - PRESENT",
      designation: "Marketing Manager & Specialist",
      description: [
        "Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.",
        "Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.",
        "Monitor brand consistency across marketing channels and materials."
      ]
    },
    {
      company: "Fauget Studio",
      date: "2025 - 2029",
      designation: "Marketing Manager & Specialist",
      description: [
        "Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI.",
        "Oversee market research to identify emerging trends, customer needs, and competitor strategies."
      ]
    },
    {
      company: "Studio Shodwe",
      date: "2024 - 2025",
      designation: "Marketing Manager & Specialist",
      description: [
        "Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives.",
        "Monitor and maintain brand consistency across all marketing channels and materials."
      ]
    }
  ]

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-8">WORK EXPERIENCE</h2>
      <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute left-[-34px] top-0 w-4 h-4 bg-slate-800 rounded-full" />
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">{exp.company}</h3>
                <p className="text-gray-600">{exp.designation}</p>
              </div>
              <span className="text-sm text-gray-600">{exp.date}</span>
            </div>
            <ul className="list-disc ml-4 space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

const Education = () => {
  const education = [
    {
      degree: "Master of Business Management",
      school: "School of business | Wardiere University",
      date: "2029 - 2031",
      gpa: "3.8 / 4.0"
    },
    {
      degree: "Bachelor of Business Management",
      school: "School of business | Wardiere University",
      date: "2025 - 2029",
      gpa: "3.8 / 4.0"
    }
  ]

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-8">EDUCATION</h2>
      <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute left-[-34px] top-0 w-4 h-4 bg-slate-800 rounded-full" />
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-sm">GPA: {edu.gpa}</p>
              </div>
              <span className="text-sm text-gray-600">{edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const skills = [
    "Project Management",
    "Public Relations",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Effective Communication",
    "Critical Thinking",
    "Digital Marketing"
  ]

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">SKILLS</h2>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Languages = () => {
  const languages = [
    { language: "English", level: "Fluent" },
    { language: "French", level: "Fluent" },
    { language: "German", level: "Basic" },
    { language: "Spanish", level: "Intermediate" }
  ]

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">LANGUAGES</h2>
      <ul className="space-y-2">
        {languages.map((item, index) => (
          <li key={index}>
            {item.language} ({item.level})
          </li>
        ))}
      </ul>
    </div>
  )
}


const References = () => {
  const languages = [
    { language: "English", level: "Fluent" },
    { language: "French", level: "Fluent" },
    { language: "German", level: "Basic" },
    { language: "Spanish", level: "Intermediate" }
  ]

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">LANGUAGES</h2>
      <ul className="space-y-2">
        {languages.map((item, index) => (
          <li key={index}>
            {item.language} ({item.level})
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Chikorita = () => {
  return (
    <div className="max-w-[1000px] mx-auto shadow-xl">
      <Header />
      <div className="grid grid-cols-[300px_1fr]">
        <div>
          <Contact />
          <Skills />
          <Languages />
          <References />
        </div>
        <div>
          <Profile />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  )
}

export default Chikorita

