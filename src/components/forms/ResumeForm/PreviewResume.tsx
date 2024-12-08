// import React from 'react';
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@nextui-org/button';

// interface PreviewResumeProps {
//     allData: any; // Pass the full form data object
//     setActiveTab: (tab: number) => void; // For navigation between tabs
// }

// export default function PreviewResume({ allData, setActiveTab }: PreviewResumeProps) {
//     return (
//         <Card className="p-6 space-y-8">
//             <h1 className="text-3xl font-semibold mb-6">Preview Page</h1>

//             {/* Personal Details Section */}
//             <section className="space-y-4 border rounded-lg border-light-gray p-5 bg-white">
//                 <h2 className="text-2xl font-medium">Personal Details</h2>
//                 <p>
//                     <strong>Name:</strong> {allData.firstName || 'N/A'} {allData?.lastName}
//                 </p>
//                 <p>
//                     <strong>Email:</strong> {allData?.email || 'N/A'}
//                 </p>
//                 <p>
//                     <strong>Phone:</strong> {allData?.phone || 'N/A'}
//                 </p>
//                 <p>
//                     <strong>City:</strong> {allData?.city || 'N/A'}
//                 </p>
//                 <p>
//                     <strong>Country:</strong> {allData?.country || 'N/A'}
//                 </p>
//                 <p>
//                     <strong>Summary:</strong> {allData?.description || 'N/A'}
//                 </p>
//             </section>

//             {/* Education Section */}
//             <section className="space-y-4">
//                 <h2 className="text-2xl font-medium">Education</h2>
//                 {allData.education?.length ? (
//                     allData.education.map((edu: any, index: number) => (
//                         <div key={index} className="border p-4 rounded-lg bg-white">
//                             <p>
//                                 <strong>Degree:</strong> {edu.degree}
//                             </p>
//                             <p>
//                                 <strong>Institute:</strong> {edu.school}
//                             </p>
//                             <p>
//                                 <strong>Year:</strong> {edu.startDate}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No education details available.</p>
//                 )}
//             </section>

//             {/* Experience Section */}
//             <section className="space-y-4">
//                 <h2 className="text-2xl font-medium">Experience</h2>
//                 {allData.experiences?.length ? (
//                     allData.experiences.map((exp: any, index: number) => (
//                         <div key={index} className="border p-4 rounded-lg bg-white">
//                             <p>
//                                 <strong>Role:</strong> {exp.title}
//                             </p>
//                             <p>
//                                 <strong>Company:</strong> {exp.company}
//                             </p>
//                             <p>
//                                 <strong>Duration:</strong> {exp.startDate} to {exp?.endDate}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No experience details available.</p>
//                 )}
//             </section>

//             {/* Skills Section */}
//             <section className="space-y-4">
//                 <h2 className="text-2xl font-medium">Skills</h2>
//                 {allData.skills?.length ? (
//                     allData.skills.map((category: any, index: number) => (
//                         <div key={index} className="mb-4 p-4 rounded-lg border-light-gray bg-white">
//                             <h3 className="font-medium text-lg mb-2">
//                                 {category.category}
//                             </h3>
//                             <div className="flex flex-wrap gap-2">
//                                 {category.items.map((skill: string, skillIndex: number) => (
//                                     <Badge key={skillIndex} variant="secondary">
//                                         {skill}
//                                     </Badge>
//                                 ))}
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No skills added yet.</p>
//                 )}
//             </section>

//             {/* Projects Section */}
//             {/* <section className="space-y-4">
//                 <h2 className="text-2xl font-medium">Projects</h2>
//                 {allData.projects?.length ? (
//                     allData.projects.map((project: any, index: number) => (
//                         <div key={index} className="border p-4 rounded-lg">
//                             <p>
//                                 <strong>Title:</strong> {project.title}
//                             </p>
//                             <p>
//                                 <strong>Description:</strong> {project.description}
//                             </p>
//                             <p>
//                                 <strong>Technologies:</strong> {project.technologies?.join(', ')}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No projects available.</p>
//                 )}
//             </section> */}

