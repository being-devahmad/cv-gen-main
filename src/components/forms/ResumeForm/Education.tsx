import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Plus, Trash2 } from "lucide-react";

interface EducationProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Education({
  allData,
  setAllData,
  activeTab,
  setActiveTab,
}: EducationProps) {
  const [education, setEducation] = useState(
    allData.education || [
      {
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]
  );

  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    const updatedEducation = education.filter((_: any, i: any) => i !== index);
    setEducation(updatedEducation);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleNext = () => {
    console.log("allData>>",allData)
    setAllData({ ...allData, education });
    setActiveTab("skills");
  };

  const handleBack = () => {
    setActiveTab('experience');
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="text-sm text-gray-500">Enter your last diploma first</p>
        </div>
        <Button onClick={addEducation} variant="bordered" size="sm">
          <Plus className="h-4 w-4 mr-2" /> Add Education
        </Button>
      </div>

      {education.map((edu: any, index: any) => (
        <div key={index} className="relative mb-6">
          {index > 0 && <hr className="my-4" />}
          <Button
            variant="light"
            size="sm"
            className="absolute right-0 top-0"
            onClick={() => removeEducation(index)}
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="School"
              placeholder="Harvard University"
              value={edu.school}
              onChange={(e) => handleChange(index, "school", e.target.value)}
            />
            <Input
              label="Degree"
              placeholder="Bachelor's Degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Input
              label="Location"
              placeholder="City, Country"
              value={edu.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
            />
            <Input
              type="month"
              label="Start Date"
              value={edu.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            />
            <Input
              type="month"
              label="End Date"
              value={edu.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            />
          </div>

          <Textarea
            className="mt-4"
            label="Description"
            placeholder="Describe your education..."
            value={edu.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <Button variant="light" onClick={handleBack}>
          Back
        </Button>
        <Button className="text-white bg-blue-500" onClick={handleNext}>
          Next to Skills <span className="pl-2">&#x2192;</span>
        </Button>
      </div>
    </Card>
  );
}
