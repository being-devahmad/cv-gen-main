import { resumeList } from "@/data/resumeList";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

const CoverLetterTemplates = () => {
  return (
    <div className="flex items-center justify-evenly gap-3">
      {resumeList.map((resume, index) => (
        <Card key={index}>
          <CardHeader className="p-3">
            <div className="max-w-[240px]">
              {/* <AspectRatio ratio={16 / 9}> */}
              <img
                src={resume.imageSrc}
                alt="Image"
                className="rounded-md object-cover"
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

export default CoverLetterTemplates;
