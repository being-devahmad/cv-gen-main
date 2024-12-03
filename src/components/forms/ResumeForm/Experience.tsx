// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Plus, Trash2 } from 'lucide-react';
// import { Separator } from '@/components/ui/separator';

// interface ExperienceProps {
//     data: any[];
//     updateData: (data: any[]) => void;
// }

// export default function Experience({ data, updateData }: ExperienceProps) {
//     const [experiences, setExperiences] = useState<any[]>(
//         data || [
//             {
//                 title: '',
//                 company: '',
//                 location: '',
//                 startDate: '',
//                 endDate: '',
//                 current: false,
//                 description: '',
//             },
//         ]
//     );

//     const handleChange = (index: number, field: string, value: string) => {
//         const newExperiences = experiences.map((exp, i) =>
//             i === index ? { ...exp, [field]: value } : exp
//         );
//         setExperiences(newExperiences);
//         updateData(newExperiences);
//     };

//     const addExperience = () => {
//         const newExperiences = [
//             ...experiences,
//             {
//                 title: '',
//                 company: '',
//                 location: '',
//                 startDate: '',
//                 endDate: '',
//                 current: false,
//                 description: '',
//             },
//         ];
//         setExperiences(newExperiences);
//         updateData(newExperiences);
//     };

//     const removeExperience = (index: number) => {
//         const newExperiences = experiences.filter((_, i) => i !== index);
//         setExperiences(newExperiences);
//         updateData(newExperiences);
//     };

//     return (
//         <Card className="p-6 border border-red-600">
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-semibold">Work Experience</h2>
//                 <Button onClick={addExperience} variant="outline" size="sm">
//                     <Plus className="h-4 w-4 mr-2" /> Add Experience
//                 </Button>
//             </div>

//             <div className="space-y-6">
//                 {experiences.map((experience, index) => (
//                     <div key={index}>
//                         {index > 0 && <Separator className="my-6" />}
//                         <div className="relative">
//                             <Button
//                                 variant="ghost"
//                                 size="icon"
//                                 className="absolute right-0 top-0"
//                                 onClick={() => removeExperience(index)}
//                             >
//                                 <Trash2 className="h-4 w-4 text-red-500" />
//                             </Button>

//                             <div className="grid grid-cols-2 gap-4 mb-4">
//                                 <div className="space-y-2">
//                                     <Label>Job Title</Label>
//                                     <Input
//                                         value={experience.title}
//                                         onChange={(e) =>
//                                             handleChange(index, 'title', e.target.value)
//                                         }
//                                         placeholder="Software Engineer"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <Label>Company</Label>
//                                     <Input
//                                         value={experience.company}
//                                         onChange={(e) =>
//                                             handleChange(index, 'company', e.target.value)
//                                         }
//                                         placeholder="Company Name"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-3 gap-4 mb-4">
//                                 <div className="space-y-2">
//                                     <Label>Location</Label>
//                                     <Input
//                                         value={experience.location}
//                                         onChange={(e) =>
//                                             handleChange(index, 'location', e.target.value)
//                                         }
//                                         placeholder="City, Country"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <Label>Start Date</Label>
//                                     <Input
//                                         type="month"
//                                         value={experience.startDate}
//                                         onChange={(e) =>
//                                             handleChange(index, 'startDate', e.target.value)
//                                         }
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <Label>End Date</Label>
//                                     <Input
//                                         type="month"
//                                         value={experience.endDate}
//                                         onChange={(e) =>
//                                             handleChange(index, 'endDate', e.target.value)
//                                         }
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <Label>Description</Label>
//                                 <Textarea
//                                     value={experience.description}
//                                     onChange={(e) =>
//                                         handleChange(index, 'description', e.target.value)
//                                     }
//                                     placeholder="Describe your responsibilities and achievements..."
//                                     className="h-32"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </Card>
//     );
// }


import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { Plus, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ExperienceSchema } from '@/lib/validations';

interface ExperienceProps {
    data: any[];
    updateData: (data: any[]) => void;
    onNext: () => void;
}

type ExperienceData = z.infer<typeof ExperienceSchema>;

