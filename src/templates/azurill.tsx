import { Divider } from "@nextui-org/react"

const Header = ({ allData }) => {
    const { firstName, lastName, phone, email, city, postal_code, country, summary } = allData;

    return (
        <>
            <div>
                <h1 className="text-4xl font-bold mb-2">{firstName} {lastName} </h1>
                <div className="text-sm space-x-2">
                    <span>{phone}</span>
                    <span>·</span>
                    <span>{email}</span>
                    <span>·</span>
                    {/* {links.map((link) => <a className="pl-1" href={link}>{link}</a>)} */}
                </div>
                <div className="text-sm mt-1">
                    <span>{city}</span>,
                    <span>{postal_code}</span>,
                    <span>{country}</span>
                </div>
            </div>
            <h2 className="text-lg font-bold uppercase mb-2">Summary</h2 >
            <div className="flex flex-col gap-4 mb-2">
                <p className="text-sm mt-2">
                    {summary}
                </p>
            </div>

        </>
    );
};

// const Education = () => {

//     const education = [
//         {
//             degree: "Bachelors in Information Technology",
//             date: "2021 - Present",
//             organization: "Government College University Faisalabad"
//         },
//         {
//             degree: "Intermediate",
//             date: "2019 - 2021",
//             organization: "Nishat College of Science of Multan"
//         }
//     ]

//     return (
//         <section className="mb-8">
//             <h2 className="text-lg font-bold uppercase mb-2">Education</h2>
//             <div className="flex flex-col gap-4">
//                 {
//                     education.map((educationVal) => {
//                         const {degree, date, organization} = educationVal
//                         return (
//                             <div>
//                                 <div className="flex justify-between">
//                                     <h3 className="font-bold">{degree}</h3>
//                                     <p className="text-sm">{date}</p>
//                                 </div>
//                                 <div>{organization}</div>

//                             </div>
//                         )
//                     })
//                 }
//             </div>

