import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Card, Input } from '@nextui-org/react';
import { AITextarea } from './AIBasedDescription';


const ExperienceSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    company: z.string().min(1, 'Company is required'),
    location: z.string().min(1, 'Location is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().min(1, 'End date is required'),
    description: z.string().min(1, 'Description is required'),
});

type ExperienceData = z.infer<typeof ExperienceSchema>;

interface ExperienceProps {
    data: ExperienceData[];
    updateData: (data: ExperienceData[]) => void;
    onNext: () => void;
}

export default function Experience({ data, updateData, onNext }: ExperienceProps) {
    const [experiences, setExperiences] = useState<ExperienceData[]>(data || [
        {
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
        },
    ]);

    const { control, handleSubmit, formState: { errors } } = useForm<{ experiences: ExperienceData[] }>({
        resolver: zodResolver(z.object({ experiences: ExperienceSchema.array() })),
        defaultValues: { experiences },
    });

    const onSubmit = (values: { experiences: ExperienceData[] }) => {
        updateData(values.experiences);
        onNext();
    };

    const addExperience = () => {
        setExperiences([
            ...experiences,
            {
                title: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                description: '',
            },
        ]);
    };

    const removeExperience = (index: number) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    return (
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Work Experience</h2>
                <Button onClick={addExperience}>Add Experience</Button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {experiences.map((_, index) => (
                    <div key={index} className="space-y-4">
                        {index > 0 && <hr />}
                        <div className="grid grid-cols-2 gap-4">
                            <Controller
                                control={control}
                                name={`experiences.${index}.title`}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label="Job Title"
                                        errorMessage={errors.experiences?.[index]?.title?.message}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name={`experiences.${index}.company`}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label="Company"
                                        errorMessage={errors.experiences?.[index]?.company?.message}
                                    />
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <Controller
                                control={control}
                                name={`experiences.${index}.location`}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label="Location"
                                        errorMessage={errors.experiences?.[index]?.location?.message}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name={`experiences.${index}.startDate`}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="month"
                                        label="Start Date"
                                        errorMessage={errors.experiences?.[index]?.startDate?.message}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name={`experiences.${index}.endDate`}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="month"
                                        label="End Date"
                                        errorMessage={errors.experiences?.[index]?.endDate?.message}
                                    />
                                )}
                            />
                        </div>
                        <Controller
                            control={control}
                            name={`experiences.${index}.description`}
                            render={({ field }) => (
                                <AITextarea
                                    {...field}
                                    label="Description"
                                    error={errors.experiences?.[index]?.description?.message}
                                />
                            )}
                        />
                        <Button onClick={() => removeExperience(index)}>Remove</Button>
                    </div>
                ))}

                <div className="flex justify-end mt-6">
                    <Button type="submit">Next to Education</Button>
                </div>
            </form>
        </Card>
    );
}