//             {/* Certifications Section */}
//             {/* <section className="space-y-4">
//                 <h2 className="text-2xl font-medium">Certifications</h2>
//                 {allData.certifications?.length ? (
//                     allData.certifications.map((cert: any, index: number) => (
//                         <div key={index} className="border p-4 rounded-lg">
//                             <p>
//                                 <strong>Name:</strong> {cert.name}
//                             </p>
//                             <p>
//                                 <strong>Issuer:</strong> {cert.issuer}
//                             </p>
//                             <p>
//                                 <strong>Year:</strong> {cert.year}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No certifications available.</p>
//                 )}
//             </section> */}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-10">
//                 <Button
//                     variant="light"
//                     onClick={() => setActiveTab(0)} // Navigate to the first tab
//                 >
//                     Edit Details
//                 </Button>
//                 <Button
//                     radius="sm"
//                     className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
//                     type="submit"
//                 >
//                     Finalize and Submit
//                 </Button>
//             </div>
//         </Card>
//     );
// }

// 'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CircleDot, GraduationCap, Briefcase, Globe, Award, Plus, Download } from 'lucide-react'

export default function PreviewResume() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 ">
         {/* Preview Section */}
         <div className="w-full ">
          <Card className="p-6 sticky top-4">
            <div className=" bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-2xl font-bold text-center mb-8">MUHAMMAD UMER</h1>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h2 className="font-semibold mb-4">CONTACTS</h2>
                  <div className="space-y-2 text-sm">
                    <p>email@example.com</p>
                    <p>+1 234 567 890</p>
                    <p>City, Country</p>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold mb-4">SKILLS</h2>
                  <div className="space-y-2 text-sm">
                    <p>Skill 1</p>
                    <p>Skill 2</p>
                    <p>Skill 3</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* Form Section */}
        <div className="w-full  space-y-6">
          {/* Resume Formatting */}
          <Card className="p-4 space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <CircleDot className="w-4 h-4" />
              Resume Formatting
            </h2>
            <div className="grid gap-4">
              <div>
                <Label>Template</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Monte Carlo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monte-carlo">Monte Carlo</SelectItem>
                    <SelectItem value="paris">Paris</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Accent Color</Label>
                <div className="flex gap-2 mt-2">
                  {['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500'].map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full ${color} hover:ring-2 ring-offset-2`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Personal Information */}
          <Card className="p-4 space-y-4">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>First Name</Label>
                  <Input placeholder="Enter first name" />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input placeholder="Enter last name" />
                </div>
              </div>
              <div>
                <Label>Job Title</Label>
                <Input placeholder="e.g. Marketing Manager" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input placeholder="Your phone number" />
              </div>
              <div>
                <Label>Address</Label>
                <Input placeholder="Enter a Location" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>City</Label>
                  <Input placeholder="City" />
                </div>
                <div>
                  <Label>Postal Code</Label>
                  <Input placeholder="Postal Code" />
                </div>
              </div>
            </div>
          </Card>

          {/* Professional Summary */}
          <Card className="p-4 space-y-4">
            <h2 className="text-lg font-semibold">Professional Summary</h2>
            <Textarea 
              placeholder="e.g. Accomplished Marketing Manager with expertise in developing campaigns..."
              className="min-h-[100px]"
            />
          </Card>

          {/* Section Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe, label: 'Websites & Social Links' },
              { icon: Briefcase, label: 'Employment History' },
              { icon: GraduationCap, label: 'Education' },
              { icon: Award, label: 'Skills' },
            ].map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Button>
            ))}
          </div>

          {/* Add Blocks */}
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Add Blocks</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Languages', 'Personal details', 'Hobbies', 'Courses',
                'Custom section', 'References', 'Extra-Curricular Activities', 'Internships',
                'Publications', 'Driving license'
              ].map((block) => (
                <Button
                  key={block}
                  variant="outline"
                  className="justify-start"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {block}
                </Button>
              ))}
            </div>
          </Card>

          <Button className="w-full" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Next to Download
          </Button>
        </div>

        
      </div>
    </div>
  )
}

