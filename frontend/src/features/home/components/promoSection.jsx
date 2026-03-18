import React from 'react';
import { Button } from "@/components/ui/button";

const PromoSection = ({ title, description, image, ctaPrimary, ctaSecondary, imageLeft = false }) => {
    const TextContent = () => (
        <div className="flex flex-col justify-center max-w-lg lg:pr-12">
            <h2 className="text-[3.25rem] leading-[1.1] font-bold tracking-tight mb-6">
                {title}
            </h2>
            <p className="text-lg text-gray-800 mb-8">
                {description}
            </p>
            <div className="flex gap-4">
                {ctaPrimary && (
                    <Button className="py-6 px-6 text-base font-medium rounded-lg text-white bg-black hover:bg-[#333333] transition-colors">
                        {ctaPrimary}
                    </Button>
                )}
                {ctaSecondary && (
                    <Button variant="ghost" className="py-6 px-6 text-base font-medium underline text-black hover:bg-transparent hover:text-gray-600 transition-colors">
                        {ctaSecondary}
                    </Button>
                )}
            </div>
        </div>
    );

    const ImageContent = () => (
        <div className="w-full h-full min-h-[400px]">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
        </div>
    );

    return (
        <div className="w-full py-16 px-4 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                    {imageLeft ? (
                        <>
                            <ImageContent />
                            <TextContent />
                        </>
                    ) : (
                        <>
                            <TextContent />
                            <ImageContent />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PromoSection;
