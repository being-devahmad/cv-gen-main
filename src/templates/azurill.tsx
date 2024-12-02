import { Fragment } from "react";

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 pb-2 text-center">
            <div>
                <div className="text-2xl font-bold">Ahmad Owais</div>
                <div className="text-base">Software Engineer</div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm">
                <div className="flex items-center gap-x-1.5">
                    <i className="ph ph-bold ph-map-pin text-primary" />
                    <div>Faisalabad, Pakistan</div>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <i className="ph ph-bold ph-phone text-primary" />
                    <a href={`tel:03106938050`} target="_blank" rel="noreferrer">
                        03106938050
                    </a>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <i className="ph ph-bold ph-at text-primary" />
                    <a href={`mailto:ahmadowais41@gmail.com`} target="_blank" rel="noreferrer">
                        ahmadowais41@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

const Summary = () => {
    return (
        <section id="summary">
            <div className="mb-2 hidden font-bold text-primary group-[.main]:block">
                <h4>Summary</h4>
            </div>

            <div className="mb-2 hidden items-center gap-x-2 text-center font-bold text-primary group-[.sidebar]:flex">
                <div className="size-1.5 rounded-full border border-primary" />
                <h4>Summary</h4>
                <div className="size-1.5 rounded-full border border-primary" />
            </div>

            <main className="relative space-y-2 border-l border-primary pl-4">
                <div className="absolute left-[-4.5px] top-[8px] hidden size-[8px] rounded-full bg-primary group-[.main]:block" />

                <div className="wysiwyg">
                    Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.
                </div>
            </main>
        </section>
    );
};

const Rating = ({ level }: { level: number }) => (
    <div className="relative h-1 w-[128px] group-[.sidebar]:mx-auto">
        <div className="absolute inset-0 h-1 w-[128px] rounded bg-primary opacity-25" />
        <div
            className="absolute inset-0 h-1 rounded bg-primary"
            style={{ width: `${level * 25.6}px` }}
        />
    </div>
);

