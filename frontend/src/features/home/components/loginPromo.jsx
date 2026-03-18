import React from 'react';
import { Button } from "@/components/ui/button";

const LoginPromo = () => {
    return (
        <div className="w-full py-16 px-4 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col max-w-lg">
                    <h2 className="text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-4">
                        Log in to see your account details
                    </h2>
                    <p className="text-base text-gray-800 mb-8 max-w-md">
                        View past trips, tailored suggestions, support resources, and more.
                    </p>
                    <div className="flex items-center gap-6">
                        <Button className="py-6 px-6 text-base font-medium rounded-lg text-white bg-black hover:bg-[#333333] transition-colors">
                            Log in to your account
                        </Button>
                        <span className="text-base font-medium border-b border-black cursor-pointer hover:text-gray-600 hover:border-gray-600 transition-colors pb-0.5">
                            Create an account
                        </span>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <div className="bg-[#f3f3f3] rounded-xl overflow-hidden w-full max-w-md aspect-[4/3] flex items-end justify-center relative">
                        {/* Fallback illustration using an Uber asset since the one in the snippet is likely an internal SVG */}
                        <img
                            src="https://tb-static.uber.com/prod/udam-assets/850e6b6d-a29e-4960-bcab-46de99547d24.svg"
                            alt="Account Details Illustration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPromo;
