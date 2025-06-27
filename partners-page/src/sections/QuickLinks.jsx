import React, { useState } from 'react';
import cometchatLogo from "../assets/cometchat.png";

const platformSection = {
    title: 'Platform',
    items: [
        { type: 'link', text: 'Features', isGray: true },
        { type: 'link', text: 'Chat & Messaging' },
        { type: 'link', text: 'Voice & Video Calls' },
        { type: 'link', text: 'Security & Compliance' },
        { type: 'link', text: 'Extensions' },
        { type: 'link', text: 'Features at a glance' },
        { type: 'link', text: 'Webhooks & Bots' },
        { type: 'link', text: 'Moderation' },
        { type: 'link', text: 'Analytics & Insights' },
        { type: 'subheading', text: 'Implementation' },
        { type: 'link', text: 'Widgets' },
        { type: 'link', text: 'UI Kits' },
        { type: 'link', text: 'SDKs & APIs' },
        { type: 'subheading', text: 'Technologies' },
        { type: 'link', text: 'React Chat SDK & API' },
        { type: 'link', text: 'Angular Chat SDK & API' },
        { type: 'link', text: 'Vue Chat SDK & API' },
        { type: 'link', text: 'IOS Swift Chat SDK & API' },
        { type: 'link', text: 'Android Kotlin Chat SDK & API' },
        { type: 'link', text: 'Android Java Chat SDK & API' },
        { type: 'link', text: 'React Native Chat SDK & API' },
        { type: 'link', text: 'Ionic/Capacitor Chat SDK & API' },
        { type: 'link', text: 'WordPress Chat SDK & API' },
        { type: 'link', text: 'Laravel/PHP Chat SDK & API' },
        { type: 'link', text: 'Flutter Chat SDK & API' },
        { type: 'link', text: 'Next.js Chat SDK & API' },
    ],
};

const solutionsSection = {
    title: 'Solutions',
    items: [
        { type: 'subheading', text: 'By Use cases', noPadding: true },
        { type: 'link', text: 'Social Community' },
        { type: 'link', text: 'Marketplace' },
        { type: 'link', text: 'Healthcare' },
        { type: 'link', text: 'Education' },
        { type: 'link', text: 'Virtual Events' },
        { type: 'link', text: 'On-Demand Service' },
        { type: 'link', text: 'Dating Apps' },
        { type: 'link', text: 'Gaming' },
        { type: 'subheading', text: 'By Organization Type' },
        { type: 'link', text: 'Enterprise' },
        { type: 'link', text: 'Startups' },
    ],
};

const developersSection = {
    title: 'Developers',
    items: [
        { type: 'link', text: 'Technologies documentation', isGray: true },
        { type: 'link', text: 'React' },
        { type: 'link', text: 'Angular' },
        { type: 'link', text: 'Vue' },
        { type: 'link', text: 'IOS Swift' },
        { type: 'link', text: 'Android Kotlin' },
        { type: 'link', text: 'Android Java' },
        { type: 'link', text: 'React Native' },
        { type: 'link', text: 'Ionic/Capacitor' },
        { type: 'link', text: 'WordPress' },
        { type: 'link', text: 'Laravel/PHP' },
        { type: 'link', text: 'Flutter' },
        { type: 'link', text: 'Next.js' },
        { type: 'subheading', text: 'Documentation' },
        { type: 'link', text: 'Documentation' },
        { type: 'link', text: 'Product updates' },
        { type: 'link', text: 'Tutorials' },
        { type: 'link', text: 'Open-source Apps' },
        { type: 'link', text: 'Product status' },
        { type: 'link', text: 'Glossary' },
    ],
};

const resourcesSection = {
    title: 'Resources',
    items: [
        { type: 'link', text: 'Customer stories' },
        { type: 'link', text: 'Blog' },
        { type: 'link', text: 'Give feedback' },
        { type: 'link', text: 'Community forum' },
        { type: 'link', text: 'Help center' },
        { type: 'link', text: 'Partners' },
    ],
};

const competitorsSection = {
    title: 'Competitors',
    items: [
        { type: 'link', text: 'SendBird' },
        { type: 'link', text: 'GetStream' },
        { type: 'link', text: 'Applozic' },
        { type: 'link', text: 'Twilio' },
        { type: 'link', text: 'PubNub' },
    ],
};

const companySection = {
    title: 'Company',
    items: [
        { type: 'link', text: 'About us' },
        { type: 'link', text: 'Careers' },
        { type: 'link', text: 'Partners' },
        { type: 'link', text: 'Pricing' },
        { type: 'link', text: 'Chat with us' },
    ],
};

const columns = [
    [platformSection],
    [solutionsSection],
    [developersSection],
    [resourcesSection, competitorsSection, companySection],
];

const allSections = [
    platformSection,
    solutionsSection,
    developersSection,
    resourcesSection,
    competitorsSection,
    companySection,
];

const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12H19" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const MinusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function QuickLinks() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (title) => {
        setOpenSection(openSection === title ? null : title);
    };

  return (
    <section className="bg-[#0A0914] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <img src={cometchatLogo} alt="CometChat Logo" className="h-4 lg:h-6 w-auto mb-12" />

        {/* Mobile Accordion View */}
        <div className="lg:hidden">
          {allSections.map((section) => (
            <div key={section.title} className="border-b border-gray-800 last:border-b-0">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="text-lg font-semibold text-[#6852D6]">{section.title}</h3>
                {openSection === section.title ? <MinusIcon /> : <PlusIcon />}
              </button>
              {openSection === section.title && (
                <ul className="pb-4 space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className={item.type === 'subheading' && !item.noPadding ? 'pt-2' : ''}>
                      {item.type === 'link' ? (
                        <a href="#" className={`text-[14px] hover:text-white font-semibold leading-[19.6px] ${item.isGray ? 'text-gray-400' : 'text-gray-300'}`}>
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-[14px] text-gray-400 font-semibold tracking-wider leading-[19.6px]">
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col items-start gap-y-8">
              {column.map((section) => (
                <div key={section.title} className="w-full">
                  <h3 className="text-[16px] font-semibold text-[#6852D6] tracking-wider">{section.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index} className={item.type === 'subheading' && !item.noPadding ? 'pt-2' : ''}>
                        {item.type === 'link' ? (
                          <a href="#" className={`text-[14px] hover:text-white font-semibold leading-[19.6px] ${item.isGray ? 'text-gray-400' : 'text-gray-300'}`}>
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-[14px] text-gray-400 font-semibold tracking-wider leading-[19.6px]">
                            {item.text}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
