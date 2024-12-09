// import {
//   Award,
//   Certification,
//   CustomSection,
//   CustomSectionGroup,
//   Education,
//   Experience,
//   Interest,
//   Language,
//   Profile,
//   Project,
//   Publication,
//   Reference,
//   SectionKey,
//   SectionWithItem,
//   Skill,
//   URL,
//   Volunteer,
// } from "@reactive-resume/schema";
// import { cn, isEmptyString, isUrl } from "@reactive-resume/utils";
// import get from "lodash.get";
// import { Fragment } from "react";

// import { Picture } from "../components/picture";
// import { useArtboardStore } from "../store/artboard";
// import { TemplateProps } from "../types/template";

// const Header = () => {
//   const basics = useArtboardStore((state) => state.resume.basics);

//   return (
//     <div className="grid grid-cols-4 gap-x-6">
//       <div className="mt-1 space-y-2 text-right">
//         <Picture className="ml-auto" />
//       </div>

//       <div className="col-span-3 space-y-2">
//         <div>
//           <div className="text-2xl font-bold">{basics.name}</div>
//           <div className="text-base">{basics.headline}</div>
//         </div>

//         <div className="space-y-1 text-sm">
//           {basics.location && (
//             <div className="flex items-center gap-x-1.5">
//               <i className="ph ph-bold ph-map-pin text-primary" />
//               <div>{basics.location}</div>
//             </div>
//           )}
//           {basics.phone && (
//             <div className="flex items-center gap-x-1.5">
//               <i className="ph ph-bold ph-phone text-primary" />
//               <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
//                 {basics.phone}
//               </a>
//             </div>
//           )}
//           {basics.email && (
//             <div className="flex items-center gap-x-1.5">
//               <i className="ph ph-bold ph-at text-primary" />
//               <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
//                 {basics.email}
//               </a>
//             </div>
//           )}
//           <Link url={basics.url} />
//         </div>

//         <div className="flex flex-wrap gap-x-3 text-sm">
//           {basics.customFields.map((item) => (
//             <div key={item.id} className="flex items-center gap-x-1.5">
//               <i className={cn(`ph ph-bold ph-${item.icon}`, "text-primary")} />
//               {isUrl(item.value) ? (
//                 <a href={item.value} target="_blank" rel="noreferrer noopener nofollow">
//                   {item.name || item.value}
//                 </a>
//               ) : (
//                 <>
//                   <span className="text-primary">{item.name}</span>
//                   <span>{item.value}</span>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Summary = () => {
//   const section = useArtboardStore((state) => state.resume.sections.summary);

//   if (!section.visible || isEmptyString(section.content)) return null;

//   return (
//     <section id={section.id} className="grid grid-cols-4 gap-x-6">
//       <div className="text-right">
//         <h4 className="font-medium text-primary">{section.name}</h4>
//       </div>

//       <div className="col-span-3">
//         <div className="relative">
//           <hr className="mt-3 border-primary pb-3" />
//           <div className="absolute bottom-3 right-0 size-3 bg-primary" />
//         </div>

//         <div
//           dangerouslySetInnerHTML={{ __html: section.content }}
//           className="wysiwyg"
//           style={{ columns: section.columns }}
//         />
//       </div>
//     </section>
//   );
// };

// type LinkProps = {
//   url: URL;
//   icon?: React.ReactNode;
//   iconOnRight?: boolean;
//   label?: string;
//   className?: string;
// };

// const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
//   if (!isUrl(url.href)) return null;

//   return (
//     <div className="flex items-center gap-x-1.5">
//       {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
//       <a
//         href={url.href}
//         target="_blank"
//         rel="noreferrer noopener nofollow"
//         className={cn("inline-block", className)}
//       >
//         {label ?? (url.label || url.href)}
//       </a>
//       {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
//     </div>
//   );
// };

// type LinkedEntityProps = {
//   name: string;
//   url: URL;
//   separateLinks: boolean;
//   className?: string;
// };

// const LinkedEntity = ({ name, url, separateLinks, className }: LinkedEntityProps) => {
//   return !separateLinks && isUrl(url.href) ? (
//     <Link
//       url={url}
//       label={name}
//       icon={<i className="ph ph-bold ph-globe text-primary" />}
//       iconOnRight={true}
//       className={className}
//     />
//   ) : (
//     <div className={className}>{name}</div>
//   );
// };

// type SectionProps<T> = {
//   section: SectionWithItem<T> | CustomSectionGroup;
//   children?: (item: T) => React.ReactNode;
//   urlKey?: keyof T;
//   dateKey?: keyof T;
//   levelKey?: keyof T;
//   summaryKey?: keyof T;
//   keywordsKey?: keyof T;
// };

