import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInfoSchema } from "@/lib/validations";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

interface ContactInfoProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void; // Add this prop for navigation
}
type ContactInfoData = z.infer<typeof ContactInfoSchema>;

export default function ContactInfo({
  data,
  updateData,
  onNext,
}: ContactInfoProps) {
  const form = useForm<ContactInfoData>({
    resolver: zodResolver(ContactInfoSchema),
    defaultValues: data || {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      postalCode: "",
    },
    mode: "onChange",
  });
  const [allData, setAllData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    postal_code: "",
    experinces: [{}],
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (values: ContactInfoData) => {
    updateData(values);
    console.log("data-->", allData);
    onNext();
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div>
        <Form {...form}>
          <form
            className="flex w-full flex-col gap-8 lg:gap-5"
            onSubmit={handleSubmit(onSubmit)}
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
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setAllData({
                        ...allData,
                        firstName: e.target.value,
                      });
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
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setAllData({
                        ...allData,
                        lastName: e.target.value,
                      });
                    }}
                  />
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                            onChange={(e) => {
                                field.onChange(e);
                                setAllData({
                                  ...allData,
                                  phone: e.target.value,
                                });
                              }}
                          />
                        </FormControl>
                      </FormControl>
                      {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                    </div>
                  </FormItem>
                )}
              />{" "}
              <FormField
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
                            onChange={(e) => {
                                field.onChange(e);
                                setAllData({
                                  ...allData,
                                  email: e.target.value,
                                });
                              }}
                          />
                        </FormControl>
                      </FormControl>
                      {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
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
                            onChange={(e) => {
                                field.onChange(e);
                                setAllData({
                                  ...allData,
                                  country: e.target.value,
                                });
                              }}
                          />
                        </FormControl>
                      </FormControl>
                      {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                    </div>
                  </FormItem>
                )}
              />{" "}
              <FormField
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
                            onChange={(e) => {
                                field.onChange(e);
                                setAllData({
                                  ...allData,
                                  city: e.target.value,
                                });
                              }}
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
                            onChange={(e) => {
                                field.onChange(e);
                                setAllData({
                                  ...allData,
                                  postal_code: e.target.value,
                                });
                              }}
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
                Next to Experience <span className="pl-2">&#x2192;</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Card>
  );
}
