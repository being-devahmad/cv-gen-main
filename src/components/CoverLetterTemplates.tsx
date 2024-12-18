// import { resumeList } from "@/data/resumeList";
// import { Card, CardContent, CardHeader } from "./ui/card";
// import { Separator } from "./ui/separator";

import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CoverLetterTemplates = () => {
  const navigate = useNavigate()

  const handleCreateCoverLetter = () => {
    navigate('/pricing')
  }

  return (
    // <div className="flex items-center justify-evenly gap-3">
    //   {resumeList.map((resume, index) => (
    //     <Card key={index}>
    //       <CardHeader className="p-3">
    //         <div className="max-w-[240px]">
    //           {/* <AspectRatio ratio={16 / 9}> */}
    //           <img
    //             src={resume.imageSrc}
    //             alt="Image"
    //             className="rounded-md object-cover"
    //           />
    //           {/* </AspectRatio> */}
    //         </div>
    //       </CardHeader>
    //       <Separator />
    //       <CardContent className="mt-2 p-2">
    //         <h2 className="font-bold text-md">{resume.name}</h2>
    //         <p className="text-slate-600 text-xm">{resume.lastUpdated}</p>
    //       </CardContent>
    //     </Card>
    //   ))}
    // </div>


    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Why are cover letters needed?
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                A cover letter, covering letter, motivation letter, motivational letter or a letter of
                motivation is a letter of introduction attached to, or accompanying another
                document such as a résumé or a curriculum vitae.
              </p>

              <p>
                Job seekers frequently send a cover letter along with their curriculum vitae or
                applications for employment as a way of introducing themselves to potential
                employers and explaining their suitability for the desired positions. Employers may
                look for individualized and thoughtfully written cover letters as one method of
                screening out applicants who are not sufficiently interested in their positions or who
                lack necessary basic skills.
              </p>

              <Button onClick={handleCreateCoverLetter}> Create New <ArrowRight /> </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-start">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30" />
              <img
                src="https://resumedone.co/static/img/no_cover_letter.png"
                alt="Cover letter illustration"
                className="relative w-full h-auto"
                style={{
                  filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))"
                }}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CoverLetterTemplates;