// const Section = <T,>({
//   section,
//   children,
//   urlKey,
//   dateKey,
//   summaryKey,
//   keywordsKey,
// }: SectionProps<T>) => {
//   if (!section.visible || section.items.length === 0) return null;

//   return (
//     <section id={section.id} className={cn("grid", dateKey !== undefined && "gap-y-4")}>
//       <div className="grid grid-cols-4 gap-x-6">
//         <div className="text-right">
//           <h4 className="font-medium text-primary">{section.name}</h4>
//         </div>

//         <div className="col-span-3">
//           <div className="relative">
//             <hr className="mt-3 border-primary" />
//             <div className="absolute bottom-0 right-0 size-3 bg-primary" />
//           </div>
//         </div>
//       </div>

//       {dateKey !== undefined && (
//         <div className="grid grid-cols-4 gap-x-6 gap-y-4">
//           {section.items
//             .filter((item) => item.visible)
//             .map((item) => {
//               const url = (urlKey && get(item, urlKey)) as URL | undefined;
//               const date = (dateKey && get(item, dateKey, "")) as string | undefined;
//               const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
//               const keywords = (keywordsKey && get(item, keywordsKey, [])) as string[] | undefined;

//               return (
//                 <Fragment key={item.id}>
//                   <div className="text-right font-medium text-primary">{date}</div>

//                   <div className="col-span-3 space-y-1">
//                     {children?.(item as T)}

//                     {url !== undefined && section.separateLinks && <Link url={url} />}

//                     {summary !== undefined && !isEmptyString(summary) && (
//                       <div dangerouslySetInnerHTML={{ __html: summary }} className="wysiwyg" />
//                     )}

//                     {keywords !== undefined && keywords.length > 0 && (
//                       <p className="text-sm">{keywords.join(", ")}</p>
//                     )}
//                   </div>
//                 </Fragment>
//               );
//             })}
//         </div>
//       )}

//       {dateKey === undefined && (
//         <div className="grid grid-cols-4 gap-x-6">
//           <div
//             className="col-span-3 col-start-2 grid gap-x-6 gap-y-3"
//             style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
//           >
//             {section.items
//               .filter((item) => item.visible)
//               .map((item) => {
//                 const url = (urlKey && get(item, urlKey)) as URL | undefined;
//                 const summary = (summaryKey && get(item, summaryKey, "")) as string | undefined;
//                 const keywords = (keywordsKey && get(item, keywordsKey, [])) as
//                   | string[]
//                   | undefined;

//                 return (
//                   <div key={item.id}>
//                     {children?.(item as T)}

//                     {url !== undefined && section.separateLinks && <Link url={url} />}

//                     {summary !== undefined && !isEmptyString(summary) && (
//                       <div dangerouslySetInnerHTML={{ __html: summary }} className="wysiwyg" />
//                     )}

//                     {keywords !== undefined && keywords.length > 0 && (
//                       <p className="text-sm">{keywords.join(", ")}</p>
//                     )}
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// const Profiles = () => {
//   const section = useArtboardStore((state) => state.resume.sections.profiles);
//   const fontSize = useArtboardStore((state) => state.resume.metadata.typography.font.size);

//   return (
//     <Section<Profile> section={section}>
//       {(item) => (
//         <div>
//           {isUrl(item.url.href) ? (
//             <Link
//               url={item.url}
//               label={item.username}
//               icon={
//                 <img
//                   className="ph"
//                   width={fontSize}
//                   height={fontSize}
//                   alt={item.network}
//                   src={`https://cdn.simpleicons.org/${item.icon}`}
//                 />
//               }
//             />
//           ) : (
//             <p>{item.username}</p>
//           )}
//           {!item.icon && <p className="text-sm">{item.network}</p>}
//         </div>
//       )}
//     </Section>
//   );
// };

// const Experience = () => {
//   const section = useArtboardStore((state) => state.resume.sections.experience);

//   return (
//     <Section<Experience> section={section} urlKey="url" dateKey="date" summaryKey="summary">
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.company}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.position}</div>
//           <div>{item.location}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Education = () => {
//   const section = useArtboardStore((state) => state.resume.sections.education);

//   return (
//     <Section<Education> section={section} urlKey="url" dateKey="date" summaryKey="summary">
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.institution}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.area}</div>
//           <div>{item.studyType}</div>
//           <div>{item.score}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Awards = () => {
//   const section = useArtboardStore((state) => state.resume.sections.awards);

//   return (
//     <Section<Award> section={section} urlKey="url" dateKey="date" summaryKey="summary">
//       {(item) => (
//         <div>
//           <div className="font-bold">{item.title}</div>
//           <LinkedEntity name={item.awarder} url={item.url} separateLinks={section.separateLinks} />
//         </div>
//       )}
//     </Section>
//   );
// };