export default function Experience({ data, updateData, onNext }: ExperienceProps) {
    const [experiences, setExperiences] = useState<ExperienceData[]>(
        data || [
            {
                title: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                current: false,
                description: '',
            },
        ]
    );

    const form = useForm<{ experiences: ExperienceData[] }>({
        resolver: zodResolver(z.object({ experiences: ExperienceSchema.array() })),
        defaultValues: { experiences },
        mode: "onChange",
    });

    const { control, handleSubmit, formState: { errors } } = form;

    const onSubmit = (values: { experiences: ExperienceData[] }) => {
        updateData(values.experiences);
        onNext();
    };

    const addExperience = () => {
        setExperiences([...experiences, {
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
        }]);
    };

    const removeExperience = (index: number) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    return (
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Work Experience</h2>
                <Button onClick={addExperience} variant="bordered" size="sm">
                    <Plus className="h-4 w-4 mr-2" /> Add Experience
                </Button>
            </div>

            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {experiences.map((_, index) => (
                        <div key={index}>
                            {index > 0 && <Separator className="my-6" />}
                            <div className="relative">
                                <Button
                                    variant="light"
                                    size="sm"
                                    className="absolute right-0 top-0"
                                    onClick={() => removeExperience(index)}
                                >
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>

                                <div className="grid grid-cols-[1fr_1fr_auto] gap-4 mb-4">

                                    <FormField
                                        control={control}
                                        name={`experiences.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem className=" relative  items-center lg:gap-3">
                                                {/* <FormLabel>firstName</FormLabel> */}
                                                <div className="w-full">
                                                    <FormControl>
                                                        <FormControl>
                                                            <Input
                                                                variant="bordered"
                                                                size="md"
                                                                type="text"
                                                                label="Job Title"
                                                                errorMessage={errors.experiences?.[index]?.title?.message}
                                                                isInvalid={!!errors.experiences?.[index]?.title}
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    </FormControl>
                                                    {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    {/* <FormField
                                        control={control}
                                        name={`experiences.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        label="Job Title"
                                                        placeholder="Software Engineer"
                                                        errorMessage={errors.experiences?.[index]?.title?.message}
                                                        isInvalid={!!errors.experiences?.[index]?.title}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    /> */}

                                    <FormField
                                        control={control}
                                        name={`experiences.${index}.company`}
                                        render={({ field }) => (
                                            <FormItem className=" relative  items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="Company"
                                                        errorMessage={errors.experiences?.[index]?.company?.message}
                                                        isInvalid={!!errors.experiences?.[index]?.company}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <FormField
                                        control={control}
                                        name={`experiences.${index}.location`}
                                        render={({ field }) => (
                                            <FormItem className=" relative  items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="Location"
                                                        errorMessage={errors.experiences?.[index]?.location?.message}
                                                        isInvalid={!!errors.experiences?.[index]?.location}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name={`experiences.${index}.startDate`}
                                        render={({ field }) => (
                                            <FormItem className=" relative  items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="month"
                                                        label="Start Date"
                                                        errorMessage={errors.experiences?.[index]?.startDate?.message}
                                                        isInvalid={!!errors.experiences?.[index]?.startDate}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name={`experiences.${index}.endDate`}
                                        render={({ field }) => (
                                            <FormItem className=" relative  items-center lg:gap-3">
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="month"
                                                        label="End Date"
                                                        errorMessage={errors.experiences?.[index]?.endDate?.message}
                                                        isInvalid={!!errors.experiences?.[index]?.endDate}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={control}
                                    name={`experiences.${index}.description`}
                                    render={({ field }) => (
                                        <FormItem className=" relative  items-center lg:gap-3">
                                            <FormControl>
                                                <Textarea
                                                    variant="bordered"
                                                    size="md"
                                                    type="text"
                                                    label="Description"
                                                    errorMessage={errors.experiences?.[index]?.description?.message}
                                                    isInvalid={!!errors.experiences?.[index]?.description}
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
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
                            Next to Education <span className='pl-2'>&#x2192;</span>
                        </Button>
                    </div>
                </form>
            </Form>
        </Card>
    );
}

