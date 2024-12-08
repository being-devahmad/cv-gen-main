import { Divider } from "@nextui-org/react"

const Header = () => {


    const contactDetails = [{
        name: "Ahmad Owais",
        phone: "+92 3106938050",
        email: "ahmadowais41@gmail.com",
        links: ["https://github.com/being-devahmad", "https://github.com/being-devahmad"],
        city: "Multan",
        postalCode: "66000",
        country: "Pakistan"
    }]

    return (
        <header className="text-center mb-8">
            {
                contactDetails.map((contactInfoVal) => {
                    const { name, phone, email, links, city, postalCode, country } = contactInfoVal
                    return (
                        <div>
                            <h1 className="text-4xl font-bold mb-2">{name}</h1>
                            <div className="text-sm space-x-2">
                                <span>{phone}</span>
                                <span>·</span>
                                <span>{email}</span>
                                <span>·</span>
                                {links.map((link) => <a className="pl-1" href={link}>{link}</a>)}
                            </div>
                            <div className="text-sm mt-1">
                                <span>{city}</span>,
                                <span>{postalCode}</span>,
                                <span>{country}</span>
                            </div>
                        </div>
                    )
                })
            }
        </header>
    )
}

const Education = () => {

    const education = [
        {
            degree: "Bachelors in Information Technology",
            date: "2021 - Present",
            organization: "Government College University Faisalabad"
        },
        {
            degree: "Intermediate",
            date: "2019 - 2021",
            organization: "Nishat College of Science of Multan"
        }
    ]

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-2">Education</h2>
            <div className="flex flex-col gap-4">
                {
                    education.map((educationVal) => {
                        const { degree, date, organization } = educationVal
                        return (
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-bold">{degree}</h3>
                                    <p className="text-sm">{date}</p>
                                </div>
                                <div>{organization}</div>

                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

const Experience = () => {

    const experiences = [
        {
            company: "Arrowai Industries",
            date: "Oct 2023 - Present",
            designation: "Business Analyst Intern",
            description: "Developed and implemented a streamlined process for gathering business requirements, reducing project delivery time by 15%. Develop and implemented a standardised reporting framework, resulting in improved visibility of key performance metrics and enabling data-driven decision-making at all levels of the organisation."
        },
        {
            company: "Arrowai Industries",
            date: "Oct 2023 - Present",
            designation: "Business Analyst Intern",
            description: "Developed and implemented a streamlined process for gathering business requirements, reducing project delivery time by 15%. Develop and implemented a standardised reporting framework, resulting in improved visibility of key performance metrics and enabling data-driven decision-making at all levels of the organisation."
        }
    ]

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Professional Experience</h2>

            <div className="space-y-6">
                <div className="flex justify-between items-start flex-col gap-4">
                    {
                        experiences.map((experienceVal) => {
                            const { company, date, description, designation } = experienceVal
                            return (
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="font-bold">{company}</h3>
                                        <p className="text-sm">{date}</p>
                                    </div>
                                    <div className="font-bold">{designation}</div>
                                    <p className="text-sm mt-2">
                                        {description}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


const Projects = () => {


    const projects = [
        {
            title: "StoreIt - Google Drive Clone",
            date: "Aug 2024 - Oct 2024",
            technologies: ["React.js, ", "Firebase, ", "Node.js, ", "Tailwind CSS"],
            description: "Built a cloud storage application with features for file upload, sharing, and user authentication using Firebase and React."
        },
        {
            title: "Course Management System",
            date: "Jan 2024 - Jun 2024",
            technologies: ["React.js, ", "Tailwind CSS, ", "Node.js, ", "MongoDB"],
            description: "Created a course management platform for educational institutions with user-friendly interfaces, CRUD operations, and role-based access."
        },
        {
            title: "E-Commerce Store",
            date: "May 2023 - Dec 2023",
            technologies: ["Next.js, ", "Shopify, ", "GraphQL, ", "TypeScript"],
            description: "Developed a fully functional e-commerce platform integrated with Shopify, implementing features such as product filtering, payment gateways, and SEO optimization."
        }
    ];


    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Projects</h2>

            <div className="space-y-6">
                <div className="flex justify-between items-start flex-col gap-4">
                    {
                        projects.map((projectValues) => {
                            const { title, technologies, date, description } = projectValues
                            return (
                                <div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="flex gap-4">
                                                <span className="font-bold">{title}</span>
                                                <span>
                                                    <Divider orientation="vertical" className="bg-gray-500 h-full" />
                                                </span>
                                                <span className="italic">{technologies}</span>
                                            </p>
                                        </div>
                                        <p className="text-sm">{date}</p>
                                    </div>
                                    <div className="font-bold">Business Analyst Intern</div>
                                    <p className="text-sm mt-2">
                                        {description}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}


const Skills = () => {
    return (
        <section>
            <h2 className="text-lg font-bold uppercase mb-4">Skills & Certifications</h2>
            <div className="space-y-1 text-sm">
                <div className="flex gap-3">
                    <div className="font-bold">Languages : </div>
                    <div>HTML , CSS , Javascript , Typescript</div>
                </div>
                <div className="flex gap-3">
                    <div className="font-bold">Libraries : </div>
                    <div>React.js , Express.js , Node.js</div>
                </div>
                <div className="flex gap-3">
                    <div className="font-bold">Frameworks : </div>
                    <div>Next.js , Bootstrap , Tailwind CSS</div>
                </div>
                <div className="flex gap-3">
                    <div className="font-bold">Databases : </div>
                    <div>MySQL , Firebase , Supabase , MongoDB</div>
                </div>
                <div className="flex gap-3">
                    <div className="font-bold">Developer Tools : </div>
                    <div>Git/Github , BitBucket , Jira</div>
                </div>
            </div>
        </section>
    )
}


export const Azurill = () => {
    return (
        <div className="max-w-[800px] mx-auto p-8 font-sans">
            <Header />
            <Education />
            <Experience />
            <Projects />
            <Skills />
        </div>
    )
}