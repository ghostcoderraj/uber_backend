import React from 'react';
import { ArrowRight } from "lucide-react";

const SuggestionCard = ({ title, description, image, cta }) => (
  <div className="bg-[#f3f3f3] hover:bg-[#e2e2e2] transition-colors rounded-xl p-4 flex flex-col justify-between min-h-[160px] cursor-pointer group">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        {description && <p className="text-sm text-gray-600 font-medium">{description}</p>}
      </div>
      <img src={image} alt={title} className="w-20 h-20 object-contain" />
    </div>
    <div className="flex items-center gap-2 mt-4 text-sm font-medium">
      {cta}
      <div className='bg-white p-1 rounded-full group-hover:block hidden shadow-sm'>
        <ArrowRight size={14} />
      </div>
    </div>
  </div>
);

const Suggestions = () => {
  return (
    <div className="w-full py-12 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Explore what you can do with uber</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SuggestionCard
            title="Ride"
            description="Go anywhere with Uber.Request a ride,hop in, and go."
            image="https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png"
            cta="Details"
          />
          <SuggestionCard
            title="Reserve"
            description="Reserve your ride in advance so you can relax on the day of your trip."
            image="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
            cta="Details"
          />
          <SuggestionCard
            title="Intercity"
            description="Get convenient,affordable outstation cabs anytime at your doorstep."
            image="https://mobile-content.uber.com/launch-experience/intercity.png"
            cta="Details"
          />
          <SuggestionCard
            title="Shuttle"
            description="Lower-cost shared rides on professionally driven bushes and vans."
            image="https://mobile-content.uber.com/launch-experience/hcv_shuttle.png"
            cta="Details"
          />
          <SuggestionCard
            title="Parcel"
            description="Uber makes same-day item delivery easier than ever."
            image="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
            cta="Details"
          />
          <SuggestionCard
            title="Rentals"
            description="Request a trip for a block of time and make multiple stops."
            image="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
            cta="Details"
          />
        </div>
      </div>
    </div>
  );
};

export default Suggestions;