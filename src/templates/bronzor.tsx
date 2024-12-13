import { MapPin, Phone, Mail, Linkedin, Github, Globe } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-lg text-gray-600">Creative and Innovative Web Developer</p>
        <div className="flex flex-wrap gap-6 mt-2 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>📍 Pleasantville, CA 94588</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span>📞 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span>📧 john.doe@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={20} />
            <span>🔗 https://johndoe.me/</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://linkedin.com/in/johndoe" className="text-blue-600 flex items-center gap-1">
              <Linkedin size={20} />
              <span>johndoe</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/johndoe" className="text-gray-800 flex items-center gap-1">
              <Github size={20} />
              <span>johndoe</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



const Summary = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-3">Summary</h2>
      <p className="text-gray-700">
        Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in front-end technologies and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.
      </p>
    </div>
  )
}

const Experience = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Experience</h2>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Creative Solutions Inc.</h3>
              <p className="text-gray-600">Senior Web Developer</p>
              <a href="https://creativesolutions.inc/" className="text-blue-600 text-sm">https://creativesolutions.inc/</a>
            </div>
            <div className="text-right">
              <p>January 2019 to Present</p>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</li>
            <li>Developed and implemented a new responsive framework, improving cross-device compatibility.</li>
            <li>Mentored a team of four junior developers, fostering a culture of technical excellence.</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">TechAdvancers</h3>
              <p className="text-gray-600">Web Developer</p>
              <a href="https://techadvancers.com/" className="text-blue-600 text-sm">https://techadvancers.com/</a>
            </div>
            <div className="text-right">
              <p>June 2016 to December 2018</p>
              <p className="text-gray-600">San Jose, CA</p>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</li>
            <li>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</li>
            <li>Optimized application performance, achieving a 30% reduction in load times.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Education = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Education</h2>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold">University of California</h3>
          <p className="text-gray-600">Computer Science</p>
          <p className="text-gray-600">Berkeley, CA</p>
          <a href="https://www.universityofcalifornia.edu/" className="text-blue-600 text-sm">https://www.universityofcalifornia.edu/</a>
        </div>
        <div className="text-right">
          <p>August 2012 to May 2016</p>
          <p className="text-gray-600">Bachelor of Science</p>
        </div>
      </div>
    </div>
  )
}

const Profiles = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Projects</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold">E-Commerce Platform</h3>
          <p className="text-gray-600">Project Lead</p>
          <p className="text-gray-700">Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>
        </div>
        <div>
          <h3 className="font-bold">Interactive Dashboard</h3>
          <p className="text-gray-600">Frontend Developer</p>
          <p className="text-gray-700">Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Skills</h2>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-2">Web Technologies</h3>
          <p className="text-gray-600">Advanced</p>
          <p className="text-gray-700">HTML5, JavaScript, PHP, Python</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Web Frameworks</h3>
          <p className="text-gray-600">Intermediate</p>
          <p className="text-gray-700">React.js, Angular, Vue.js, Laravel, Django</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Tools</h3>
          <p className="text-gray-600">Intermediate</p>
          <p className="text-gray-700">Webpack, Git, Jenkins, Docker, JIRA</p>
        </div>
      </div>
    </div>
  )
}

const Certifications = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Certifications</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold">Full-Stack Web Development</h3>
          <p className="text-gray-600">CodeAcademy</p>
          <p className="text-gray-700">2020</p>
        </div>
        <div>
          <h3 className="font-bold">AWS Certified Developer</h3>
          <p className="text-gray-600">Amazon Web Services</p>
          <p className="text-gray-700">2019</p>
        </div>
      </div>
    </div>
  )
}

const Languages = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Languages</h2>
      <ul className="list-disc ml-5 text-gray-700">
        <li>English (Native)</li>
        <li>Spanish (Professional Working Proficiency)</li>
      </ul>
    </div>
  )
}

const References = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">References</h2>
      <p className="text-gray-700">Available upon request</p>
    </div>
  )
}

const Bronzor = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 min-h-screen">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Profiles />
      <Skills />
      <Certifications />
      <Languages />
      <References />
    </div>
  );
};

export default Bronzor;