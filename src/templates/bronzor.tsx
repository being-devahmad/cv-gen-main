interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Header = () => (
    <div className="flex flex-col items-center space-y-2 text-center">
        <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
        <div>
            <div className="text-2xl font-bold">John Doe</div>
            <div className="text-base">Software Developer</div>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
            <div className="flex items-center gap-x-1.5">
                <i className="ph ph-bold ph-map-pin text-primary" />
                <div>New York, NY</div>
            </div>
            <div className="flex items-center gap-x-1.5">
                <i className="ph ph-bold ph-phone text-primary" />
                <a href="tel:+1234567890" target="_blank" rel="noreferrer">
                    (123) 456-7890
                </a>
            </div>
            <div className="flex items-center gap-x-1.5">
                <i className="ph ph-bold ph-at text-primary" />
                <a href="mailto:john.doe@example.com" target="_blank" rel="noreferrer">
                    john.doe@example.com
                </a>
            </div>
            <div className="flex items-center gap-x-1.5">
                <i className="ph ph-bold ph-link text-primary" />
                <a href="https://johndoe.com" target="_blank" rel="noreferrer noopener nofollow">
                    johndoe.com
                </a>
            </div>
        </div>
    </div>
);

const Section = ({ title, children }: SectionProps) => (
    <section className="grid grid-cols-5 border-t pt-2.5">
        <div>
            <h4 className="text-base font-bold">{title}</h4>
        </div>
        <div className="col-span-4 grid gap-x-6 gap-y-3">
            {children}
        </div>
    </section>
);

const Experience = () => (
    <Section title="Experience">
        <div className="flex items-start justify-between">
            <div className="text-left">
                <div className="font-bold">Tech Company Inc.</div>
                <div>Software Developer</div>
            </div>
            <div className="shrink-0 text-right">
                <div className="font-bold">2018 - Present</div>
                <div>New York, NY</div>
            </div>
        </div>
        <div className="wysiwyg">
            <ul>
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
            </ul>
        </div>
    </Section>
);

const Education = () => (
    <Section title="Education">
        <div className="flex items-start justify-between">
            <div className="text-left">
                <div className="font-bold">University of Technology</div>
                <div>Bachelor of Science in Computer Science</div>
                <div>GPA: 3.8/4.0</div>
            </div>
            <div className="shrink-0 text-right">
                <div className="font-bold">2014 - 2018</div>
                <div>Bachelor's Degree</div>
            </div>
        </div>
    </Section>
);

const Skills = () => (
    <Section title="Skills">
        <div className="space-y-0.5">
            <div className="font-bold">Programming Languages</div>
            <div>JavaScript, Python, Java</div>
        </div>
        <div className="space-y-0.5">
            <div className="font-bold">Web Technologies</div>
            <div>React, Node.js, HTML, CSS</div>
        </div>
    </Section>
);

const Projects = () => (
    <Section title="Projects">
        <div className="flex items-start justify-between">
            <div className="text-left">
                <div className="font-bold">Personal Portfolio Website</div>
                <div>Developed a responsive portfolio website using React and Tailwind CSS</div>
            </div>
            <div className="shrink-0 text-right">
                <div className="font-bold">2023</div>
            </div>
        </div>
    </Section>
);

const Certifications = () => (
    <Section title="Certifications">
        <div className="flex items-start justify-between">
            <div className="text-left">
                <div className="font-bold">AWS Certified Developer</div>
                <div>Amazon Web Services</div>
            </div>
            <div className="shrink-0 text-right">
                <div className="font-bold">2022</div>
            </div>
        </div>
    </Section>
);

export const Bronzor = () => {
    return (
        <div className="p-custom space-y-4">
            <Header />
            <div className="space-y-4">
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
            </div>
        </div>
    );
};

