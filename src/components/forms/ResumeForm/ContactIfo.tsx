import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactInfoSchema } from '@/lib/validations';
import { z } from 'zod';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

interface ContactInfoProps {
    data: any;
    updateData: (data: any) => void;
    onNext: () => void; // Add this prop for navigation
}
type ContactInfoData = z.infer<typeof ContactInfoSchema>;

export default function ContactInfo({ data, updateData, onNext }: ContactInfoProps) {

    // const [formData, setFormData] = useState(data || {
    //     fullName: '',
    //     email: '',
    //     phone: '',
    //     location: '',
    //     summary: '',
    // });


    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     const { name, value } = e.target;
    //     const newData = { ...formData, [name]: value };
    //     setFormData(newData);
    //     updateData(newData);
    // };


    const form = useForm<ContactInfoData>({
        resolver: zodResolver(ContactInfoSchema),
        defaultValues: data || {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            country: "",
            city: "",
            postalCode: ""
        },
        mode: "onChange",
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = (values: ContactInfoData) => {
        updateData(values);
        console.log("data-->", values)
        onNext();
    };


    return (
        <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            {/* <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className='grid grid-cols-1'>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="City, Country"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                        id="summary"
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        placeholder="Write a brief summary of your professional background..."
                        className="h-32"
                    />
                </div>
            </div> */}

            <div>
                <Form {...form}>
                    <form
                        className="flex w-full flex-col gap-8 lg:gap-5"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <FormField
                                control={control}
                                name="firstName"
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
                                                        label="First Name"
                                                        errorMessage={errors.firstName?.message}
                                                        isInvalid={!!errors.firstName?.message}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormControl>
                                            {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className=" relative  items-center lg:gap-3">
                                        {/* <FormLabel>lastName</FormLabel> */}
                                        <div className="w-full">
                                            <FormControl>
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="Last Name"
                                                        errorMessage={errors.lastName?.message}
                                                        isInvalid={!!errors.lastName?.message}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormControl>
                                            {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <FormField
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className=" relative  items-center lg:gap-3">
                                        {/* <FormLabel>phone</FormLabel> */}
                                        <div className="w-full">
                                            <FormControl>
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="Phone"
                                                        errorMessage={errors.phone?.message}
                                                        isInvalid={!!errors.phone?.message}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormControl>
                                            {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                        </div>
                                    </FormItem>
                                )}
                            /> <FormField
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className=" relative  items-center lg:gap-3">
                                        {/* <FormLabel>Email</FormLabel> */}
                                        <div className="w-full">
                                            <FormControl>
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="email"
                                                        label="Email"
                                                        errorMessage={errors.email?.message}
                                                        isInvalid={!!errors.email?.message}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormControl>
                                            {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                            <FormField
                                control={control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className=" relative  items-center lg:gap-3">
                                        {/* <FormLabel>country</FormLabel> */}
                                        <div className="w-full">
                                            <FormControl>
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="Country"
                                                        errorMessage={errors.country?.message}
                                                        isInvalid={!!errors.country?.message}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormControl>
                                            {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                        </div>
                                    </FormItem>
                                )}
                            /> <FormField
                                control={control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem className=" relative  items-center lg:gap-3">
                                        {/* <FormLabel>city</FormLabel> */}
                                        <div className="w-full">
                                            <FormControl>
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="City"
                                                        errorMessage={errors.city?.message}
                                                        isInvalid={!!errors.city?.message}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormControl>
                                            {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="postalCode"
                                render={({ field }) => (
                                    <FormItem className=" relative  items-center lg:gap-3">
                                        {/* <FormLabel>postalCode</FormLabel> */}
                                        <div className="w-full">
                                            <FormControl>
                                                <FormControl>
                                                    <Input
                                                        variant="bordered"
                                                        size="md"
                                                        type="text"
                                                        label="Postal Code"
                                                        errorMessage={errors.postalCode?.message}
                                                        isInvalid={!!errors.postalCode?.message}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormControl>
                                            {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex items-center justify-end mt-10">


                            <Button
                                radius="sm"
                                className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
                                // isLoading={isLoading}
                                variant="faded"
                                type="submit"
                            >
                                Next to Experience <span className='pl-2'>
                                    &#x2192;
                                </span>
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>


        </Card>
    );
}