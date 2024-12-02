import { Template } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Image } from '@nextui-org/react'

interface TemplateCardProps {
    template: Template
    isActive: boolean
}

export function TemplateCard({ template, isActive }: TemplateCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${isActive ? 'shadow-2xl' : 'shadow-md'
                }`}

        >
            <div className="aspect-[3/4] w-full" onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Image
                    src={template.image}
                    alt={template.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{template.name}</h3>
                {template.badge && (
                    <Badge
                        variant={
                            template.badge === 'new'
                                ? 'default'
                                : template.badge === 'most-selected'
                                    ? 'secondary'
                                    : 'outline'
                        }
                        className="mb-2"
                    >
                        {template.badge}
                    </Badge>
                )}
                {true && (
                    <Button
                        variant="secondary"
                        className={`w-full mt-2 transition-all duration-300 ${isHovered || isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                    // onClick={() => onSelect(template)}
                    >
                        Select Template
                    </Button>
                )}
            </div>
        </div>
    )
}

