import { CreateNewCard } from "@/components/resumeDashboard/CreateNewCard"
import { Header } from "@/components/resumeDashboard/Header"
import { ResumeCard } from "@/components/resumeDashboard/ResumeCard"


export default function Resume() {
    const sampleResume = {
        id: "1",
        title: "Untitled",
        lastUpdated: "28 November, 16:08"
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResumeCard  resume={sampleResume} />
                <CreateNewCard />
            </div>
        </div>
    )
}

