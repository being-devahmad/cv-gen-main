import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, X } from 'lucide-react';
import { Button } from '@nextui-org/button';

interface SkillsProps {
    data: any[];
    updateData: (data: any[]) => void;
}

export default function Skills({ data, updateData }: SkillsProps) {
    const [skills, setSkills] = useState<any[]>(
        data || [
            { category: 'Technical Skills', items: [] },
            { category: 'Soft Skills', items: [] },
            { category: 'Languages', items: [] },
        ]
    );
    const [newSkill, setNewSkill] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Technical Skills');

    const addSkill = () => {
        if (!newSkill.trim()) return;

        const newSkills = skills.map((category) =>
            category.category === selectedCategory
                ? { ...category, items: [...category.items, newSkill.trim()] }
                : category
        );

        setSkills(newSkills);
        updateData(newSkills);
        setNewSkill('');
    };

    const removeSkill = (categoryIndex: number, skillIndex: number) => {
        const newSkills = skills.map((category, i) =>
            i === categoryIndex
                ? {
                    ...category,
                    items: category.items.filter((_: string, j: number) => j !== skillIndex),
                }
                : category
        );

        setSkills(newSkills);
        updateData(newSkills);
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
                            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
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
                                {skills.map((category) => (
                                    <SelectItem
                                        key={category.category}
                                        value={category.category}
                                    >
                                        {category.category}
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
                            <h3 className="text-lg font-medium mb-3">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill: string, skillIndex: number) => (
                                    <Badge
                                        key={skillIndex}
                                        variant="secondary"
                                        className="px-3 py-1"
                                    >
                                        {skill}
                                        <button
                                            onClick={() =>
                                                removeSkill(categoryIndex, skillIndex)
                                            }
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
                <Button
                    variant="light"
                    type="button"
                >
                    Back
                </Button>
                <Button
                    radius="sm"
                    className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
                    type="submit"
                >
                    Next to Skills <span className='pl-2'>&#x2192;</span>
                </Button>
            </div>
        </Card>
    );
}