import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function TopBar() {
  return (
    <div className="relative w-full bg-[#321e0d] py-3 z-100">
      <div className="max-full mx-auto flex items-center justify-between px-4">
        {/* Left side - Contact Info */}
        <div className="flex items-center gap-6 text-sm md:text-[1.2vw] ">
          <a 
            href="tel:+123-456-789" 
            className="flex items-center gap-2  hover:text-black! transition-colors"
          >
            <Phone size={16} className='text-white' />
            <span className="text-white hidden! md:inline!">+(123)-456-789</span>
          </a>
          
          <a 
            href="mailto:info@domianname.com" 
            className="flex items-center gap-2   hover:text-black! transition-colors"
          >
            <Mail size={16} className='text-white' />
            <span className="text-white hidden! md:inline!">info@ggcamp.com</span>
          </a>
        </div>

        {/* Right side - Social Media */}
        <div className="flex items-center gap-4 ">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" flex items-center gap-2   hover:text-black! transition-colors text-sm md:text-[1.2vw]"
          >
            <Instagram size={18} className='text-white' />
            <span className='text-white hidden! md:inline!'>Instagram</span>
          </a>
          
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2  hover:text-black! transition-colors text-sm md:text-[1.2vw]"
          >
            <Facebook size={18} className='text-white' />
            <span className='text-white hidden! md:inline!'>Facebook</span>
          </a>
          
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white  hover:text-black! transition-colors text-sm md:text-[1.2vw]"
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
              <path d="M8.56 2.75c4.37 6 6 9.42 6 17.72"></path>
            </svg>
            <span className="text-white hidden! md:inline!">Dribbble</span>
          </a>
        </div>
      </div>
    </div>
  );
};