// const Certifications = () => {
//   const section = useArtboardStore((state) => state.resume.sections.certifications);

//   return (
//     <Section<Certification> section={section} urlKey="url" dateKey="date" summaryKey="summary">
//       {(item) => (
//         <div>
//           <div className="font-bold">{item.name}</div>
//           <LinkedEntity name={item.issuer} url={item.url} separateLinks={section.separateLinks} />
//         </div>
//       )}
//     </Section>
//   );
// };

// const Skills = () => {
//   const section = useArtboardStore((state) => state.resume.sections.skills);

//   return (
//     <Section<Skill> section={section} levelKey="level" keywordsKey="keywords">
//       {(item) => (
//         <div>
//           <div className="font-bold">{item.name}</div>
//           <div>{item.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Interests = () => {
//   const section = useArtboardStore((state) => state.resume.sections.interests);

//   return (
//     <Section<Interest> section={section} keywordsKey="keywords">
//       {(item) => <div className="font-bold">{item.name}</div>}
//     </Section>
//   );
// };

// const Publications = () => {
//   const section = useArtboardStore((state) => state.resume.sections.publications);

//   return (
//     <Section<Publication> section={section} urlKey="url" dateKey="date" summaryKey="summary">
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.name}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.publisher}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Volunteer = () => {
//   const section = useArtboardStore((state) => state.resume.sections.volunteer);

//   return (
//     <Section<Volunteer> section={section} urlKey="url" dateKey="date" summaryKey="summary">
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.organization}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.position}</div>
//           <div>{item.location}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Languages = () => {
//   const section = useArtboardStore((state) => state.resume.sections.languages);

//   return (
//     <Section<Language> section={section} levelKey="level">
//       {(item) => (
//         <div>
//           <div className="font-bold">{item.name}</div>
//           <div>{item.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Projects = () => {
//   const section = useArtboardStore((state) => state.resume.sections.projects);

//   return (
//     <Section<Project>
//       section={section}
//       urlKey="url"
//       dateKey="date"
//       summaryKey="summary"
//       keywordsKey="keywords"
//     >
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.name}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const References = () => {
//   const section = useArtboardStore((state) => state.resume.sections.references);

//   return (
//     <Section<Reference> section={section} urlKey="url" summaryKey="summary">
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.name}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const Custom = ({ id }: { id: string }) => {
//   const section = useArtboardStore((state) => state.resume.sections.custom[id]);

//   return (
//     <Section<CustomSection>
//       section={section}
//       urlKey="url"
//       dateKey="date"
//       summaryKey="summary"
//       keywordsKey="keywords"
//     >
//       {(item) => (
//         <div>
//           <LinkedEntity
//             name={item.name}
//             url={item.url}
//             separateLinks={section.separateLinks}
//             className="font-bold"
//           />
//           <div>{item.description}</div>
//           <div>{item.location}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// const mapSectionToComponent = (section: SectionKey) => {
//   switch (section) {
//     case "profiles": {
//       return <Profiles />;
//     }
//     case "summary": {
//       return <Summary />;
//     }
//     case "experience": {
//       return <Experience />;
//     }
//     case "education": {
//       return <Education />;
//     }
//     case "awards": {
//       return <Awards />;
//     }
//     case "certifications": {
//       return <Certifications />;
//     }
//     case "skills": {
//       return <Skills />;
//     }
//     case "interests": {
//       return <Interests />;
//     }
//     case "publications": {
//       return <Publications />;
//     }
//     case "volunteer": {
//       return <Volunteer />;
//     }
//     case "languages": {
//       return <Languages />;
//     }
//     case "projects": {
//       return <Projects />;
//     }
//     case "references": {
//       return <References />;
//     }
//     default: {
//       if (section.startsWith("custom.")) return <Custom id={section.split(".")[1]} />;

//       return null;
//     }
//   }
// };

// export const Nosepass = ({ columns, isFirstPage = false }: TemplateProps) => {
//   const name = useArtboardStore((state) => state.resume.basics.name);

//   const [main, sidebar] = columns;

//   return (
//     <div className="p-custom space-y-6">
//       <div className="flex items-center justify-between">
//         <img alt="Europass Logo" className="h-[42px]" src="/assets/europass.png" />

//         <p className="font-medium text-primary">Curriculum Vitae</p>

//         <p className="font-medium text-primary">{name}</p>
//       </div>

//       {isFirstPage && <Header />}

//       <div className="space-y-4">
//         {main.map((section) => (
//           <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
//         ))}

//         {sidebar.map((section) => (
//           <Fragment key={section}>{mapSectionToComponent(section)}</Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

import { Image } from "@nextui-org/react";

import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="mb-6 text-sm">
      <h2 className="font-semibold mb-3 border-b border-gray-600 pb-1 flex items-center gap-2">
        <Mail className="" /> CONTACT ME
      </h2>
      <ul className="space-y-2 ">
        <li className="flex items-center gap-2">
          <Mail className=" " />
          <a href="mailto:john.doe@gmail.com" className="hover:underline ">
            john.doe@gmail.com
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          <a href="tel:+15551234567" className="hover:underline">
            (555) 123-4567
          </a>
        </li>
        <li className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Pleasantville, CA 94588</span>
        </li>
      </ul>
    </section>
  );
}

