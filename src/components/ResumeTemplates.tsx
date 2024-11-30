import { resumeList } from "@/data/resumeList";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Image } from "@nextui-org/react";
// import { AspectRatio } from "./ui/aspect-ratio";

const ResumeTemplates = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {resumeList.map((resume, index) => (
        <Card key={index}>
          <CardHeader className="p-3">
            <div className="max-w-[240px]">
              {/* <AspectRatio ratio={16 / 9}> */}
              <Image
                src={resume.imageSrc}
                alt="Image"
                className="rounded-md w-full object-cover"
              />
              {/* </AspectRatio> */}
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="mt-2 p-2">
            <h2 className="font-bold text-md">{resume.name}</h2>
            <p className="text-slate-600 text-xm">{resume.lastUpdated}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResumeTemplates;
