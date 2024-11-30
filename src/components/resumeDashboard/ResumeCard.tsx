import { Card } from "@/components/ui/card"
import { Resume } from "@/types"
import { Edit2, Copy, Trash2 } from 'lucide-react'

interface ResumeCardProps {
    resume: Resume
}

export function ResumeCard({ resume }: ResumeCardProps) {
    return (
        <Card className="p-4 space-y-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-lg">
                {/* Resume preview placeholder */}
               
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <h3 className="font-medium">{resume.title}</h3>
                    <Edit2 className="w-4 h-4 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">Updated {resume.lastUpdated}</p>
            </div>
            <div className="space-y-2">
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                    <Edit2 className="w-4 h-4" />
                    Edit
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                    <Copy className="w-4 h-4" />
                    Duplicate
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                    <Trash2 className="w-4 h-4" />
                    Delete
                </button>
            </div>
        </Card>
    )
}

