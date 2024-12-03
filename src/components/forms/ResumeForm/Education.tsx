import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/select';
import { Plus, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { EducationSchema } from '@/lib/validations';


interface EducationProps {
    data: any[];
    updateData: (data: any[]) => void;
    onNext: () => void;
}

type EducationData = z.infer<typeof EducationSchema>;

const degreeOptions = [
    { label: "Bachelor's Degree", value: "bachelors" },
    { label: "Master's Degree", value: "masters" },
    { label: "Ph.D.", value: "phd" },
    { label: "Associate Degree", value: "associate" },
    { label: "High School Diploma", value: "highschool" },
];

export default function Education({ data, updateData, onNext }: EducationProps) {
    const [education, setEducation] = useState<EducationData[]>(
        data || [
            {
                degree: '',
                school: '',
                location: '',
                startDate: '',
                endDate: '',
                description: '',
            },
        ]
    );

    const form = useForm<{ education: EducationData[] }>({
        resolver: zodResolver(z.object({ education: EducationSchema.array() })),
        defaultValues: { education },
        mode: "onChange",
    });

    const { control, handleSubmit, formState: { errors } } = form;

    const onSubmit = (values: { education: EducationData[] }) => {
        updateData(values.education);
        onNext();
    };

    const addEducation = () => {
        setEducation([...education, {
            degree: '',
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
        }]);
    };

    const removeEducation = (index: number) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    return (
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold">Education</h2>
                    <p className="text-sm text-gray-500">
                        Enter your last diploma first
                    </p>
                </div>
                <Button onClick={addEducation} variant="bordered" size="sm">
                    <Plus className="h-4 w-4 mr-2" /> Add Education
                </Button>
            </div>

            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {education.map((_, index) => (
                        <div key={index}>
                            {index > 0 && <Separator className="my-6" />}
                            <div className="relative">
                                <Button
                                    variant="light"
                                    size="sm"
                                    className="absolute right-0 top-0"
                                    onClick={() => removeEducation(index)}
                                >
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <FormField
                                        control={control}
                                        name={`education.${index}.school`}
                                        render={({ field }) => (
                                            <FormItem className="relative items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="School"
                                                        errorMessage={errors.education?.[index]?.school?.message}
                                                        isInvalid={!!errors.education?.[index]?.school}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={control}
                                        name={`education.${index}.degree`}
                                        render={({ field }) => (
                                            <FormItem className="relative items-center lg:gap-3">
                                                <FormControl>
                                                    <Select
                                                        variant="bordered"
                                                        size="md"
                                                        label="Degree"
                                                        errorMessage={errors.education?.[index]?.degree?.message}
                                                        isInvalid={!!errors.education?.[index]?.degree}
                                                        {...field}
                                                    >
                                                        {degreeOptions.map((option) => (
                                                            <SelectItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <FormField
                                        control={control}
                                        name={`education.${index}.location`}
                                        render={({ field }) => (
                                            <FormItem className="relative items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="Location"
                                                        errorMessage={errors.education?.[index]?.location?.message}
                                                        isInvalid={!!errors.education?.[index]?.location}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name={`education.${index}.startDate`}
                                        render={({ field }) => (
                                            <FormItem className="relative items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="month"
                                                        errorMessage={errors.education?.[index]?.startDate?.message}
                                                        isInvalid={!!errors.education?.[index]?.startDate}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name={`education.${index}.endDate`}
                                        render={({ field }) => (
                                            <FormItem className="relative items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="month"
                                                        errorMessage={errors.education?.[index]?.endDate?.message}
                                                        isInvalid={!!errors.education?.[index]?.endDate}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={control}
                                    name={`education.${index}.description`}
                                    render={({ field }) => (
                                        <FormItem className="relative items-center lg:gap-3">
                                            <FormControl>
                                                <Textarea
                                                    variant="bordered"
                                                    size="md"
                                                    placeholder="Write about your educational experience, achievements, and relevant coursework..."
                                                    errorMessage={errors.education?.[index]?.description?.message}
                                                    isInvalid={!!errors.education?.[index]?.description}
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    ))}

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
                </form>
            </Form>
        </Card>
    );
}

