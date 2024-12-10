import { useState } from "react";
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
import { Plus, X } from "lucide-react";
import { Button } from "@nextui-org/button";

interface SkillsProps {
  allData: any;
  setAllData: (data: any) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Skills({
  allData,
  setAllData,
  activeTab,
  setActiveTab,
}: SkillsProps) {
  const [skills, setSkills] = useState(
    allData.skills || [
      { category: "Technical Skills", items: [] },
      { category: "Soft Skills", items: [] },
      { category: "Languages", items: [] },
    ]
  );

  const [newSkill, setNewSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Technical Skills");

  const addSkill = () => {
    if (!newSkill.trim()) return;
    const updatedSkills = skills.map((category: any) =>
      category.category === selectedCategory
        ? { ...category, items: [...category.items, newSkill.trim()] }
        : category
    );
    setSkills(updatedSkills);
    setAllData({ ...allData, skills: updatedSkills });
    setNewSkill("");
  };
  const removeSkill = (categoryIndex: number, skillIndex: number) => {
    const updatedSkills = skills.map((category: any, i: any) =>
      i === categoryIndex
        ? {
            ...category,
            items: category.items.filter((_: any, j: any) => j !== skillIndex),
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
                {console.log("category",skills)}
                {skills.map((cat:any) => (
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
          {skills.map((category: any, categoryIndex: any) => (
            <div key={category.category}>
              <h3 className="text-lg font-medium mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill: any, skillIndex: any) => (
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
