import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Apple, QrCode } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // 'user' or 'captain'
  const accountType = searchParams.get('type') || 'user';

  const handleContinue = (e) => {
    e.preventDefault();
    if (!email) return;

    // Route dynamically based on what the user clicked on the homepage
    if (accountType === 'captain') {
      navigate('/captain-login', { state: { email } });
    } else {
      navigate('/user-login', { state: { email } });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <div className="w-full bg-black h-16 flex items-center px-4 md:px-8">
        <h1 className="text-white text-2xl font-bold tracking-tight">Uber</h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center mt-12 px-4">
        <div className="w-full max-w-[400px]">
          <h2 className="text-2xl pt-2 font-medium mb-8 leading-snug">
            What's your phone number or email?
          </h2>

          <form onSubmit={handleContinue} className="space-y-4">
            <input
              type="text"
              placeholder="Enter phone number or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#f3f3f3] text-black border-none rounded-lg py-3.5 px-4 outline-none focus:ring-2 focus:ring-black placeholder-gray-500 font-medium text-base"
              autoFocus
            />

            <button 
              type="submit" 
              className="w-full bg-black text-white rounded-lg py-3.5 font-medium text-base hover:bg-[#333333] transition-colors"
            >
              Continue
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex justify-center items-center gap-2 bg-[#f3f3f3] hover:bg-[#e2e2e2] text-black rounded-lg py-3.5 font-medium text-base transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <button className="w-full flex justify-center items-center gap-2 bg-[#f3f3f3] hover:bg-[#e2e2e2] text-black rounded-lg py-3.5 font-medium text-base transition-colors">
              <Apple size={20} className="text-black mb-0.5" />
              Continue with Apple
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="w-full flex justify-center items-center gap-2 bg-[#f3f3f3] hover:bg-[#e2e2e2] text-black rounded-lg py-3.5 font-medium text-base transition-colors mb-6">
            <QrCode size={18} className="text-black" />
            Log in with QR code
          </button>

          <p className="text-[#6b6b6b] text-[13px] leading-relaxed mt-8 pb-12">
            By continuing, you agree to calls, including by autodialer, WhatsApp or texts from Uber and its affiliates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