//         </section>
//     )
// }
const Education = ({ allData }) => {
    const { education } = allData;

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-2">Education</h2>
            <div className="flex flex-col gap-4 mb-2">
                {
                    education.map((educationVal, index) => {
                        const { degree, startDate, endDate, organization } = educationVal
                        return (
                            <div key={index}>
                                <div className="flex justify-between">
                                    <h3 className="font-bold">{degree}</h3>
                                    <div className="flex gap-0.5 items-center">
                                        <p className="text-sm">{startDate}</p>
                                        <span>-</span>
                                        <p className="text-sm">{endDate}</p>
                                    </div>

                                </div>
                                <div>{organization}</div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};



const Experience = ({ allData }) => {
    const { experiences } = allData;
    console.log("exp--> ", experiences)
    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Professional Experience</h2>
            <div className="space-y-6">
                {experiences.map((experienceVal, index) => {
                    const { company, startDate, endDate, title, description } = experienceVal
                    return (
                        <div>
                            <div className="flex justify-between">
                                <h3 className="font-bold">{company}</h3>
                                <div className="flex gap-0.5 items-center">
                                    <p className="text-sm">{startDate}</p>
                                    <span>-</span>
                                    <p className="text-sm">{endDate ? endDate : "present"}</p>
                                </div>
                            </div>
                            <div className="font-bold">{title}</div>
                            <p className="text-sm mt-2">
                                {description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};


// const Projects = () => {


//     const projects = [
//         {
//             title: "StoreIt - Google Drive Clone",
//             date: "Aug 2024 - Oct 2024",
//             technologies: ["React.js, ", "Firebase, ", "Node.js, ", "Tailwind CSS"],
//             description: "Built a cloud storage application with features for file upload, sharing, and user authentication using Firebase and React."
//         },
//         {
//             title: "Course Management System",
//             date: "Jan 2024 - Jun 2024",
//             technologies: ["React.js, ", "Tailwind CSS, ", "Node.js, ", "MongoDB"],
//             description: "Created a course management platform for educational institutions with user-friendly interfaces, CRUD operations, and role-based access."
//         },
//         {
//             title: "E-Commerce Store",
//             date: "May 2023 - Dec 2023",
//             technologies: ["Next.js, ", "Shopify, ", "GraphQL, ", "TypeScript"],
//             description: "Developed a fully functional e-commerce platform integrated with Shopify, implementing features such as product filtering, payment gateways, and SEO optimization."
//         }
//     ];


//     return (
//         <section className="mb-8">
//             <h2 className="text-lg font-bold uppercase mb-4">Projects</h2>

//             <div className="space-y-6">
//                 <div className="flex justify-between items-start flex-col gap-4">
//                     {
//                         projects.map((projectValues) => {
//                             const {title, technologies, date, description} = projectValues
//                             return (
//                                 <div>
//                                     <div className="flex justify-between">
//                                         <div>
//                                             <p className="flex gap-4">
//                                                 <span className="font-bold">{title}</span>
//                                                 <span>
//                                                     <Divider orientation="vertical" className="bg-gray-500 h-full" />
//                                                 </span>
//                                                 <span className="italic">{technologies}</span>
//                                             </p>
//                                         </div>
//                                         <p className="text-sm">{date}</p>
//                                     </div>
//                                     <div className="font-bold">Business Analyst Intern</div>
//                                     <p className="text-sm mt-2">
//                                         {description}
//                                     </p>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </section >
//     )
// }
// const Projects = ({allData}) => {
//     const {projects} = allData;

//     return (
//         <section className="mb-8">
//             <h2 className="text-lg font-bold uppercase mb-4">Projects</h2>
//             <div className="space-y-6">
//                 {projects.map(({ title, date, technologies, description }, index) => (
//                     <div key={index}>
//                         <div className="flex justify-between">
//                             <div>
//                                 <p className="flex gap-4">
//                                     <span className="font-bold">{title}</span>
//                                     <span>
//                                         <Divider orientation="vertical" className="bg-gray-500 h-full" />
//                                     </span>
//                                     <span className="italic">{technologies.join(", ")}</span>
//                                 </p>
//                             </div>
//                             <p className="text-sm">{date}</p>
//                         </div>
//                         <p className="text-sm mt-2">{description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };


// const Skills = () => {
//     return (
//         <section>
//             <h2 className="text-lg font-bold uppercase mb-4">Skills & Certifications</h2>
//             <div className="space-y-1 text-sm">
//                 <div className="flex gap-3">
//                     <div className="font-bold">Languages : </div>
//                     <div>HTML , CSS , Javascript , Typescript</div>
//                 </div>
//                 <div className="flex gap-3">
//                     <div className="font-bold">Libraries : </div>
//                     <div>React.js , Express.js , Node.js</div>
//                 </div>
//                 <div className="flex gap-3">
//                     <div className="font-bold">Frameworks : </div>
//                     <div>Next.js , Bootstrap , Tailwind CSS</div>
//                 </div>
//                 <div className="flex gap-3">
//                     <div className="font-bold">Databases : </div>
//                     <div>MySQL , Firebase , Supabase , MongoDB</div>
//                 </div>
//                 <div className="flex gap-3">
//                     <div className="font-bold">Developer Tools : </div>
//                     <div>Git/Github , BitBucket , Jira</div>
//                 </div>
//             </div>
//         </section>
//     )
// }
const Skills = ({ allData }) => {
    const { skills } = allData;

    return (
        <section>
            <h2 className="text-lg font-bold uppercase mb-4">Skills & Certifications</h2>
            <div className="space-y-1 text-sm">
                {skills?.map((skill, index) => {
                    const { category, items } = skill
                    return (
                        <div key={index} className="flex gap-3">
                            <div className="font-bold">{category}:</div>
                            <div>{items.join(", ")}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};


export const Azurill = ({ allData }) => {
    return (
        <div className="max-w-[800px] mx-auto p-8 font-sans">
            <Header allData={allData} />
            <Education allData={allData} />
            <Experience allData={allData} />
            {/* <Projects allData={allData} /> */}
            <Skills allData={allData} />
        </div>
    );
};