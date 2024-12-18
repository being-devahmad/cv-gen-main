import React from "react";

const Header = ({ allData }: { allData: { firstName: string; lastName: string; jobTite: string; city: string; country: string; email: string; phone: string; postalCode: string, summary: string } }) => {
    const { firstName, lastName, phone, email, city, postalCode, country, summary, jobTite } = allData;

    return (
        <>
            <div>
                <h1 className="text-4xl font-bold mb-2">{firstName} {lastName} </h1>
                <p className="font-bold mb-2">{jobTite} </p>
                <div className="text-sm space-x-2">
                    <span>{phone}</span>
                    <span>·</span>
                    <span>{email}</span>
                    <span>·</span>
                    {/* {links.map((link) => <a className="pl-1" href={link}>{link}</a>)} */}
                </div>
                <div className="text-sm mt-1">
                    <span>{city}</span>,
                    <span>{postalCode}</span>,
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

const Education = ({ allData }: { allData: { education: Array<{ degree: string; startDate: string; endDate: string; organization: string; location: string }> } }) => {
    const { education } = allData;

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-2">Education</h2>
            <div className="flex flex-col gap-4 mb-2">
                {
                    education.map((educationVal, index) => {
                        const { degree, startDate, endDate, organization, location } = educationVal
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
                                <div className="flex justify-between">
                                    <p>{organization}</p>
                                    <p>{location}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};

const Experience = ({ allData }: { allData: { experiences: Array<{ company: string; startDate: string; endDate: string; title: string; location: string; description: string }> } }) => {
    const { experiences } = allData;
    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Professional Experience</h2>
            <div className="space-y-6">
                {experiences.map((experienceVal) => {
                    const { company, startDate, endDate, title, location, description } = experienceVal
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
                            <div>
                                <p className="font-bold">{title}</p>
                                <p>{location}</p>
                            </div>
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


const Skills = ({ allData }: { allData: { skills: Array<{ category: string; items: string[] }> } }) => {
    const { skills } = allData;

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
        <section>
            <h2 className="text-lg font-bold uppercase mb-4">Skills & Certifications</h2>
            <div className="space-y-1 text-sm">
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
        </section>
    );
};


export const Azurill = ({ allData }: { allData: any }) => {
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