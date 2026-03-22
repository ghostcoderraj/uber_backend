import React, { useState } from 'react';
import { MapPin, ChevronDown, X, Search } from "lucide-react";

const GetawayPromo = () => {
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
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
                        <button 
                            onClick={() => setIsLocationModalOpen(true)}
                            className="flex items-center gap-2 bg-black hover:bg-[#333333] px-6 py-3 rounded-full w-fit transition-colors group"
                        >
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

            {/* Change Location Modal Overlay */}
            {isLocationModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-[900px] h-full max-h-[90vh] md:h-auto md:min-h-[500px] rounded-2xl p-8 lg:p-14 relative flex flex-col shadow-2xl overflow-y-auto">
                        
                        <button 
                            onClick={() => setIsLocationModalOpen(false)} 
                            className="absolute top-6 right-6 lg:top-10 lg:right-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={28} className="text-black font-bold" strokeWidth={3} />
                        </button>
                        
                        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 mt-16 w-full">
                            {/* Left Side: Title */}
                            <div className="w-full md:w-1/2 lg:w-2/5">
                                <h2 className="text-[2.5rem] leading-[1.1] font-bold tracking-tight text-black">
                                    Change your location
                                </h2>
                            </div>
                            
                            {/* Right Side: Search & Content */}
                            <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col pt-2">
                                <div className="relative w-full mb-6">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <input 
                                        type="text" 
                                        placeholder="Enter a city" 
                                        className="w-full bg-[#f3f3f3] text-black border-none rounded-lg py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-black placeholder-gray-500 font-medium text-base hover:bg-[#e2e2e2] transition-colors"
                                    />
                                </div>
                                
                                <p className="text-[15px] text-gray-800 leading-relaxed mb-6 font-medium">
                                    You're seeing information for India. To see local features and services for another location, enter a city in the search box above.
                                </p>
                                
                                <button className="bg-black hover:bg-[#333333] text-white px-6 py-3.5 rounded-lg font-medium text-base w-fit transition-colors">
                                    Show more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetawayPromo;
