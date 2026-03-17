import React from 'react';
import { Globe, Facebook, Twitter, Youtube, Linkedin, Instagram, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h3 className="font-medium text-white">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href="#" className="flex items-center text-[#afafaf] hover:text-[#e2e2e2] text-sm transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* Legal Disclaimer Section (White Background) */}
      <div className="bg-white text-black py-16 px-4 lg:px-16 text-xs text-gray-600 leading-relaxed border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">
            *Join the millions of riders who trust Uber for their everyday travel needs. Get doorstep pickup and dropoff to your chosen destination at the tap of a button. Select from a wide range of affordable options, such as Uber Auto, Uber Moto, and Cabs.
          </p>
          <p className="mb-4">
            Limited-period offer - Discount on first 5 trips (cab or moto) completed within 15 days of signing up. The offer is valid only for first-time users only. The promotion shall apply automatically to eligible rides. Download the Uber app now to request your first ride.
          </p>
          <p className="mb-4">
            Discounts applicable - (i) For cab rides - 25% discount (maximum discount of INR 75 per ride) (ii) For moto rides - 50% discount (maximum discount of INR 50 per ride)
          </p>
          <p className="mb-4">
            This offer cannot be combined with any other offers or promo codes.
          </p>
          <p className="mb-4">
            The offer is non-transferrable and limited to one per user/account.
          </p>
          <p className="mb-12">
            Uber reserves the right to alter, suspend or withdraw the promotion offer in the future in its sole discretion without any prior notice. Terms and conditions apply.
          </p>
          <p>
            Certain requirements and features vary by country, region, and city.
          </p>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-black text-white pt-16 pb-8 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <a href="/" className="text-2xl font-normal tracking-tight">Uber</a>
          </div>

          <a href="#" className="inline-block text-[#afafaf] hover:text-[#e2e2e2] mb-12 text-sm transition-colors">
            Visit Help Center
          </a>

          {/* Main Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FooterLinkColumn
              title="Company"
              links={["About us", "Our offerings", "Newsroom", "Investors", "Blog", "Careers", "AI", "Gift cards"]}
            />
            <FooterLinkColumn
              title="Products"
              links={["Ride", "Drive", "Deliver", "Eat", "Uber for Business", "Uber Freight"]}
            />
            <FooterLinkColumn
              title="Global citizenship"
              links={["Safety", "Diversity and Inclusion", "Sustainability"]}
            />
            <FooterLinkColumn
              title="Travel"
              links={["Reserve", "Airports", "Cities"]}
            />
          </div>

          {/* Social & Settings */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex gap-6">
              <a href="#" className="p-2 -ml-2 text-white hover:bg-[#333333] rounded-sm transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 text-white hover:bg-[#333333] rounded-sm transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 text-white hover:bg-[#333333] rounded-sm transition-colors"><Youtube size={20} /></a>
              <a href="#" className="p-2 text-white hover:bg-[#333333] rounded-sm transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 text-white hover:bg-[#333333] rounded-sm transition-colors"><Instagram size={20} /></a>
            </div>

            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-sm text-[#afafaf] hover:text-[#e2e2e2] transition-colors">
                <Globe size={16} />
                English
              </button>
              <button className="flex items-center gap-2 text-sm text-[#afafaf] hover:text-[#e2e2e2] transition-colors">
                <MapPin size={16} />
                Delhi NCR
              </button>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="flex gap-4 mb-20">
            <a href="#" className="transition-opacity hover:opacity-80">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>

          {/* Bottom Legal */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-[#333333] text-xs text-[#afafaf]">
            <p className="mb-4 md:mb-0">© 2026 Uber Technologies Inc.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#e2e2e2] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#e2e2e2] transition-colors">Accessibility</a>
              <a href="#" className="hover:text-[#e2e2e2] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;