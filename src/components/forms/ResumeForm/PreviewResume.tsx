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
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebaseConfig"
import { jsPDF } from "jspdf";
import { useAuth } from "@/hooks/useAuth"

interface PreviewResumeProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const PreviewResume: React.FC<PreviewResumeProps> = ({
  allData,
  setAllData,
  setActiveTab
}) => {

  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth()
  console.log("currentUserId-->", user?.id || null)

  const [customSections, setCustomSections] = useState([]);
  const [newSectionName, setNewSectionName] = useState('');

  const handleAddCustomSection = () => {
    if (newSectionName) {
      setCustomSections(prevSections => [...prevSections, newSectionName]);
      setAllData(prevData => ({
        ...prevData,
        [newSectionName]: []
      }));
      setNewSectionName('');
    }
  };

  const handleAddCustomField = (sectionName: string) => {
    const updatedSection = [...(allData[sectionName] || []), { title: '', description: '' }];
    setAllData({
      ...allData,
      [sectionName]: updatedSection
    });
  };


  // const handleSaveAndDownload = async () => {
  //   setIsSaving(true);
  //   try {
  //     console.log("Finished Data -->", allData);
  //     toast({
  //       title: "Success",
  //       description: "Your resume data has been saved.",
  //     });
  //     // Add data to the 'resumes' collection in Firestore
  //     // const docRef = await addDoc(collection(db, "resumes"), allData);

  //     // // Trigger download of the resume data as a JSON file
  //     // const blob = new Blob([JSON.stringify(allData, null, 2)], { type: "application/json" });
  //     // const link = document.createElement("a");
  //     // link.href = URL.createObjectURL(blob);
  //     // link.download = `${allData?.firstName || "Untitled"}_${allData?.lastName || ""}_CV.json`;
  //     // document.body.appendChild(link);
  //     // link.click();
  //     // document.body.removeChild(link);


  //     // Generate PDF using jsPDF
  //     const pdf = new jsPDF();

  //     // Add content to the PDF
  //     pdf.setFontSize(16);
  //     pdf.text("Resume", 10, 10);
  //     pdf.setFontSize(12);

  //     // Formatting allData into readable content
  //     const formattedData = `
  //     Name: ${allData?.firstName || ""} ${allData?.lastName || ""}
  //     Email: ${allData?.email || ""}
  //     Phone: ${allData?.phone || ""}
  //     Address: ${allData?.address || ""}

  //     Experience:
  //   `;

  //     pdf.text(formattedData, 10, 20);

  //     allData?.experiences?.forEach((exp, index) => {
  //       const experienceText = `
  //       ${index + 1}. ${exp.company || "Unknown Company"} (${exp.startDate || "N/A"} - ${exp.endDate || "Present"
  //         })
  //       Title: ${exp.title || "N/A"}
  //       Description: ${exp.description || "N/A"}
  //     `;
  //       pdf.text(experienceText, 10, 40 + index * 30); // Adjust line spacing for multiple experiences
  //     });

  //     // Save the PDF
  //     const fileName = `${allData?.firstName || "Untitled"}_${allData?.lastName || ""}_CV.pdf`;
  //     pdf.save(fileName);


  //   } catch (error) {
  //     console.error("Error saving resume data:", error);
  //     toast({
  //       title: "Error",
  //       description: "Failed to save resume data. Please try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSaving(false);
  //   }
  // };


  const handleSaveAndDownload = async () => {
    setIsSaving(true);
    try {
      const dataToSave = {
        ...allData,
        userId: user?.id || null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      console.log("Final Data to Save -->", dataToSave);

      // Save data to Firestore in the 'resumes' collection
      const docRef = await addDoc(collection(db, "resumes"), dataToSave);
      console.log("Document written with ID: ", docRef.id);

      toast({
        title: "Success",
        description: "Your resume data has been saved.",
      });

      // Generate PDF using jsPDF
      const pdf = new jsPDF();

      // Add content to the PDF
      pdf.setFontSize(16);
      pdf.text("Resume", 10, 10);
      pdf.setFontSize(12);

      // Formatting allData into readable content
      const formattedData = `
        Name: ${allData?.firstName || ""} ${allData?.lastName || ""}
        Email: ${allData?.email || ""}
        Phone: ${allData?.phone || ""}
        Address: ${allData?.address || ""}
        
        Experience:
      `;

      pdf.text(formattedData, 10, 20);

      allData?.experiences?.forEach((exp, index) => {
        const experienceText = `
          ${index + 1}. ${exp.company || "Unknown Company"} (${exp.startDate || "N/A"} - ${exp.endDate || "Present"
          })
          Title: ${exp.title || "N/A"}
          Description: ${exp.description || "N/A"}
        `;
        pdf.text(experienceText, 10, 40 + index * 30); // Adjust line spacing for multiple experiences
      });

      // Save the PDF
      const fileName = `${allData?.firstName || "Untitled"}_${allData?.lastName || ""}_CV.pdf`;
      pdf.save(fileName);
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
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Add this section for custom sections */}
        {customSections.map((sectionName) => (
          <AccordionItem key={sectionName} value={sectionName}>
            <AccordionTrigger className="text-base font-medium">{sectionName}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                {allData[sectionName]?.map((item: { title: string; description: string }, index: number) => (
                  <div key={index} className="space-y-2">
                    <Input
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) => {
                        const updatedSection = [...allData[sectionName]];
                        updatedSection[index].title = e.target.value;
                        setAllData({ ...allData, [sectionName]: updatedSection });
                      }}
                    />
                    <Textarea
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) => {
                        const updatedSection = [...allData[sectionName]];
                        updatedSection[index].description = e.target.value;
                        setAllData({ ...allData, [sectionName]: updatedSection });
                      }}
                    />
                  </div>
                ))}
                <Button onClick={() => handleAddCustomField(sectionName)}>Add Field</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* Add Custom Section */}
        <div className="space-y-4">
          <h3 className="font-medium">Add Custom Section</h3>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Section Name"
              value={newSectionName}
              onChange={(e) => setNewSectionName(e.target.value)}
            />
            <Button onClick={handleAddCustomSection}>Add</Button>
          </div>
        </div>


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
              <Button key={block} className="justify-start">
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

