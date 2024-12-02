import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2 } from 'lucide-react';

interface EducationProps {
    data: any[];
    updateData: (data: any[]) => void;
}

export default function Education({ data, updateData }: EducationProps) {
    const [education, setEducation] = useState<any[]>(
        data || [
            {
                degree: '',
                school: '',
                location: '',
                startDate: '',
                endDate: '',
                gpa: '',
            },
        ]
    );

    const handleChange = (index: number, field: string, value: string) => {
        const newEducation = education.map((edu, i) =>
            i === index ? { ...edu, [field]: value } : edu
        );
        setEducation(newEducation);
        updateData(newEducation);
    };

    const addEducation = () => {
        const newEducation = [
            ...education,
            {
                degree: '',
                school: '',
                location: '',
                startDate: '',
                endDate: '',
                gpa: '',
            },
        ];
        setEducation(newEducation);
        updateData(newEducation);
    };

    const removeEducation = (index: number) => {
        const newEducation = education.filter((_, i) => i !== index);
        setEducation(newEducation);
        updateData(newEducation);
    };

    return (
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Education</h2>
                <Button onClick={addEducation} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" /> Add Education
                </Button>
            </div>

            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div key={index}>
                        {index > 0 && <Separator className="my-6" />}
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0"
                                onClick={() => removeEducation(index)}
                            >
                                <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="space-y-2">
                                    <Label>Degree</Label>
                                    <Input
                                        value={edu.degree}
                                        onChange={(e) =>
                                            handleChange(index, 'degree', e.target.value)
                                        }
                                        placeholder="Bachelor of Science"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>School</Label>
                                    <Input
                                        value={edu.school}
                                        onChange={(e) =>
                                            handleChange(index, 'school', e.target.value)
                                        }
                                        placeholder="University Name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label>Location</Label>
                                    <Input
                                        value={edu.location}
                                        onChange={(e) =>
                                            handleChange(index, 'location', e.target.value)
                                        }
                                        placeholder="City, Country"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Start Date</Label>
                                    <Input
                                        type="month"
                                        value={edu.startDate}
                                        onChange={(e) =>
                                            handleChange(index, 'startDate', e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>End Date</Label>
                                    <Input
                                        type="month"
                                        value={edu.endDate}
                                        onChange={(e) =>
                                            handleChange(index, 'endDate', e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}