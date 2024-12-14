import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from 'lucide-react';
import { Button } from "@nextui-org/button";

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsProps {
  allData: any;
  setAllData: (data: any) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categoryData: Record<string, any>;
}

export default function Skills({
  allData,
  setAllData,
  setActiveTab,
  categoryData,
}: SkillsProps) {
  const [skills, setSkills] = useState<SkillCategory[]>(() => {
    if (categoryData && categoryData.skills) {
      const skillCategories: SkillCategory[] = [
        { category: "Technical Skills", items: [] },
        { category: "Soft Skills", items: [] },
        { category: "Languages", items: categoryData.skills.languages || [] },
        { category: "Frameworks", items: categoryData.skills.frameworks || [] },
        { category: "Libraries", items: categoryData.skills.libraries || [] },
        { category: "Tools", items: categoryData.skills.tools || [] },
      ];
      return skillCategories;
    }
    return allData.skills || [
      { category: "Technical Skills", items: [] },
      { category: "Soft Skills", items: [] },
      { category: "Languages", items: [] },
      { category: "Frameworks", items: [] },
      { category: "Libraries", items: [] },
      { category: "Tools", items: [] },
    ];
  });

  const [newSkill, setNewSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Technical Skills");

  useEffect(() => {
    if (skills.length > 0) {
      setAllData({ ...allData, skills: skills });
    }
  }, []);

  const addSkill = () => {
    if (!newSkill.trim()) return;
    const updatedSkills = skills.map((category) =>
      category.category === selectedCategory
        ? { ...category, items: [...category.items, newSkill.trim()] }
        : category
    );
    setSkills(updatedSkills);
    setAllData({ ...allData, skills: updatedSkills });
    setNewSkill("");
  };

  const removeSkill = (categoryIndex: number, skillIndex: number) => {
    const updatedSkills = skills.map((category, i) =>
      i === categoryIndex
        ? {
          ...category,
          items: category.items.filter((_, j) => j !== skillIndex),
        }
        : category
    );
    setSkills(updatedSkills);
    setAllData({ ...allData, skills: updatedSkills });
  };

  const handleNext = () => {
    console.log("allData", allData);
    setAllData({ ...allData, skills });
    setActiveTab("finish");
  };

  const handleBack = () => {
    setActiveTab("education");
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="skill">Add Skill</Label>
            <Input
              id="skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter a skill"
              onKeyPress={(e) => e.key === "Enter" && addSkill()}
            />
          </div>
          <div className="flex-1">
            <Label>Category</Label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {skills.map((cat) => (
                  <SelectItem key={cat.category} value={cat.category}>
                    {cat.category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button onClick={addSkill}>
              <Plus className="h-4 w-4 mr-2" /> Add
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          {skills.map((category, categoryIndex) => (
            <div key={category.category}>
              {
                category.items.length > 0 && <h3 className="text-lg font-medium mb-3">{category.category}</h3>
              }
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(categoryIndex, skillIndex)}
                      className="ml-2 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <Button variant="light" onClick={handleBack}>
          Back
        </Button>
        <Button
          radius="sm"
          className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
          onClick={handleNext}
        >
          Next to Summary <span className="pl-2">&#x2192;</span>
        </Button>
      </div>
    </Card>
  );
}

