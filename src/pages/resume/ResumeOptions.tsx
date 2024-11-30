
import { OptionCard } from "@/components/resumeDashboard/OptionCard"
import { ExistingResumeIcon, NewResumeIcon } from "@/components/resumeDashboard/ResumeIcons"
import { useParams } from "react-router-dom";

export default function BuilderLandingPage() {

    const { id } = useParams();

    // Now you can use the `id` in your component
    console.log('Selected template ID:', id);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How do you want to{" "}
                    <span className="text-blue-500">build your resume</span>?
                </h1>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <OptionCard
                        title="Create a new resume"
                        description="We will help you create a resume step-by-step"
                        icon={<NewResumeIcon />}
                        href={`start`}
                    />
                    <OptionCard
                        title="I already have a resume"
                        description="We'll re-format it and fill in your information so you don't have to."
                        icon={<ExistingResumeIcon />}
                        href={`/start`}
                    />
                </div>
            </div>
        </div>
    )
}

