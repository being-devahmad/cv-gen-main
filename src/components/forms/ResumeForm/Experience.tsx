import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ExperienceProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({
  allData,
  setAllData,
  activeTab,
  setActiveTab,
}) => {
  const [experiences, setExperiences] = useState(
    allData.experiences || [
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
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
        description: "",
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_:any, i:any) => i !== index);
    setExperiences(updatedExperiences);
    setAllData({ ...allData, experiences: updatedExperiences });
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedExperiences = experiences.map((exp:any, i:any) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
    setAllData({ ...allData, experiences: updatedExperiences });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("allData",allData)
    setAllData({ ...allData, experiences: experiences });
    setActiveTab("education"); // Proceed to the next tab
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <Button onClick={handleAddExperience} variant="bordered" size="sm">
          <Plus className="h-4 w-4 mr-2" /> Add Experience
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {experiences.map((experience:any, index:any) => (
          <div key={index}>
            {index > 0 && <Separator className="my-6" />}
            <div className="relative">
              <Button
                variant="light"
                size="sm"
                className="absolute right-0 top-0"
                onClick={() => handleRemoveExperience(index)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Job Title */}
                <Input
                  variant="bordered"
                  label="Job Title"
                  value={experience.title}
                  onChange={(e) =>
                    handleChange(index, "title", e.target.value)
                  }
                />

                {/* Company */}
                <Input
                  variant="bordered"
                  label="Company"
                  value={experience.company}
                  onChange={(e) =>
                    handleChange(index, "company", e.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Location */}
                <Input
                  variant="bordered"
                  label="Location"
                  value={experience.location}
                  onChange={(e) =>
                    handleChange(index, "location", e.target.value)
                  }
                />

                {/* Start Date */}
                <Input
                  variant="bordered"
                  label="Start Date"
                  type="month"
                  value={experience.startDate}
                  onChange={(e) =>
                    handleChange(index, "startDate", e.target.value)
                  }
                />

                {/* End Date */}
                <Input
                  variant="bordered"
                  label="End Date"
                  type="month"
                  value={experience.endDate}
                  onChange={(e) =>
                    handleChange(index, "endDate", e.target.value)
                  }
                />
              </div>

              {/* Description */}
              <Textarea
                variant="bordered"
                label="Description"
                value={experience.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <div className="flex items-center justify-end mt-10">
          <Button
            radius="sm"
            className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
            variant="faded"
            type="submit"
          >
            Next to Education <span className="pl-2">&#x2192;</span>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Experience;
