import { useAuth } from "@/hooks/useAuth";
import { ContactUsSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { addMessageToFirestore } from "@/lib/actions";

type ContactUsFormData = z.infer<typeof ContactUsSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuth();

  const form = useForm<ContactUsFormData>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      email: user?.email || "",
      message: "",
      name: user?.name || "",
      subject: "",
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const onSubmit = async (values: ContactUsFormData) => {
    setIsLoading(true);
    try {
      if (user?.id) {
        await addMessageToFirestore(values, user.id);
        toast({
          title: "Success",
          description: "Message sent. We will get back to you soon.",
        });
      } else {
        throw new Error("User ID is undefined");
      }
      reset({});
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Unable to send message right now",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-4">
      <CardBody>
        <h3 className="text-button-gpt font-semibold">Get in Touch</h3>
        <h2 className="md:text-3xl text-5xl lg:text-5xl font-semibold mt-4 mb-4 ">
          Let's Chat, Reach Out to Us
        </h2>
        <p className=" text-secondary-text">
          Have questions or feedback? We're here to help. Send us a message, and
          we'll respond within 24 hours
        </p>
        <Divider className="my-10" />
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Name</FormLabel> */}
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      label="Name"
                      errorMessage={errors.name?.message}
                      isInvalid={!!errors.name?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
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
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Subject</FormLabel> */}
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      label="Subject"
                      errorMessage={errors.subject?.message}
                      isInvalid={!!errors.subject?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Message</FormLabel> */}
                  <FormControl>
                    <Textarea
                      variant="bordered"
                      size="lg"
                      label="Message"
                      errorMessage={errors.message?.message}
                      isInvalid={!!errors.message?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <Button
              radius="sm"
              className="text-white font-bold w-fit ml-auto hover:bg-button-gpt-hover bg-button-gpt"
              isLoading={isLoading}
              variant="faded"
              type="submit"
            >
              Send message
            </Button>
          </form>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
