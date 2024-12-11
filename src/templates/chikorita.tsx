import { Image } from "@nextui-org/react"


const Header = ({ allData }) => {
  const { firstName, lastName } = allData;
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
        <h1 className="text-4xl font-bold"> {`${firstName} ${lastName}`} </h1>
        {/* <p className="text-xl mt-2">MARKETING MANAGER</p> */}
      </div>
    </div>
  )
}

const Contact = ({ allData }) => {
  const { phone, email, city, postalCode, country } = allData;
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">CONTACT</h2>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <i className="ph ph-phone" />
          <span> {phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="ph ph-envelope" />
          <span>{email}</span>
        </div>
        {/* <div className="flex items-center gap-2">
          <i className="ph ph-globe" />
          <span>www.reallygreatsite.com</span>
        </div> */}
        <div className="flex items-center gap-2">
          <i className="ph ph-map-pin" />
          <span> {`${city}, ${postalCode} , ${country}`} </span>
        </div>
      </div>
    </div>
  )
}

const Profile = ({ allData }) => {
  const { summary } = allData;
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">PROFILE</h2>
      <p className="text-sm leading-relaxed">
        {summary}
      </p>
    </div>
  )
}

const Experience = ({ allData }) => {
  const { experiences } = allData

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-8">WORK EXPERIENCE</h2>
      <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
        {experiences.map((exp, index) => {
          const { company, startDate, endDate, title, description } = exp
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-34px] top-0 w-4 h-4 bg-slate-800 rounded-full" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{company}</h3>
                  <p className="text-gray-600">{title}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-sm text-gray-600">{startDate}</span>
                <span>-</span>
                <span className="text-sm text-gray-600">{endDate ? endDate : "present"}</span>
              </div>
              <ul className="list-disc ml-4 space-y-2">
                {/* {description.map((desc, i) => (
                  <li key={i} className="text-sm">{desc}</li>
                ))} */}
                {description}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Education = ({ allData }) => {
  const { education } = allData;

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-8">EDUCATION</h2>
      <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
        {
          education.map((edu, index) => {
            const { degree, startDate, endDate, organization } = edu
            return (
              <div key={index} className="relative">
                <div className="absolute left-[-34px] top-0 w-4 h-4 bg-slate-800 rounded-full" />
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{degree}</h3>
                    <p className="text-gray-600">{organization}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="text-sm text-gray-600">{startDate}</span>
                    <span className="text-sm text-gray-600">-</span>
                    <span className="text-sm text-gray-600">{endDate}</span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

// const Skills = ({ allData }) => {
//   const { skills } = allData

//   return (
//     <div className="bg-gray-100 p-8">
//       <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">SKILLS</h2>
//       <ul className="space-y-2">
//         {skills.map((skill, index) => {
//           const { category, item } = skill
//           return (
//             <li key={index} className="flex items-center gap-2">
//               <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
//               {category}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

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

export const Chikorita = ({ allData }) => {
  return (
    <div className="max-w-[1000px] mx-auto shadow-xl">
      <Header allData={allData} />
      <div className="grid grid-cols-[300px_1fr]">
        <div>
          <Contact allData={allData} />
          {/* <Skills  /> */}
          <Languages allData={allData} />
          <References allData={allData} />
        </div>
        <div>
          <Profile allData={allData} />
          <Experience allData={allData} />
          <Education allData={allData} />
        </div>
      </div>
    </div>
  )
}

export default Chikorita

