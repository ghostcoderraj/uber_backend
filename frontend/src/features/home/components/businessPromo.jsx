import React from 'react';
import { Button } from "@/components/ui/button";

const BusinessPromo = () => {
    return (
        <div className="w-full bg-black text-white py-20 px-4 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Area */}
                    <div className="flex flex-col max-w-lg lg:pr-8">
                        <h2 className="text-[3.25rem] leading-[1.1] font-bold tracking-tight mb-6">
                            Looking for business solutions?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Get information about how companies leverage Uber for Business:
                        </p>

                        <ul className="flex flex-col gap-6 mb-10 text-base font-medium">
                            <li className="flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                                <a href="#" className="underline underline-offset-4 hover:text-gray-300 transition-colors">Business travel</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                                <a href="#" className="underline underline-offset-4 hover:text-gray-300 transition-colors">Courtesy rides</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                                <a href="#" className="underline underline-offset-4 hover:text-gray-300 transition-colors">Meal programs</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                                <a href="#" className="underline underline-offset-4 hover:text-gray-300 transition-colors">Item delivery</a>
                            </li>
                        </ul>

                        <div className="flex flex-wrap items-center gap-6">
                            <Button className="py-6 px-6 text-base font-medium rounded-lg text-black bg-white hover:bg-gray-200 transition-colors">
                                Get started
                            </Button>
                            <Button variant="ghost" className="text-white hover:bg-transparent hover:text-gray-300 underline underline-offset-4 text-base font-medium p-0 transition-colors">
                                Check out our solutions
                            </Button>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="w-full min-h-[400px]">
                        <img
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=576/height=324/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9kNjQ4ZjViNi1iYjVmLTQ1MGUtODczMy05MGFlZmVjYmQwOWUuanBn"
                            alt="Uber for Business Illustration"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPromo;
