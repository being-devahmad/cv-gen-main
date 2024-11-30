interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Header = () => (
    <div className="flex flex-col items-center justify-center space-y-2 pb-2 text-center">
        <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
        <div>
            <div className="text-2xl font-bold">John Doe</div>
            <div className="text-base">Software Developer</div>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm">
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
        </div>
    </div>
);

const Section = ({ title, children }: SectionProps) => (
    <section className="grid">
        <div className="mb-2 font-bold text-primary">
            <h4>{title}</h4>
        </div>
        <div className="grid gap-x-6 gap-y-3">
            {children}
        </div>
    </section>
);

const Experience = () => (
    <Section title="Experience">
        <div className="relative space-y-2 border-primary border-l pl-4">
            <div>
                <div className="font-bold">Software Developer</div>
                <div>Tech Company Inc.</div>
                <div>New York, NY</div>
                <div className="font-bold">2018 - Present</div>
            </div>
            <div className="wysiwyg">
                <ul>
                    <li>Developed and maintained web applications using React and Node.js</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                </ul>
            </div>
        </div>
    </Section>
);

const Education = () => (
    <Section title="Education">
        <div className="relative space-y-2 border-primary border-l pl-4">
            <div>
                <div className="font-bold">Bachelor of Science in Computer Science</div>
                <div>University of Technology</div>
                <div>GPA: 3.8/4.0</div>
                <div className="font-bold">2014 - 2018</div>
            </div>
        </div>
    </Section>
);

const Skills = () => (
    <Section title="Skills">
        <div className="relative space-y-2 border-primary border-l pl-4">
            <div>
                <div className="font-bold">Programming Languages</div>
                <div>JavaScript, Python, Java</div>
            </div>
            <div>
                <div className="font-bold">Web Technologies</div>
                <div>React, Node.js, HTML, CSS</div>
            </div>
        </div>
    </Section>
);

export const Azurill = () => {
    return (
        <div className="p-custom space-y-3">
            <Header />
            <div className="grid grid-cols-3 gap-x-4">
                <div className="sidebar group space-y-4">
                    <Skills />
                </div>
                <div className="main group col-span-2 space-y-4">
                    <Experience />
                    <Education />
                </div>
            </div>
        </div>
    );
};

