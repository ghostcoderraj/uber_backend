import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../features/global/context/SocketContext';
import { CaptainDataContext } from '../features/captain/context/CaptainContext';
import LiveMap from '../features/global/components/LiveMap';
import axios from 'axios';
import { Button } from "@/components/ui/button";

const CaptainHome = () => {
  const [incomingRide, setIncomingRide] = useState(null);
  const [activeRide, setActiveRide] = useState(null);
  const [rideStatus, setRideStatus] = useState('searching'); // searching, accepted, ongoing
  const [otp, setOtp] = useState('');

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (socket && captain?._id) {
      // Connect to the driver pool map
      socket.emit('join', { userId: captain._id, userType: 'captain' });

      // Listen for incoming users
      socket.on('new-ride', (ride) => {
        setIncomingRide(ride);
      });
    }

    return () => {
      if (socket) socket.off('new-ride');
    };
  }, [socket, captain]);

  const handleAcceptRide = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/v1/rides/confirm', {
        rideId: incomingRide._id
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActiveRide(incomingRide);
      setIncomingRide(null);
      setRideStatus('accepted');
    } catch (error) {
      console.error("Error accepting ride:", error);
    }
  };

  const handleStartRide = async () => {
    if (otp.length !== 4) return alert("Please enter the 4-digit OTP from the customer"); // backend originally had min 6 but DB has 4 generating
    try {
      const token = localStorage.getItem('token');
      await axios.get(`http://localhost:8080/api/v1/rides/start-ride?rideId=${activeRide._id}&otp=${otp}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRideStatus('ongoing');
    } catch (error) {
      console.error("Error starting ride:", error);
      alert("Invalid OTP");
    }
  };

  const handleEndRide = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8080/api/v1/rides/end-ride', {
        rideId: activeRide._id
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActiveRide(null);
      setRideStatus('searching');
      setOtp('');
    } catch (error) {
      console.error("Error ending ride:", error);
    }
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-black p-4 text-white flex justify-between items-center z-20 shadow-md">
        <h1 className="text-xl font-bold tracking-tight">Uber <span className="text-gray-400 font-medium">Captain</span></h1>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-sm font-medium">Online</span>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative z-0">
        <LiveMap 
            // In a real app we would pass driver's live GPS coords
            captainCoords={captain?.location || {lat: 28.6139, lng: 77.2090}}
        />
        
        {/* INCOMING RIDE REQUEST PANEL */}
        {incomingRide && rideStatus === 'searching' && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-2xl p-6 shadow-2xl z-20 border-2 border-green-500 animate-in slide-in-from-bottom-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-green-600 font-bold text-sm tracking-widest uppercase mb-1">New Request</p>
                <h2 className="text-3xl font-bold">₹{incomingRide.fare}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 font-medium">Est. Distance</p>
                <p className="font-bold text-lg">2.5 km</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                  {incomingRide.user.fullname.firstname[0]}
                </div>
                <div>
                  <h3 className="font-bold">{incomingRide.user.fullname.firstname}</h3>
                  <p className="text-sm text-gray-500">Cash Payment</p>
                </div>
              </div>
              
              <div className="space-y-3 relative">
                 <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gray-300"></div>
                 <div className="flex items-start gap-4">
                   <div className="w-5 h-5 rounded-full bg-black z-10 shrink-0 border-2 border-white mt-0.5"></div>
                   <p className="text-sm font-medium">{incomingRide.pickup}</p>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-5 h-5 bg-black z-10 shrink-0 border-2 border-white mt-0.5"></div>
                   <p className="text-sm font-medium text-gray-600">{incomingRide.destination}</p>
                 </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setIncomingRide(null)} className="flex-1 py-6 text-base font-semibold border-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200">Decline</Button>
              <Button onClick={handleAcceptRide} className="flex-1 py-6 text-base font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200">Accept</Button>
            </div>
          </div>
        )}

        {/* ACTIVE RIDE / OTP PANEL */}
        {rideStatus === 'accepted' && activeRide && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-2xl p-6 shadow-2xl z-20 border border-gray-100">
             <div className="text-center mb-6">
               <h2 className="text-2xl font-bold">Navigate to Pickup</h2>
               <p className="text-gray-500">Ask {activeRide.user.fullname.firstname} for the PIN to start the ride</p>
             </div>
             
             <div className="flex justify-center mb-6">
               <input 
                 type="text" 
                 value={otp}
                 onChange={(e) => setOtp(e.target.value)}
                 placeholder="0000" 
                 maxLength={4}
                 className="text-center tracking-[0.5em] text-4xl font-bold bg-gray-100 w-48 py-4 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
               />
             </div>
             
             <Button onClick={handleStartRide} disabled={otp.length !== 4} className="w-full py-6 text-lg font-bold">
               Start Ride
             </Button>
          </div>
        )}

        {/* ONGOING RIDE PANEL */}
        {rideStatus === 'ongoing' && activeRide && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-black rounded-2xl p-6 shadow-2xl z-20 text-white">
             <div className="flex justify-between items-center mb-6">
               <div>
                  <p className="text-gray-400 font-medium text-sm mb-1">Heading to Destination</p>
                  <h2 className="text-2xl font-bold truncate max-w-[200px]">{activeRide.destination}</h2>
               </div>
               <div className="text-right">
                  <p className="text-gray-400 font-medium text-sm mb-1">Ride Fare</p>
                  <h2 className="text-2xl font-bold text-green-400">₹{activeRide.fare}</h2>
               </div>
             </div>
             
             <Button onClick={handleEndRide} className="w-full py-6 text-lg font-bold bg-red-600 hover:bg-red-700 text-white border-none shadow-lg shadow-red-900/50">
               Finish Trip & Collect Fare
             </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaptainHome;