export function PersonalInformation() {
  return (
    <section className="mb-6 text-sm">
      <h2 className="text-lg font-semibold mb-3 border-b border-gray-600 pb-1 flex items-center gap-2">
        PERSONAL INFORMATION
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:john.doe@gmail.com" className="hover:underline">
            john@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href="tel:+15551234567" className="hover:underline">
            (555) 123-4567
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Pleasantville, CA 94588</span>
        </li>
      </ul>
    </section>
  );
}

import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <GraduationCap className="w-6 h-6 mr-2 text-blue-500" /> EDUCATION
      </h2>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 text-lg">
          University of California
        </h3>
        <p className="text-gray-700">Bachelor's in Computer Science</p>
        <p className="text-gray-600 mt-1">Aug 2012 - May 2016</p>
      </div>
    </section>
  );
}

export function Header() {
  return (
    <header className="text-center">
      <h1 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        John Doe
      </h1>
      <h2 className="text-md font-semibold text-gray-300">
        Creative and Innovative Web Developer
      </h2>
    </header>
  );
}

import { User } from "lucide-react";

export function Summary() {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <User className="w-6 h-6 mr-2 text-blue-500" /> SUMMARY
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Innovative Web Developer with 5 years of experience in building
        impactful and user-friendly websites and applications. Specializes in
        front-end technologies and passionate about modern web standards and
        cutting-edge development techniques. Proven track record of leading
        successful projects from concept to deployment.
      </p>
    </section>
  );
}



export function Profiles() {
  return (
    <section className="mb-6 text-sm">
      <h2 className="font-semibold mb-3 border-b border-gray-600 pb-1">PROFILES</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          <a href="https://linkedin.com/in/johndoe" className="hover:underline">
            linkedin.com/joh
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Github className="w-4 h-4" />
          <a href="https://github.com/johndoe" className="hover:underline">
            github.com/john
          </a>
        </li>
      </ul>
    </section>
  )
}



import { Briefcase } from "lucide-react";

export function Projects() {
  const projects = [
    "E-commerce Website",
    "Banking Portal",
    "News Website",
    "Books Store",
    "YouTube Clone",
    "Budget Tracking Application",
    "Google Meet Layout",
  ];

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> PROJECTS
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex items-center bg-gray-100 rounded-lg p-2"
          >
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-gray-700">{project}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Creative Solutions Inc.",
      position: "Senior Web Developer",
      location: "San Francisco, CA",
      period: "Jan 2019 - Present",
      website: "https://creativesolutions.inc/",
      achievements: [
        "Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.",
        "Developed and implemented a new responsive framework, improving cross-device compatibility.",
        "Mentored a team of four junior developers, fostering a culture of technical excellence."
      ]
    },
    {
      company: "TechAdvancers",
      position: "Web Developer",
      location: "San Jose, CA",
      period: "Jun 2016 - Dec 2018",
      website: "https://techadvancers.com/",
      achievements: [
        "Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.",
        "Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.",
        "Optimized application performance, achieving a 30% reduction in load times."
      ]
    }
  ]

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> EXPERIENCE
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{exp.company}</h3>
                <p className="text-gray-700">{exp.position}</p>
                <p className="text-gray-600">{exp.location}</p>
              </div>
              <span className="text-gray-600 text-sm">{exp.period}</span>
            </div>
            <a href={exp.website} className="text-blue-500 text-sm hover:underline mb-2 block">
              {exp.website}
            </a>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}


import { Linkedin, Github } from 'lucide-react'


export function SocialProfiles() {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-1">
        PROFILES
      </h2>
      <div className="space-y-2 text-sm">
        <a
          href="https://linkedin.com/in/johndoe"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span>linkedin.com/in/johndoe</span>
        </a>
        <a
          href="https://github.com/johndoe"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>github.com/johndoe</span>
        </a>
      </div>
    </section>
  );
}

export const Nosepass = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
                  alt="John Doe"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <Header />
            </div>
            <PersonalInformation />
            <Profiles/>
          </div>
          <div className="md:col-span-2 p-6">
            <Summary />
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};
