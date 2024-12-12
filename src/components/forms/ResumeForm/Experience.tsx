import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import { Input, Checkbox } from "@nextui-org/react";
import { Plus, Trash2 } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { AITextarea } from "./AIBasedDescription";

interface ExperienceProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categoryData: Record<string, any>;
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({
  allData,
  setAllData,
  activeTab,
  setActiveTab,
  categoryData
}) => {


  const [experiences, setExperiences] = useState<ExperienceItem[]>(
    allData.experiences || [
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
    ]
  );

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
    setAllData({ ...allData, experiences: updatedExperiences });
  };

  const handleChange = (index: number, field: string, value: string | boolean) => {
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );

    if (field === 'currentlyWorking' && value === true) {
      updatedExperiences[index].endDate = '';
    }

    setExperiences(updatedExperiences);
    setAllData({ ...allData, experiences: updatedExperiences });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAllData({ ...allData, experiences: experiences });
    setActiveTab("education");
  };

  const handleBack = () => {
    setActiveTab('contact');
  };



  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <Button onClick={handleAddExperience} color="primary" variant="flat" size="sm">
          <Plus className="h-4 w-4 mr-2" /> Add Experience
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {index > 0 && <Separator className="my-6" />}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Experience {index + 1}</h3>
                <Button
                  variant="light"
                  size="sm"
                  color="danger"
                  isIconOnly
                  onClick={() => handleRemoveExperience(index)}
                  className="absolute top-0 right-0 hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <Input
                  variant="bordered"
                  label="Job Title"
                  value={experience.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
                <Input
                  variant="bordered"
                  label="Company"
                  value={experience.company}
                  onChange={(e) => handleChange(index, "company", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <Input
                  variant="bordered"
                  label="Location"
                  value={experience.location}
                  onChange={(e) => handleChange(index, "location", e.target.value)}
                />
                <Input
                  variant="bordered"
                  label="Start Date"
                  type="month"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                />
                <Input
                  variant="bordered"
                  label="End Date"
                  type="month"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, "endDate", e.target.value)}
                  disabled={experience.currentlyWorking}
                  placeholder={experience.currentlyWorking ? "Present" : ""}
                />

              </div>

              <div className="mb-2">
                <Checkbox
                  isSelected={experience.currentlyWorking}
                  onValueChange={(checked) => handleChange(index, "currentlyWorking", checked)}
                  className="mt-2"
                >
                  I'm currently working there
                </Checkbox>
              </div>

              <div>
                <AITextarea
                  value={experience.description}
                  onChange={(value) => handleChange(index, "description", value)}
                  label="Description"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between mt-10">
          <Button variant="light" onClick={handleBack}>
            Back
          </Button>
          <Button
            color="primary"
            variant="solid"
            type="submit"
            className="font-bold"
          >
            Next to Education <span className="pl-2">&#x2192;</span>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Experience;


