import React from 'react';
import { ArrowRight } from "lucide-react";

const AppPromo = () => {
    return (
        <div className="w-full bg-[#f6f6f6] py-20 px-4 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[2.5rem] font-bold tracking-tight mb-8">
                    Do more in the app
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* QR Code Card */}
                    <a href="#" className="group flex items-center justify-between border-2 border-gray-200 hover:border-black bg-white p-6 rounded-xl transition-colors cursor-pointer min-h-[140px]">
                        <div className="flex items-center gap-6">
                            <div className="w-[120px] h-[120px] p-2 bg-white flex-shrink-0">
                                {/* Using a placeholder QR code image */}
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                    alt="QR Code"
                                    className="w-full h-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-[1.375rem] font-bold leading-tight">Download the Uber app</h3>
                                <p className="text-gray-600 mt-2 text-base">Scan to download</p>
                            </div>
                        </div>
                        <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Sign up Card */}
                    <a href="#" className="group flex items-center justify-between border-2 border-gray-200 hover:border-black bg-white p-6 rounded-xl transition-colors cursor-pointer min-h-[140px]">
                        <div className="flex items-center gap-6">
                            <div className="w-[120px] h-[120px] bg-black rounded-[24px] flex items-center justify-center p-6 flex-shrink-0">
                                <span className="text-white text-3xl font-bold tracking-tighter">Uber</span>
                            </div>
                            <div>
                                <h3 className="text-[1.375rem] font-bold leading-tight">Sign up to ride</h3>
                            </div>
                        </div>
                        <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default AppPromo;
