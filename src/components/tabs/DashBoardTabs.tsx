import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@nextui-org/button";
import ResumeTemplates from "../ResumeTemplates";
import CoverLetterTemplates from "../CoverLetterTemplates";

const DashBoardTabs = () => {
  return (
    <div className="mt-10">
      <div>
        <Tabs defaultValue="resume" className="w-full">
          <div className="flex mb-6 items-center justify-between w-full">
            <TabsList>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="coverLetter">Cover Letter</TabsTrigger>
            </TabsList>
            <Button
              variant="flat"
              className={
                "bg-button-gpt font-bold text-white hover:to-button-gpt-hover"
              }
            >
              View All
            </Button>
          </div>
          <TabsContent value="resume">
            <ResumeTemplates />
          </TabsContent>
          <TabsContent value="coverLetter">
            <CoverLetterTemplates />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashBoardTabs;
