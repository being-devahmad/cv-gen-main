import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

interface OptionCardProps {
    title: string
    description: string
    icon: React.ReactNode
    href: string
}

export function OptionCard({ title, description, icon, href }: OptionCardProps) {
    return (
        <Link to={href}>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500 h-[270px]">
                <div className="flex justify-center mb-6">
                    {icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </Card>
        </Link>
    )
}

