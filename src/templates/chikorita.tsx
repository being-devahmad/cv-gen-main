import React, { Fragment } from "react";

const Header = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
      <div className="space-y-2">
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
    </div>
  );
};

const Summary = () => {
  return (
    <section id="summary">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">Summary</h4>
      <div className="wysiwyg">
        Experienced software developer with a passion for creating efficient and scalable applications.
        Skilled in JavaScript, React, and Node.js with a strong foundation in computer science principles.
      </div>
    </section>
  );
};

const Rating = ({ level }: { level: number }) => (
  <div className="flex items-center gap-x-1.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className={`size-2 rounded-full border border-primary group-[.sidebar]:border-background
           ${level > index ? "bg-primary group-[.sidebar]:bg-background" : ""
          }`}
      />
    ))}
  </div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Software Developer",
      date: "2018 - Present",
      location: "New York, NY",
      description: "Led development of multiple web applications using React and Node.js."
    },
    {
      company: "WebDev Co.",
      position: "Software Developer",
      date: "2015 - 2018",
      location: "Boston, MA",
      description: "Developed and maintained e-commerce platforms for various clients."
    }
  ];

  return (
    <section id="experience">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">Experience</h4>
      <div className="grid gap-y-3">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
              <div className="text-left">
                <div className="font-bold">{exp.company}</div>
                <div>{exp.position}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-bold">{exp.date}</div>
                <div>{exp.location}</div>
              </div>
            </div>
            <div className="wysiwyg">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  const educations = [
    {
      institution: "University of Technology",
      area: "Computer Science",
      studyType: "Bachelor's Degree",
      date: "2011 - 2015",
      score: "GPA: 3.8/4.0"
    }
  ];

  return (
    <section id="education">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">Education</h4>
      <div className="grid gap-y-3">
        {educations.map((edu, index) => (
          <div key={index} className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
            <div className="text-left">
              <div className="font-bold">{edu.institution}</div>
              <div>{edu.area}</div>
              <div>{edu.score}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-bold">{edu.date}</div>
              <div>{edu.studyType}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 5 },
    { name: "React", level: 4 },
    { name: "Node.js", level: 4 },
    { name: "Python", level: 3 },
    { name: "SQL", level: 4 }
  ];

  return (
    <section id="skills">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">Skills</h4>
      <div className="grid gap-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="font-bold">{skill.name}</div>
            <Rating level={skill.level} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Developed a full-stack e-commerce solution using React and Node.js.",
      date: "2020",
      url: "https://github.com/johndoe/ecommerce-platform"
    },
    {
      name: "Task Management App",
      description: "Created a responsive task management application with React and Firebase.",
      date: "2019",
      url: "https://github.com/johndoe/task-manager"
    }
  ];

  return (
    <section id="projects">
      <h4 className="mb-2 border-b pb-0.5 text-sm font-bold">Projects</h4>
      <div className="grid gap-y-3">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start justify-between group-[.sidebar]:flex-col group-[.sidebar]:items-start">
            <div className="text-left">
              <div className="font-bold">
                <a href={project.url} target="_blank" rel="noreferrer noopener nofollow">
                  {project.name}
                </a>
              </div>
              <div>{project.description}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-bold">{project.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Chikorita = () => {
  const main = ["summary", "experience", "education"];
  const sidebar = ["skills", "projects"];

  return (
    <div className="grid min-h-[inherit] grid-cols-3">
      <div className="main p-custom group col-span-2 space-y-4">
        <Header />
        {main.map((section) => (
          <Fragment key={section}>
            {section === "summary" && <Summary />}
            {section === "experience" && <Experience />}
            {section === "education" && <Education />}
          </Fragment>
        ))}
      </div>
      <div className="sidebar p-custom group h-full space-y-4 bg-primary p-4 text-background">
        {sidebar.map((section) => (
          <Fragment key={section}>
            {section === "skills" && <Skills />}
            {section === "projects" && <Projects />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

