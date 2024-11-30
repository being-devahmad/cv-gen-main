import { CreateNewCard } from "@/components/resumeDashboard/CreateNewCard"
import { Header } from "@/components/resumeDashboard/Header"
import { OptionCard } from "@/components/resumeDashboard/OptionCard"
import { ResumeCard } from "@/components/resumeDashboard/ResumeCard"
import { ExistingResumeIcon, NewResumeIcon } from "@/components/resumeDashboard/ResumeIcons"


export default function Resume() {
    const sampleResume = {
        id: "1",
        title: "Untitled",
        lastUpdated: "28 November, 16:08"
    }

    return (
        // <div className="max-w-7xl mx-auto px-4 py-8">
        //     <Header />
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        //         <ResumeCard  resume={sampleResume} />
        //         <CreateNewCard />
        //     </div>
        // </div>

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

