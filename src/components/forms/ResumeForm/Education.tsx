import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Plus, Trash2 } from 'lucide-react';
import { ConfirmationDialog } from "./ConfirmationDialog";

interface EducationItem {
  degree: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categoryData: Record<string, any>;
}


export default function Education({
  allData,
  setAllData,
  setActiveTab,
  categoryData,
}: EducationProps) {
  const [education, setEducation] = useState<EducationItem[]>(() => {



    if (categoryData && categoryData.education.length > 0) {
      return categoryData.education.map((edu: any) => ({
        degree: edu.degree || "",
        organization: edu.institution || "",
        location: edu.location || "",
        startDate: edu.year ? edu.year.split(' - ')[0] : "",
        endDate: edu.year ? edu.year.split(' - ')[1] : "",
      }));
    }
    return allData.education || [
      {
        degree: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ];
  });

  useEffect(() => {
    if (education.length > 0) {
      setAllData({ ...allData, education: education });
    }
  }, []);

  const addEducation = () => {
    const newEducation = [
      ...education,
      {
        degree: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ];
    setEducation(newEducation);
  };

  const removeEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
    setAllData({ ...allData, education: updatedEducation });
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updatedEducation);
    setAllData({ ...allData, education: updatedEducation });
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNext = () => {
    if (education.length === 1) {
      setShowConfirmation(true);
    } else {
      setActiveTab("skills");
    }
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

      {education.map((edu, index) => (
        <div key={index} className=" mb-6 ">
          {index > 0 && <hr className="my-4" />}
          <div className="flex justify-end">
            <Button
              variant="light"
              size="sm"
              onClick={() => removeEducation(index)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              variant="bordered"
              label="Organization"
              value={edu.organization}
              onChange={(e) => handleChange(index, "organization", e.target.value)}
            />
            <Input
              variant="bordered"
              label="Degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Input
              variant="bordered"
              label="Location"
              value={edu.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
            />
            <Input
              variant="bordered"
              type="month"
              label="Start Date"
              value={edu.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            />
            <Input
              variant="bordered"
              type="month"
              label="End Date"
              value={edu.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            />

          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <Button variant="light" onClick={handleBack}>
          Back
        </Button>
        <Button
          color="primary"
          variant="solid"
          type="submit"
          className="font-bold"
          onClick={handleNext}
        >
          Next to Skills <span className="pl-2">&#x2192;</span>
        </Button>
      </div>

      <ConfirmationDialog
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onContinue={() => {
          setShowConfirmation(false);
          setActiveTab("skills");
        }}
        onAddMore={() => {
          setShowConfirmation(false);
          addEducation();
        }}
      />
    </Card>
  );
}

