import React, { ReactNode } from 'react';

interface TemplateArtboardProps {
    children: ReactNode;
}

const TemplateArtboard: React.FC<TemplateArtboardProps> = ({ children }) => {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-8 ">
            <div className="w-[2480px] h-[3508px] bg-white shadow-2xl overflow-hidden scale-[0.7] transform origin-top">
                {children}
            </div>
        </div>
    );
};

export default TemplateArtboard;

