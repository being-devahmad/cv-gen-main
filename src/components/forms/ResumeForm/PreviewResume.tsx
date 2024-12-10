// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import {
//   CircleDot,
//   GraduationCap,
//   Briefcase,
//   Globe,
//   Award,
//   Plus,
//   Download,
// } from "lucide-react";
// import React, { useState } from "react";

// interface PreviewResumeProps {
//   allData: Record<string, any>;
//   setAllData: (data: Record<string, any>) => void;
// }

// export const PreviewResume: React.FC<PreviewResumeProps> = ({
//   allData,
//   setAllData,
// }) => {
//   const [isSaving, setIsSaving] = useState(false);
//   const { toast } = useToast();

//   const handleSaveAndDownload = async () => {
//     setIsSaving(true);
//     try {
//       console.log("Finished Data -->", allData);
//       toast({
//         title: "Success",
//         description: "Your resume data has been saved.",
//       });
//       // Here you would typically trigger the download process
//     } catch (error) {
//       console.error("Error saving resume data:", error);
//       toast({
//         title: "Error",
//         description: "Failed to save resume data. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto p-4 ">
//         {/* Preview Section */}
//         <div className="w-full ">
//           <Card className="p-6 sticky top-4">
//             <div className=" bg-white rounded-lg shadow-sm p-8">
//               <h1 className="text-2xl font-bold text-center mb-8">
//                 {allData?.firstName} {allData?.lastName}
//               </h1>
//               <div className="grid grid-cols-12 ">
//                 <div className=" col-span-7">
//                   <h2 className=" font-semibold mb-4 ">CONTACTS</h2>
//                   <div className="space-y-2 text-sm">
//                     <p>{allData?.email}</p>
//                     <p>{allData?.phone}</p>
//                     <p>
//                       {allData?.city}, {allData?.country}
//                     </p>
//                   </div>
//                 </div>
//                 <div className=" col-span-5 text-center">
//                   <h2 className="font-semibold mb-4">SKILLS</h2>
//                   <div className="space-y-2 text-sm">
//                     {allData?.skills?.map((val: any, ind: any) => {
//                       return val.items.map((value: any, index: any) => {
//                         return (
//                           <>
//                             <p>{value}</p>
//                           </>
//                         );
//                       });
//                     })}
//                     {/* <p>Skill 1</p>
//                     <p>Skill 2</p>
//                     <p>Skill 3</p> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//         {/* Form Section */}
//         <div className="w-full  space-y-6">
//           {/* Resume Formatting */}
//           <Card className="p-4 space-y-4">
//             <h2 className="text-lg font-semibold flex items-center gap-2">
//               <CircleDot className="w-4 h-4" />
//               Resume Formatting
//             </h2>
//             <div className="grid gap-4">
//               <div>
//                 <Label>Template</Label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Monte Carlo" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="monte-carlo">Monte Carlo</SelectItem>
//                     <SelectItem value="paris">Paris</SelectItem>
//                     <SelectItem value="london">London</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <Label>Accent Color</Label>
//                 <div className="flex gap-2 mt-2">
//                   {[
//                     "bg-blue-500",
//                     "bg-green-500",
//                     "bg-red-500",
//                     "bg-purple-500",
//                   ].map((color) => (
//                     <button
//                       key={color}
//                       className={`w-6 h-6 rounded-full ${color} hover:ring-2 ring-offset-2`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Card>

//           {/* Personal Information */}
//           <Card className="p-4 space-y-4">
//             <h2 className="text-lg font-semibold">Personal Information</h2>
//             <div className="grid gap-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>First Name</Label>
//                   <Input
//                     placeholder="Enter first name"
//                     value={allData?.firstName}
//                     disabled
//                   />
//                 </div>
//                 <div>
//                   <Label>Last Name</Label>
//                   <Input
//                     placeholder="Enter last name"
//                     value={allData?.lastName}
//                     disabled
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label>Job Title</Label>
//                 <Input
//                   placeholder="e.g. Marketing Manager"
//                   value={allData?.experiences[0]?.title}
//                   disabled
//                 />
//               </div>
//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   type="email"
//                   placeholder="your@email.com"
//                   value={allData?.email}
//                   disabled
//                 />
//               </div>
//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   placeholder="Your phone number"
//                   value={allData?.phone}
//                   disabled
//                 />
//               </div>
//               <div>
//                 <Label>Country</Label>
//                 <Input
//                   placeholder="Enter a country"
//                   value={allData?.country}
//                   disabled
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>City</Label>
//                   <Input placeholder="City" value={allData?.city} disabled />
//                 </div>
//                 <div>
//                   <Label>Postal Code</Label>
//                   <Input
//                     placeholder="Postal Code"
//                     value={allData?.postal_code}
//                     disabled
//                   />
//                 </div>
//               </div>
//             </div>
//           </Card>

//           {/* Professional Summary */}
//           <Card className="p-4 space-y-4">
//             <h2 className="text-lg font-semibold">Professional Summary</h2>
//             <Textarea
//               placeholder="e.g. Accomplished Marketing Manager with expertise in developing campaigns..."
//               className="min-h-[100px]"
//               value={allData?.description}
//               disabled
//             />
//           </Card>

