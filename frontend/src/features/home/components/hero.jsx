import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Navigation, ChevronDown } from "lucide-react";
import axios from 'axios';
import { SocketContext } from '../../global/context/SocketContext.jsx';
import { UserDataContext } from '../../user/context/UserContext.jsx';
import { useContext } from 'react';
import LiveMap from '../../global/components/LiveMap.jsx';

const Hero = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null); // 'pickup' or 'destination'
  const [fareEstimates, setFareEstimates] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [rideStatus, setRideStatus] = useState('idle'); // idle, processing, tracking
  const [rideData, setRideData] = useState(null);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  
  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    if (socket && user?._id) {
      // Connect user to their personal socket room
      socket.emit("join", { userId: user._id, userType: "user" });

      socket.on('ride-confirmed', (data) => {
        setRideStatus('tracking');
        setRideData(data);
      });
    }

    return () => {
      if (socket) socket.off('ride-confirmed');
    };
  }, [socket, user]);

  // Fetch Autocomplete suggestions
  const fetchSuggestions = async (inputStr) => {
    if (inputStr.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/v1/maps/get-suggestions?input=${inputStr}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuggestions(response.data.suggestions || response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Debounce input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (activeInput === 'pickup') {
        fetchSuggestions(pickup);
      } else if (activeInput === 'destination') {
        fetchSuggestions(destination);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [pickup, destination, activeInput]);

  const handleSuggestionClick = (suggestion) => {
    if (activeInput === 'pickup') {
      setPickup(suggestion.name);
    } else {
      setDestination(suggestion.name);
    }
    setSuggestions([]);
    setActiveInput(null);
  };

  const getCoords = async (address) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/v1/maps/get-coordinates?address=${encodeURIComponent(address)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const c = response.data.coordinates;
      return { lat: c.lat || c.ltd, lng: c.lng || c.lon };
    } catch (e) {
      return null;
    }
  };

  const handleGetFare = async () => {
    if (!pickup || !destination) return;
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/v1/rides/get-fare?pickup=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(destination)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFareEstimates(response.data);

      const pCoords = await getCoords(pickup);
      const dCoords = await getCoords(destination);
      if (pCoords) setPickupCoords(pCoords);
      if (dCoords) setDropoffCoords(dCoords);

    } catch (error) {
      console.error("Error getting fare:", error);
    }
  };

  const handleConfirmRide = async () => {
    if (!selectedVehicle) return;
    try {
      setRideStatus('processing');
      const token = localStorage.getItem('token');
      const response = await axios.post(`http://localhost:8080/api/v1/rides/create`, {
        pickup,
        destination,
        vehicleType: selectedVehicle
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // The API returns the created ride object
      // Let's keep status as processing until socket confirms it!
    } catch (error) {
      console.error("Error creating ride:", error);
      setRideStatus('idle');
    }
  };

  return (
    <div className="w-full mt-16 bg-white flex justify-center py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 px-4 lg:px-16">
        {/* Left side: Booking Widget Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-lg">

          <h1 className="text-[4rem] leading-[1.1] font-bold tracking-tight mb-8">
            Go anywhere with<br />Uber
          </h1>

          {/* Form Content */}
          <div className="space-y-4 mb-6 relative z-20">
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
                value={pickup}
                onChange={(e) => { setPickup(e.target.value); setActiveInput('pickup') }}
                onFocus={() => { setActiveInput('pickup'); fetchSuggestions(pickup); }}
                className="flex-1 bg-transparent border-none outline-none py-1 px-1 text-base placeholder-gray-500 font-medium"
              />
            </div>

            {/* Dropoff Input */}
            <div className="relative flex items-center bg-[#f3f3f3] rounded-lg p-3">
              <div className="w-8 flex justify-center z-10">
                <div className="w-2.5 h-2.5 bg-black"></div>
              </div>
              <input
                type="text"
                placeholder="Dropoff location"
                value={destination}
                onChange={(e) => { setDestination(e.target.value); setActiveInput('destination') }}
                onFocus={() => { setActiveInput('destination'); fetchSuggestions(destination); }}
                className="flex-1 bg-transparent border-none outline-none py-1 px-1 text-base placeholder-gray-500 font-medium"
              />
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && activeInput !== null && (
              <div className="absolute w-full bg-white border border-gray-200 mt-2 rounded-lg shadow-xl overflow-hidden z-50">
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="p-3 border-b hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                  >
                    <MapPin size={18} className="text-gray-500 shrink-0" />
                    <span className="text-sm font-medium truncate">{suggestion.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 mt-4">
            <Button onClick={handleGetFare} className="py-6 px-6 text-base font-medium rounded-lg text-white bg-black hover:bg-[#333333] transition-colors">
              See prices
            </Button>
          </div>

        </div>

        {/* Right side: Visual Area or Fares */}
        <div className="hidden lg:block w-1/2 relative rounded-2xl overflow-hidden min-h-[500px]">
          {rideStatus === 'processing' && (
            <div className="w-full h-full bg-white p-8 shadow-2xl rounded-2xl z-10 border border-gray-100 flex flex-col items-center justify-center text-center">
              <img src="https://i.pinimg.com/originals/3d/82/30/3d8230a10dfa9082269a23f169eed3d1.gif" alt="Looking for driver" className="w-48 h-48 mb-6 object-contain mix-blend-multiply" />
              <h2 className="text-2xl font-bold mb-2">Looking for nearby drivers...</h2>
              <p className="text-gray-500 max-w-[250px]">Please wait while we connect you with the nearest available {selectedVehicle}.</p>
            </div>
          )}

          {rideStatus === 'tracking' && (
             <div className="w-full h-full bg-white p-8 shadow-2xl rounded-2xl z-10 border border-gray-100 flex flex-col justify-center">
               <h2 className="text-3xl font-bold mb-2 text-green-600">Driver found!</h2>
               <p className="text-xl mb-6 font-semibold text-gray-700">Your OTP: <span className="bg-gray-100 px-3 py-1 pb-2 rounded-md tracking-widest border border-gray-300 shadow-inner">{rideData?.otp}</span></p>
               <div className="p-5 bg-gray-50 rounded-xl mb-4 border border-gray-100 shadow-sm flex items-center gap-4">
                 <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 overflow-hidden">
                   {rideData?.captain?.fullname?.firstname?.[0]}
                 </div>
                 <div>
                   <h3 className="font-bold text-xl">{rideData?.captain?.fullname?.firstname} {rideData?.captain?.fullname?.lastname}</h3>
                   <p className="text-gray-600 font-medium">{rideData?.captain?.vehicles?.vehicleType.toUpperCase()} • <span className="text-black bg-yellow-100 px-2 rounded">{rideData?.captain?.vehicles?.plate}</span></p>
                 </div>
               </div>
               <p className="text-gray-500 text-sm mt-4 text-center">Wait for the driver to arrive at your pickup location. Provide the OTP to start the ride safely.</p>
             </div>
          )}

          {rideStatus === 'idle' && !fareEstimates && (
            <LiveMap />
          )}
          
          {rideStatus === 'idle' && fareEstimates && (
            <div className="absolute inset-0 z-0">
               <LiveMap pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} />
            </div>
          )}
          
          {rideStatus === 'idle' && fareEstimates && (
            <div className="absolute bottom-0 w-full bg-white p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl z-10 max-h-[80%] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Choose a ride</h2>
              {/* Fare options */}
              <div className="space-y-3">
                {Object.entries(fareEstimates).map(([type, price]) => (
                  <div 
                    key={type} 
                    onClick={() => setSelectedVehicle(type)}
                    className={`flex justify-between items-center p-3 border-2 rounded-xl cursor-pointer transition-all shadow-sm hover:shadow-md ${selectedVehicle === type ? 'border-black bg-gray-50' : 'border-transparent bg-white hover:border-gray-300'}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Placeholder icon */}
                      <div className="w-14 h-10 bg-gray-200 rounded-lg flex items-center justify-center font-bold text-xs uppercase shadow-inner text-gray-700">{type}</div>
                      <div>
                        <h4 className="font-bold text-lg capitalize">{type}</h4>
                        <p className="text-xs text-gray-500 font-medium">Nearest driver is 2 mins away</p>
                      </div>
                    </div>
                    <div className="font-bold text-xl">₹{price}</div>
                  </div>
                ))}
              </div>
              <Button onClick={handleConfirmRide} disabled={!selectedVehicle} className="w-full mt-4 py-6 text-lg">
                {selectedVehicle ? `Confirm ${selectedVehicle.toUpperCase()}` : 'Select a vehicle'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;