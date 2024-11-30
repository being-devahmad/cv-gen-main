import ContactForm from "@/components/forms/ContactForm";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import PaddingContainer from "@/components/PaddingContainer";
import GetHelpCard from "@/components/GetHelp";
import { Building2Icon, MailIcon, PhoneIcon, Twitter } from "lucide-react";
import { Card, CardBody, Image } from "@nextui-org/react";

const ContactUs = () => {
  return (
    <div className="pb-32">
      <PaddingContainer className="py-10 px-0 md:py-20">
        {/* <div className="text-center">
          <Heading>Contact</Heading>
          <p className="text-secondary-text">
            Get in touch and let us know how we can help
          </p>
        </div> */}
        <MaxWidthContainer>
          <div className="grid gap-5 md:grid-cols-2">
            <ContactForm />
            <div className="flex flex-col gap-3">
              <div className="hidden h-full md:block">
                <Image src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <Card className="h-full min-h-[350px]">
                <CardBody className="gap-3 justify-center p-4">
                  <GetHelpCard
                    header="Email"
                    content="startCv@gmail.com"
                    icon={MailIcon}
                  />
                  <GetHelpCard
                    header="Phone"
                    content="12345678"
                    icon={PhoneIcon}
                  />
                  <GetHelpCard
                    header="Address"
                    content="Address is nice"
                    icon={Building2Icon}
                  />
                  <GetHelpCard
                    header="Twitter"
                    content="@startCv"
                    icon={Twitter}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </MaxWidthContainer>
      </PaddingContainer>
    </div>
  );
};

export default ContactUs;