//           {/* Section Buttons */}
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { icon: Globe, label: "Websites & Social Links" },
//               { icon: Briefcase, label: "Employment History" },
//               { icon: GraduationCap, label: "Education" },
//               { icon: Award, label: "Skills" },
//             ].map(({ icon: Icon, label }) => (
//               <Button
//                 key={label}
//                 variant="outline"
//                 className="h-auto py-4 flex flex-col gap-2"
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{label}</span>
//               </Button>
//             ))}
//           </div>

//           {/* Add Blocks */}
//           <Card className="p-4">
//             <h2 className="text-lg font-semibold mb-4">Add Blocks</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 "Languages",
//                 "Personal details",
//                 "Hobbies",
//                 "Courses",
//                 "Custom section",
//                 "References",
//                 "Extra-Curricular Activities",
//                 "Internships",
//                 "Publications",
//                 "Driving license",
//               ].map((block) => (
//                 <Button key={block} variant="outline" className="justify-start">
//                   <Plus className="w-4 h-4 mr-2" />
//                   {block}
//                 </Button>
//               ))}
//             </div>
//           </Card>

// <Button
//   className="w-full"
//   size="lg"
//   onClick={handleSaveAndDownload}
//   disabled={isSaving}
// >
//   {isSaving ? (
//     <>
//       <CircleDot className="mr-2 h-4 w-4 animate-spin" />
//       Saving...
//     </>
//   ) : (
//     <>
//       <Download className="w-4 h-4 mr-2" />
//       Save and Download
//     </>
//   )}
// </Button>
//         </div>
//       </div>
//     </div>
//   );
// };


// ---------------------------------------------------------------



import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CircleDot, Download, Plus } from 'lucide-react'
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@nextui-org/button"

interface PreviewResumeProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
}

export const PreviewResume: React.FC<PreviewResumeProps> = ({
  allData,
  setAllData,
  activeTab,
  setActiveTab
}) => {

  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleSaveAndDownload = async () => {
    setIsSaving(true);
    try {
      console.log("Finished Data -->", allData);
      toast({
        title: "Success",
        description: "Your resume data has been saved.",
      });
      // Here you would typically trigger the download process
    } catch (error) {
      console.error("Error saving resume data:", error);
      toast({
        title: "Error",
        description: "Failed to save resume data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleBack = () => {
    setActiveTab('skills');
  };


  return (
    <div className="w-full max-w-xl space-y-6 p-4">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          {`${allData?.firstName ? `${allData?.firstName}${allData?.lastName}_CV` : 'Untitled'}`}
        </h2>

        {/* Resume Formatting */}
        {/* <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium">Resume Formatting</h3>
            <div className="space-y-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Font Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arial">Arial</SelectItem>
                  <SelectItem value="times">Times New Roman</SelectItem>
                  <SelectItem value="calibri">Calibri</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card> */}

        {/* Personal Information */}
        <Accordion type="single" collapsible defaultValue="personal-info">
          <AccordionItem value="personal-info">
            <AccordionTrigger className="text-base font-medium">Personal Information</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" value={allData?.experiences[0]?.title} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="firstName" value={allData?.firstName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" value={allData?.lastName} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={allData?.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={allData?.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" value={`${allData?.city}, ${allData?.country}`} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" value={allData?.city} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postal-code">Postal Code</Label>
                    <Input id="postal-code" value={allData?.postalCode} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" value={allData?.country} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Professional Summary */}
          <AccordionItem value="professional-summary">
            <AccordionTrigger className="text-base font-medium">Professional Summary</AccordionTrigger>
            <AccordionContent>
              <div className="p-2">
                <Textarea
                  value={allData?.summary}
                  className="min-h-[150px]"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Languages */}
          <AccordionItem value="languages">
            <AccordionTrigger className="text-base font-medium">Languages</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="urdu">Urdu</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Proficiency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="native">Native</SelectItem>
                    <SelectItem value="fluent">Fluent</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Skills */}
          <AccordionItem value="skills">
            <AccordionTrigger className="text-base font-medium">Skills</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                {["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <Input defaultValue={skill} />
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="experienced">Experienced</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Add Blocks Section */}
        <div className="space-y-4">
          <h3 className="font-medium">Add Blocks</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Languages",
              "Personal details",
              "Websites",
              "Courses",
              "Custom section",
              "References",
              "Extra-Curricular Activities",
              "Internships",
              "Publications",
              "Driving license"
            ].map((block) => (
              <Button key={block} variant="outline" className="justify-start">
                <Plus className="w-4 h-4 mr-2" />
                {block}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <Button variant="light" onClick={handleBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          {/* <Button
            color="primary"
            variant="solid"
            type="submit"
            className="font-bold"
            onClick={handleSaveAndDownload}
          >
            Submit <span className="pl-2">&#x2192;</span>
          </Button> */}


          <Button
            color="primary"
            variant="solid"
            className="w-full"
            size="lg"
            onClick={handleSaveAndDownload}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <CircleDot className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Save and Download
              </>
            )}
          </Button>

        </div>
      </div>
    </div>
  )
}

