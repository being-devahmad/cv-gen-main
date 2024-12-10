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

export const ContactInfo: React.FC<ContactInfoProps> = ({
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
      postalCode: allData.postalCode || "",
      summary: allData.summary || "",
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleInputChange = (field: string, value: string) => {
    setAllData({ ...allData, [field]: value });
  };

  const handleSubmitContactDetails = (values: z.infer<typeof ContactInfoSchema>) => {
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
          onSubmit={handleSubmit(handleSubmitContactDetails)}
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("firstName", e.target.value);
                  }}
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("lastName", e.target.value);
                  }}
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("phone", e.target.value);
                  }}
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("email", e.target.value);
                  }}
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("country", e.target.value);
                  }}
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("city", e.target.value);
                  }}
                />
              )}
            />
            {/* Postal Code */}
            <FormField
              control={control}
              name="postalCode"
              render={({ field }) => (
                <Input
                  label="Postal Code"
                  variant="bordered"
                  errorMessage={errors.postalCode?.message}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("postalCode", e.target.value);
                  }}
                />
              )}
            />
          </div>
          <FormField
            control={control}
            name="summary"
            render={({ field }) => (
              <textarea
                className="textarea-bordered bg-[#F7F7F8] w-full p-2 border-2 rounded-lg shadow-md"
                placeholder="Enter a brief summary"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange("summary", e.target.value);
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
