import React from "react";
import { Button } from "../components/Button";
import { MainHeading } from "../components/MainHeading";
import { Input } from "../components/Input";
import mailIcon from "../assets/mail-01.svg";
import background from "../assets/background.png";

export const HeroForm = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-8 sm:py-16 flex flex-col justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto w-full pt-10 lg:pt-20">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-xl text-left">
            <MainHeading>Join the CometChat partner universe</MainHeading>
            <div className="mt-6 text-lg md:text-[22px] text-white opacity-80 leading-snug md:leading-[25px]">
              Create value for your clients, leveraging our world-class
              technology. Partner with us and grow your business!
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 max-w-lg w-full mt-8 lg:mt-0">
            <div className="bg-[#f9f9ff14] rounded-3xl border border-[#f9f9ff0a] p-6 md:p-8 backdrop-blur-[50px]">
              <div className="text-2xl font-semibold text-white mb-6 text-center">
                Become a partner
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-white opacity-80 leading-[17.9px]"
                  >
                    Full name
                  </label>
                  <Input
                    id="fullName"
                    className="w-full"
                    icon={false}
                    text="Type your name here..."
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-white opacity-80 leading-[17.9px]"
                  >
                    Email address
                  </label>
                  <Input
                    id="email"
                    className="w-full"
                    icon
                    override={
                      <img
                        src={mailIcon}
                        alt="Mail icon"
                        className="!relative !w-4 !h-4"
                      />
                    }
                    text="Type your email here..."
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="companyName"
                    className="text-sm font-semibold text-white opacity-80 leading-[17.9px]"
                  >
                    Company name
                  </label>
                  <Input
                    id="companyName"
                    className="w-full"
                    icon={false}
                    text="Type your company's name..."
                  />
                </div>
                <div className="mt-6 flex justify-start">
                  <Button text="Submit application" type="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
