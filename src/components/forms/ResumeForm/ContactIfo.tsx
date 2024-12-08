import { Card } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInfoSchema } from "@/lib/validations";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { z } from "zod";

interface ContactInfoProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ContactIfo: React.FC<ContactInfoProps> = ({
  allData,
  setAllData,
  activeTab,
  setActiveTab,
}) => {
  const form = useForm({
    resolver: zodResolver(ContactInfoSchema),
    defaultValues: {
      firstName: allData.firstName || "",
      lastName: allData.lastName || "",
      phone: allData.phone || "",
      email: allData.email || "",
      country: allData.country || "",
      city: allData.city || "",
      postal_code: allData.postal_code || "",
      description: allData.description || "", // Add description here
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const Submit = (values: z.infer<typeof ContactInfoSchema>) => {
    console.log("Form Submitted", values);
    setAllData({ ...allData, ...values });
    console.log("Updated AllData:", { ...allData, ...values });
    setActiveTab("experience");
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-8 lg:gap-5"
          onSubmit={handleSubmit(Submit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* First Name */}
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <Input
                  label="First Name"
                  variant="bordered"
                  errorMessage={errors.firstName?.message}
                  {...field}
                />
              )}
            />
            {/* Last Name */}
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <Input
                  label="Last Name"
                  variant="bordered"
                  errorMessage={errors.lastName?.message}
                  {...field}
                />
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Phone */}
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  label="Phone"
                  variant="bordered"
                  errorMessage={errors.phone?.message}
                  {...field}
                />
              )}
            />
            {/* Email */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  label="Email"
                  type="email"
                  variant="bordered"
                  errorMessage={errors.email?.message}
                  {...field}
                />
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Country */}
            <FormField
              control={control}
              name="country"
              render={({ field }) => (
                <Input
                  label="Country"
                  variant="bordered"
                  errorMessage={errors.country?.message}
                  {...field}
                />
              )}
            />
            {/* City */}
            <FormField
              control={control}
              name="city"
              render={({ field }) => (
                <Input
                  label="City"
                  variant="bordered"
                  errorMessage={errors.city?.message}
                  {...field}
                />
              )}
            />
            {/* Postal Code */}
            <FormField
              control={control}
              name="postal_code"
              render={({ field }) => (
                <Input
                  label="Postal Code"
                  variant="bordered"
                  errorMessage={errors.postal_code?.message}
                  {...field}
                />
              )}
            />
          </div>
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <textarea
                className="textarea-bordered bg-[#F7F7F8] w-full p-2  border-2 rounded-lg shadow-md"
                placeholder="Enter a brief summary"
                value={field.value || allData?.description || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  console.log("Updated description:", value); // Debug log
                  field.onChange(e); // React Hook Form state
                  setAllData({
                    ...allData,
                    description: value, // Update local state
                  });
                }}
              />
            )}
          />

          <div className="flex items-center justify-end mt-10">
            <Button
              radius="sm"
              className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
              variant="faded"
              type="submit"
            >
              Next to Experience <span className="pl-2">&#x2192;</span>
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ContactIfo;
