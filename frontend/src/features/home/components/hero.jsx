import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CarFront, Calendar, Clock, MapPin, Navigation } from "lucide-react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState('ride');

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-4rem)] mt-16 bg-[#f6f6f6]">
      {/* Left side: Booking Widget Area */}
      <div className="w-full lg:w-1/2 flex justify-center items-center py-12 px-4 lg:px-16 relative z-10">
        <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full max-w-[520px] overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('ride')}
              className={`flex-1 py-4 flex flex-col items-center gap-2 text-sm font-medium transition-colors ${activeTab === 'ride' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
            >
              <CarFront size={24} className={activeTab === 'ride' ? "text-black" : "text-gray-400"} />
              Ride
            </button>
            <button
              onClick={() => setActiveTab('drive')}
              className={`flex-1 py-4 flex flex-col items-center gap-2 text-sm font-medium transition-colors ${activeTab === 'drive' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={activeTab === 'drive' ? "text-black" : "text-gray-400"}>
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" y1="8" x2="12" y2="8" />
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
              </svg>
              Drive or deliver
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`flex-1 py-4 flex flex-col items-center gap-2 text-sm font-medium transition-colors ${activeTab === 'rent' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={activeTab === 'rent' ? "text-black" : "text-gray-400"}>
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              Rent your fleet
            </button>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <h1 className="text-[3.25rem] leading-[1.1] font-bold tracking-tight mb-8">
              Request a ride, hop in, and go.
            </h1>

            <div className="space-y-4">
              {/* Input Group with visual connecting line */}
              <div className="relative">
                {/* Visual line connecting circles */}
                <div className="absolute left-[23px] top-[30px] bottom-[30px] w-0.5 bg-black z-0"></div>

                {/* Pickup Input */}
                <div className="relative flex items-center bg-[#f3f3f3] rounded-lg p-2 mb-3">
                  <div className="w-8 flex justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="flex-1 bg-transparent border-none outline-none py-2 px-1 text-base placeholder-gray-600"
                  />
                  <button className="p-2 hover:bg-gray-200 rounded-full transition-colors mr-1">
                    <Navigation size={18} className="text-black" />
                  </button>
                </div>

                {/* Dropoff Input */}
                <div className="relative flex items-center bg-[#f3f3f3] rounded-lg p-2">
                  <div className="w-8 flex justify-center z-10">
                    <div className="w-2.5 h-2.5 bg-black"></div>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter destination"
                    className="flex-1 bg-transparent border-none outline-none py-2 px-1 text-base placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Date and Time selectors */}
              <div className="flex gap-4 pt-2">
                <button className="flex-1 flex items-center justify-between bg-[#f3f3f3] hover:bg-[#e2e2e2] rounded-lg p-3.5 transition-colors">
                  <span className="text-sm font-medium">Pickup date</span>
                  <Calendar size={18} className="text-black" />
                </button>
                <button className="flex-1 flex items-center justify-between bg-[#f3f3f3] hover:bg-[#e2e2e2] rounded-lg p-3.5 transition-colors">
                  <span className="text-sm font-medium">Time</span>
                  <Clock size={18} className="text-black" />
                </button>
              </div>

              <Button className="w-full mt-6 py-6 text-base font-medium rounded-lg text-white bg-black hover:bg-[#333333] transition-colors">
                See prices
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Visual Area */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070')" }}>
        {/* We use an unsplash placeholder representing a city/transport vibe */}
      </div>
    </div>
  );
};

export default Hero;