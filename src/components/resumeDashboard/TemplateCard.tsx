
import { Button } from "@/components/ui/button"
import { Template } from "@/types";
import { Badge } from "../ui/badge";
import resumeOne from "../../assets/images/resumeOne.png"
import { useState } from "react";


interface TemplateCardProps {
    template: Template;
    isActive?: boolean;
}

export function TemplateCard({ template, isActive }: TemplateCardProps) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-[280px] flex flex-col cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="relative ">
                {template.badge && (
                    <div className="absolute top-4 right-4 z-10">
                        <Badge className={`
              ${template.badge === 'most-selected' ? 'bg-green-500' : ''}
              ${template.badge === 'recommended' ? 'bg-orange-500' : ''}
              ${template.badge === 'new' ? 'bg-blue-500' : ''}
            `}>
                            {template.badge === 'most-selected' && 'Most selected'}
                            {template.badge === 'recommended' && 'Recommended'}
                            {template.badge === 'new' && 'New'}
                        </Badge>
                    </div>
                )}
                <div className="aspect-[1/1.4] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={resumeOne}
                        alt={`${template.city} Template`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                        WORD | PDF
                    </Badge>
                </div>
            </div>
            <div className="mt-4 text-center">
                <h3 className="font-medium text-lg">{template.city}</h3>
                {isActive || isHovered && (
                    <div className="absolute inset-0 flex items-end justify-center pb-4transition-opacity duration-300">
                        <Button className="mt-2 w-3/4 bg-[#0B996F] hover:bg-[#418571]">
                            Select
                        </Button>
                    </div>
                )}
            </div>



        </div>
    )
}