const Link = ({ url, label }: { url: string; label: string }) => {
    return (
        <div className="flex items-center gap-x-1.5">
            <i className="ph ph-bold ph-link text-primary" />
            <a
                href={url}
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="inline-block"
            >
                {label}
            </a>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="grid">
            <div className="mb-2 hidden font-bold text-primary group-[.main]:block">
                <h4>Experience</h4>
            </div>

            <div className="mx-auto mb-2 hidden items-center gap-x-2 text-center font-bold text-primary group-[.sidebar]:flex">
                <div className="size-1.5 rounded-full border border-primary" />
                <h4>Experience</h4>
                <div className="size-1.5 rounded-full border border-primary" />
            </div>

            <div
                className="grid gap-x-6 gap-y-3 group-[.sidebar]:mx-auto group-[.sidebar]:text-center"
                style={{ gridTemplateColumns: `repeat(1, 1fr)` }}
            >
                <div className="relative space-y-2 border-primary group-[.main]:border-l group-[.main]:pl-4">
                    <div>
                        <div className="font-bold">Software Engineer</div>
                        <div>Tech Company Inc.</div>
                        <div>New York, USA</div>
                        <div className="font-bold">2018 - Present</div>
                    </div>

                    <div className="wysiwyg">
                        Developed and maintained web applications using React and Node.js.
                    </div>

                    <Link url="https://techcompany.com" label="Company Website" />

                    <div className="absolute left-[-4.5px] top-px hidden size-[8px] rounded-full bg-primary group-[.main]:block" />
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    return (
        <section id="education" className="grid">
            <div className="mb-2 hidden font-bold text-primary group-[.main]:block">
                <h4>Education</h4>
            </div>

            <div className="mx-auto mb-2 hidden items-center gap-x-2 text-center font-bold text-primary group-[.sidebar]:flex">
                <div className="size-1.5 rounded-full border border-primary" />
                <h4>Education</h4>
                <div className="size-1.5 rounded-full border border-primary" />
            </div>

            <div
                className="grid gap-x-6 gap-y-3 group-[.sidebar]:mx-auto group-[.sidebar]:text-center"
                style={{ gridTemplateColumns: `repeat(1, 1fr)` }}
            >
                <div className="relative space-y-2 border-primary group-[.main]:border-l group-[.main]:pl-4">
                    <div>
                        <div className="font-bold">University of Technology</div>
                        <div>Computer Science</div>
                        <div>3.8 GPA</div>
                        <div>Bachelor's Degree</div>
                        <div className="font-bold">2014 - 2018</div>
                    </div>

                    <div className="absolute left-[-4.5px] top-px hidden size-[8px] rounded-full bg-primary group-[.main]:block" />
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="grid">
            <div className="mb-2 hidden font-bold text-primary group-[.main]:block">
                <h4>Skills</h4>
            </div>

            <div className="mx-auto mb-2 hidden items-center gap-x-2 text-center font-bold text-primary group-[.sidebar]:flex">
                <div className="size-1.5 rounded-full border border-primary" />
                <h4>Skills</h4>
                <div className="size-1.5 rounded-full border border-primary" />
            </div>

            <div
                className="grid gap-x-6 gap-y-3 group-[.sidebar]:mx-auto group-[.sidebar]:text-center"
                style={{ gridTemplateColumns: `repeat(2, 1fr)` }}
            >
                <div className="relative space-y-2 border-primary group-[.main]:border-l group-[.main]:pl-4">
                    <div>
                        <div className="font-bold">React</div>
                        <div>Advanced</div>
                    </div>
                    <Rating level={4} />
                    <div className="absolute left-[-4.5px] top-px hidden size-[8px] rounded-full bg-primary group-[.main]:block" />
                </div>
                <div className="relative space-y-2 border-primary group-[.main]:border-l group-[.main]:pl-4">
                    <div>
                        <div className="font-bold">Node.js</div>
                        <div>Intermediate</div>
                    </div>
                    <Rating level={3} />
                    <div className="absolute left-[-4.5px] top-px hidden size-[8px] rounded-full bg-primary group-[.main]:block" />
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="grid">
            <div className="mb-2 hidden font-bold text-primary group-[.main]:block">
                <h4>Projects</h4>
            </div>

            <div className="mx-auto mb-2 hidden items-center gap-x-2 text-center font-bold text-primary group-[.sidebar]:flex">
                <div className="size-1.5 rounded-full border border-primary" />
                <h4>Projects</h4>
                <div className="size-1.5 rounded-full border border-primary" />
            </div>

            <div
                className="grid gap-x-6 gap-y-3 group-[.sidebar]:mx-auto group-[.sidebar]:text-center"
                style={{ gridTemplateColumns: `repeat(1, 1fr)` }}
            >
                <div className="relative space-y-2 border-primary group-[.main]:border-l group-[.main]:pl-4">
                    <div>
                        <div className="font-bold">Personal Portfolio</div>
                        <div>A showcase of my work and skills</div>
                        <div className="font-bold">2023</div>
                    </div>
                    <div className="wysiwyg">
                        Developed a responsive personal portfolio website using React and Tailwind CSS.
                    </div>
                    <p className="text-sm">React, Tailwind CSS, Responsive Design</p>
                    <Link url="https://myportfolio.com" label="View Project" />
                    <div className="absolute left-[-4.5px] top-px hidden size-[8px] rounded-full bg-primary group-[.main]:block" />
                </div>
            </div>
        </section>
    );
};

export const Azurill = ({ isFirstPage = true }) => {
    const main = ["summary", "experience", "education"];
    const sidebar = ["skills", "projects"];

    return (
        <div className="p-custom space-y-3">
            {isFirstPage && <Header />}

            <div className="grid grid-cols-3 gap-x-4">
                <div className="sidebar group space-y-4">
                    {sidebar.map((section) => (
                        <Fragment key={section}>
                            {section === "skills" && <Skills />}
                            {section === "projects" && <Projects />}
                        </Fragment>
                    ))}
                </div>

                <div className="main group col-span-2 space-y-4">
                    {main.map((section) => (
                        <Fragment key={section}>
                            {section === "summary" && <Summary />}
                            {section === "experience" && <Experience />}
                            {section === "education" && <Education />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

