import { NextUIProvider } from "@nextui-org/react";
import { MapPin, Phone, Mail, Linkedin, Github, Globe } from "lucide-react";
import { Image } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between border-b pb-6 mb-8 w-full overflow-x-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="flex items-center space-x-4 w-full ms-5 mt-4">
        <div className=" w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-300">
            Creative and Innovative Web Developer
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 text-gray-300 text-sm text-center w-full">
        <p>Pleasantville, CA 94588</p>
        <p>(555) 123-4567 · john.doe@gmail.com</p>
        <p>https://johndoe.me</p>
      </div>
      <div className="flex space-x-6 mt-4 md:mt-0 w-full justify-center">
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500  flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Linkedin size={20} className="" />
          <span className="mt-1">LinkedIn</span>
        </a>
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Github size={20} />
          <span className="mt-1">GitHub</span>
        </a>
        <a
          href="https://johndoe.me"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Globe size={20} />
          <span className="mt-1">Portfolio</span>
        </a>
      </div>
    </header>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const Summary = () => (
  <Section title="Summary">
    <p className="text-gray-700">
      Innovative Web Developer with 5 years of experience building impactful and
      user-friendly websites and applications. Specializes in front-end
      technologies and modern web standards with a proven track record of
      leading successful projects from concept to deployment.
    </p>
  </Section>
);

const Experience = () => (
  <Section title="Experience">
    <div className="mb-6">
      <h3 className="font-bold text-gray-800">Creative Solutions Inc.</h3>
      <p className="text-gray-500 text-sm">
        Senior Web Developer · January 2019 - Present
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>
          Redesigned the main product website, increasing user engagement by
          40%.
        </li>
        <li>
          Developed a responsive framework for improved cross-device
          compatibility.
        </li>
        <li>
          Mentored a team of junior developers, fostering technical excellence.
        </li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-gray-800">TechAdvancers</h3>
      <p className="text-gray-500 text-sm">
        Web Developer · June 2016 - December 2018
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>
          Collaborated with a team to develop high-quality web applications
          using React.js and Node.js.
        </li>
        <li>
          Integrated third-party services like Stripe and Twilio to enhance
          functionality.
        </li>
        <li>Optimized application performance, reducing load times by 30%.</li>
      </ul>
    </div>
  </Section>
);

const Education = () => (
  <Section title="Education">
    <div>
      <h3 className="font-bold text-gray-800">University of California</h3>
      <p className="text-gray-500 text-sm">
        Bachelor of Science in Computer Science · August 2012 - May 2016
      </p>
    </div>
  </Section>
);

const Projects = () => (
  <Section title="Projects">
    <ul className="list-disc list-inside text-gray-700">
      <li>
        <strong>E-Commerce Platform:</strong> Led the development of a
        full-stack platform, improving sales conversion by 25%.
      </li>
      <li>
        <strong>Interactive Dashboard:</strong> Designed an analytics dashboard
        for a SaaS application, enhancing data visualization.
      </li>
    </ul>
  </Section>
);

const Certifications = () => (
  <Section title="Certifications">
    <ul className="list-disc list-inside text-gray-700">
      <li>Certified Web Developer - FreeCodeCamp</li>
      <li>Advanced JavaScript Specialist - Coursera</li>
    </ul>
  </Section>
);

const Skills = () => (
  <Section title="Skills">
    <div className="grid grid-cols-2 gap-4 text-gray-700">
      <div>
        <strong>Web Technologies:</strong> HTML5, CSS3, JavaScript, TypeScript
      </div>
      <div>
        <strong>Frameworks:</strong> React.js, Angular, Next.js, Vue.js
      </div>
      <div>
        <strong>Tools:</strong> Git, Docker, Webpack, Jenkins
      </div>
      <div>
        <strong>Soft Skills:</strong> Team Collaboration, Problem Solving,
        Leadership
      </div>
    </div>
  </Section>
);

export const Onyx = () => {
  return (
    <NextUIProvider>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
        <Header />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Summary />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Experience />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Education />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Projects />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Certifications />
        <div className="border-b-2 border-gray-300 my-6"></div>
        <Skills />
      </div>
    </NextUIProvider>
  );
};
