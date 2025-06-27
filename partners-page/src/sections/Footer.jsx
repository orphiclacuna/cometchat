import React from 'react';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const socialLinks = [
  { name: 'Facebook', icon: facebook, url: '#' },
  { name: 'LinkedIn', icon: linkedin, url: '#' },
  { name: 'Instagram', icon: instagram, url: '#' },
  { name: 'Twitter', icon: twitter, url: '#' },
  { name: 'GitHub', icon: github, url: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0914] text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[rgba(250,250,255,0.10)] pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <p className="text-sm font-semibold text-[#FAFAFF] opacity-[0.84] leading-[19.6px] tracking-[0.28px]">2023 &copy; CometChat</p>
            <a href="#" className="text-sm font-semibold text-[#FAFAFF] opacity-[0.84] hover:opacity-100 leading-[19.6px] tracking-[0.28px]">Terms of Use</a>
            <a href="#" className="text-sm font-semibold text-[#FAFAFF] opacity-[0.84] hover:opacity-100 leading-[19.6px] tracking-[0.28px]">Privacy Policy</a>
          </div>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.url} className="flex items-center space-x-2 font-semibold text-[#FAFAFF] opacity-[0.84] hover:opacity-100 leading-[19.6px] tracking-[0.28px]">
                <img src={item.icon} alt={item.name} className="h-5 w-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
