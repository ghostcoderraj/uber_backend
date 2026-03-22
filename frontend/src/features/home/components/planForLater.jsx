import React, { useState } from 'react';
import { Calendar, Clock, Equal } from "lucide-react";

const PlanForLater = () => {
    const [reserveDate, setReserveDate] = useState('');
    const [reserveTime, setReserveTime] = useState('');
    return (
        <div className="w-full py-16 px-4 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-8">
                    Plan for later
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side: Booking Widget + Illustration */}
                    <div className="relative w-full lg:w-2/3 bg-[#a8ced1] rounded-2xl overflow-hidden flex flex-col md:flex-row p-8 lg:p-12 min-h-[400px]">

                        {/* Booking Widget (Overlaid on background) */}
                        <div className="relative z-10 w-full max-w-sm flex flex-col justify-center">
                            <h3 className="text-[2.5rem] leading-[1.1] font-bold tracking-tight mb-8 text-black">
                                Get your ride right<br />with Uber Reserve
                            </h3>

                            <div className="space-y-2">
                                <p className="text-sm font-bold text-black mb-2">Choose date and time</p>
                                <div className="flex gap-4 mb-4">
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-700 mb-1">Date</p>
                                        <div className="relative w-full flex items-center bg-[#f3f3f3] hover:bg-[#e2e2e2] rounded-lg transition-colors overflow-hidden px-4 py-3">
                                            <Calendar size={18} className="text-black absolute left-4 z-10 pointer-events-none" />
                                            <input 
                                                type="date"
                                                value={reserveDate}
                                                onChange={(e) => setReserveDate(e.target.value)}
                                                className="w-full bg-transparent outline-none pl-8 text-base font-medium text-black cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:z-20 cursor-pointer"
                                            />
                                            {/* We hide the default calendar icon and make the entire box clickable by stretching the native ghost icon */}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-700 mb-1">Time</p>
                                        <div className="relative w-full flex items-center bg-[#f3f3f3] hover:bg-[#e2e2e2] rounded-lg transition-colors overflow-hidden px-4 py-3">
                                            <Clock size={18} className="text-black absolute left-4 z-10 pointer-events-none" />
                                            <input 
                                                type="time"
                                                value={reserveTime}
                                                onChange={(e) => setReserveTime(e.target.value)}
                                                className="w-full bg-transparent outline-none pl-8 text-base font-medium text-black cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:z-20 cursor-pointer"
                                            />
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black absolute right-4 z-10 pointer-events-none"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-black hover:bg-[#333333] text-white text-base font-medium rounded-lg transition-colors mt-2">
                                    Next
                                </button>
                            </div>
                        </div>

                        {/* Background Illustration Image */}
                        <img
                            src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                            alt="Reserve Illustration"
                            className="absolute right-0 bottom-0 w-1/2 md:w-2/5 object-contain object-bottom"
                        />
                    </div>

                    {/* Right Side: Benefits Card */}
                    <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Benefits</h3>

                            <div className="space-y-6">
                                {/* Benefit 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <Calendar size={24} className="text-black" />
                                    </div>
                                    <p className="text-base text-gray-800 font-medium">
                                        Choose your exact pickup time up to 90 days in advance.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-gray-200 my-2"></div>

                                {/* Benefit 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <Clock size={24} className="text-black" />
                                    </div>
                                    <p className="text-base text-gray-800 font-medium">
                                        Extra wait time included to meet your ride.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-gray-200 my-2"></div>

                                {/* Benefit 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <Equal size={24} className="text-black" />
                                    </div>
                                    <p className="text-base text-gray-800 font-medium">
                                        Cancel at no charge up to 60 minutes in advance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <span className="text-sm border-b border-black cursor-pointer hover:text-gray-600 hover:border-gray-600 transition-colors pb-0.5">
                                See terms
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanForLater;
