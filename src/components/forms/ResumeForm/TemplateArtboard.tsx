import React, { ReactNode } from 'react';

interface TemplateArtboardProps {
    children: ReactNode;
}

const TemplateArtboard: React.FC<TemplateArtboardProps> = ({ children }) => {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-100 flex items-center justify-center p-8 ">
            <div className="w-[210mm] h-[297mm] bg-white shadow-2xl overflow-hidden scale-[0.7] transform origin-top">
                <div className="w-full h-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TemplateArtboard;

