import React from 'react';
import { MapPin, ChevronDown } from "lucide-react";

const GetawayPromo = () => {
    return (
        <div className="w-full py-16 px-4 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col max-w-lg">
                    <h2 className="text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-6">
                        Planning your next<br />getaway?
                    </h2>
                    <p className="text-base text-gray-800 mb-8 max-w-md">
                        From weekend road trip to international destination, we've got you covered. Explore transport options, points of interest, and more with our new City Hub.
                    </p>
                    <div>
                        <button className="flex items-center gap-2 bg-black hover:bg-[#333333] px-6 py-3 rounded-full w-fit transition-colors group">
                            <MapPin size={16} className="text-white fill-white" />
                            <span className="text-sm font-medium text-white">Delhi NCR</span>
                            <ChevronDown size={16} className="text-white ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <div className="rounded-xl overflow-hidden w-full max-w-lg aspect-[4/3] relative">
                        <img
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1116/height=744/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hMDU4OGFmZS0wNjFlLTQ3OWQtYjczMC00ZGQ4NzJjZTM4NTIucG5n"
                            alt="City Hub Illustration"
                            className="w-full h-full object-cover"
                        />
                        {/* Using a placeholder for now since the exact colorful city illustration wasn't provided, but structure is identical */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetawayPromo;
