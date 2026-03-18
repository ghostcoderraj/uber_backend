import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { NavLink } from "react-router-dom";
import { UserDataContext } from '../../user/context/UserContext';

const NavItem = ({ children, to }) => (
  <NavLink
    to={to || "#"}
    className="text-white bold hover:bg-[#333333] transition-colors font-medium text-sm px-3 py-2 rounded-full"
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const { user } = useContext(UserDataContext);

  return (
    <div className='bg-black w-full fixed top-0 left-0 h-16 flex items-center justify-between px-4 lg:px-16 z-50 text-white font-sans'>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Left side: Logo & Navigation */}
        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-2xl font-normal tracking-tight mr-4">
            Uber
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Ride</NavItem>
            <NavItem to="/">Drive</NavItem>
            <NavItem to="/">Business</NavItem>
            <NavItem to="/">About</NavItem>
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-2 hover:bg-[#333333] px-3 py-2 rounded-full transition-colors font-medium text-sm">
            <Globe className="h-4 w-4" />
            EN
          </button>

          <button className="hidden md:flex items-center hover:bg-[#333333] px-3 py-2 rounded-full transition-colors font-medium text-sm">
            Help
          </button>

          {user && user.email ? (
            <button className="hover:bg-[#333333] px-3 py-2 rounded-full transition-colors font-medium text-sm">
              Profile
            </button>
          ) : (
            <div className="flex items-center gap-2 ml-2">
              <NavLink to="/login" className="hover:bg-[#333333] px-3 py-2 rounded-full transition-colors font-medium text-sm">
                Log in
              </NavLink>
              <NavLink to="/register">
                <Button className="bg-white text-black hover:bg-gray-200 font-medium rounded-full px-4 py-2 text-sm h-auto transition-colors">
                  Sign up
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;