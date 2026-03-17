import React from 'react';
import { ArrowRight } from "lucide-react";

const SuggestionCard = ({ title, description, image, cta }) => (
  <div className="bg-[#f3f3f3] hover:bg-[#e2e2e2] transition-colors rounded-xl p-4 flex flex-col justify-between min-h-[160px] cursor-pointer group">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        {description && <p className="text-sm text-gray-600 font-medium">{description}</p>}
      </div>
      <img src={image} alt={title} className="w-16 h-16 object-contain" />
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
      <h2 className="text-3xl font-bold mb-8">Suggestions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SuggestionCard
          title="Ride"
          description="Go anywhere with Uber"
          image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648734997/assets/05/1db1b3-4674-42f0-91de-d68f773cd735/original/Ride_150x150_pixels.png"
          cta="Details"
        />
        <SuggestionCard
          title="Reserve"
          description="Book up to 90 days ahead"
          image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648735232/assets/e5/222d4f-b64d-4ba3-ab27-52d192be5a36/original/Reserve_150x150_pixels.png"
          cta="Details"
        />
        <SuggestionCard
          title="Package"
          description="Uber Connect"
          image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648735165/assets/07/28cba5-90f7-49cc-be2e-84b2cbd8db1d/original/Connect_150x150_pixels.png"
          cta="Details"
        />
      </div>
    </div>
  );
};

export default Suggestions;