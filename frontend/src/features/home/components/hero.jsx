import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Navigation, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full mt-16 bg-white flex justify-center py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 px-4 lg:px-16">
        {/* Left side: Booking Widget Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-lg">

          {/* Location Header */}
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={16} className="text-black fill-black" />
            <span className="text-sm font-medium">Delhi NCR, IN</span>
            <span className="text-sm font-medium underline cursor-pointer text-gray-600 hover:text-black">Change city</span>
          </div>

          <h1 className="text-[4rem] leading-[1.1] font-bold tracking-tight mb-8">
            Go anywhere with<br />Uber
          </h1>

          {/* Pickup time selector */}
          <button className="flex items-center gap-2 bg-[#f3f3f3] hover:bg-[#e2e2e2] px-4 py-2.5 rounded-full w-fit mb-6 transition-colors">
            <Clock size={16} className="text-black fill-black" />
            <span className="text-sm font-medium">Pickup now</span>
            <ChevronDown size={16} className="text-black ml-1" />
          </button>

          {/* Form Content */}
          <div className="space-y-4 mb-6 relative">
            {/* Visual line connecting circles */}
            <div className="absolute left-[23px] top-[30px] bottom-[30px] w-0.5 bg-black z-0"></div>

            {/* Pickup Input */}
            <div className="relative flex items-center bg-[#f3f3f3] rounded-lg p-3">
              <div className="w-8 flex justify-center z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
              </div>
              <input
                type="text"
                placeholder="Pickup location"
                className="flex-1 bg-transparent border-none outline-none py-1 px-1 text-base placeholder-gray-500 font-medium"
              />
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors mr-1">
                <Navigation size={18} className="text-black fill-black" />
              </button>
            </div>

            {/* Dropoff Input */}
            <div className="relative flex items-center bg-[#f3f3f3] rounded-lg p-3">
              <div className="w-8 flex justify-center z-10">
                <div className="w-2.5 h-2.5 bg-black"></div>
              </div>
              <input
                type="text"
                placeholder="Dropoff location"
                className="flex-1 bg-transparent border-none outline-none py-1 px-1 text-base placeholder-gray-500 font-medium"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 mt-4">
            <Button className="py-6 px-6 text-base font-medium rounded-lg text-white bg-black hover:bg-[#333333] transition-colors">
              See prices
            </Button>
            <span className="text-sm font-medium underline cursor-pointer hover:text-gray-600">
              Log in to see your recent activity
            </span>
          </div>

        </div>

        {/* Right side: Visual Area */}
        <div className="hidden lg:block w-1/2 relative rounded-2xl overflow-hidden min-h-[500px]">
          <img
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=672/height=672/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jZTczNjUzMy1iMWE0LTQ3ZjktOTk0OS0zNWEzZGUyNTkyYzk="
            alt="Travel Suitcase"
            className="w-full h-full absolute inset-0 object-cover"
          />
          {/* Overlay Box */}
          <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-[#b97a6e] to-[#995345] rounded-xl p-5 flex items-center justify-between text-white shadow-lg">
            <span className="text-lg font-bold">Ready to travel?</span>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full font-medium px-6 py-2 h-auto text-sm transition-colors">
              Schedule ahead
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;