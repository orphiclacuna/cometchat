import React from "react";
import Scale01 from "../assets/scale-01.svg?react";
import Coins from "../assets/coins.svg?react";
import Stand from "../assets/stand.svg?react";
import CodeSquare02 from "../assets/code-square-02.svg?react";
import Clock from "../assets/clock.svg?react";
import BarChartSquare02 from "../assets/bar-chart-square-02.svg?react";
import BookClosed from "../assets/book-closed.svg?react";
import HelpCircle from "../assets/help-circle.svg?react";
import CoinsHand from "../assets/coins-hand.svg?react";
import { MainHeading } from "../components/MainHeading";

const PartnerAdvantages = () => {
  const advantages = [
    {
      icon: <Scale01 className="w-[18px] h-[18px]" />,
      title: "Free credits",
      desc: "Empowering partners to scale.",
    },
    {
      icon: <Coins className="w-[18px] h-[18px]" />,
      title: "Revenue share",
      desc: "Get monthly recurring revenues when you refer clients.",
    },
    {
      icon: <Stand className="w-[18px] h-[18px]" />,
      title: "Training and mentoring sessions",
      desc: "Enabling partners to deliver the best experience.",
    },
    {
      icon: <CodeSquare02 className="w-[18px] h-[18px] text-[#FF7F3E]" />,
      title: "Special developer access",
      desc: "Get an all-access account to build unlimited PoCs for your clients.",
    },
    {
      icon: <Clock className="w-[18px] h-[18px]" />,
      title: "Reduced time",
      desc: "Deliver your products much faster with our partners’ programs.",
    },
    {
      icon: <BarChartSquare02 className="w-[18px] h-[18px]" />,
      title: "Value addition to your users",
      desc: "Add value to your users by providing them with a seamless chat experience.",
    },
    {
      icon: <BookClosed className="w-[18px] h-[18px]" />,
      title: "Knowledge sessions",
      desc: "Access to product and market sessions.",
    },
    {
      icon: <HelpCircle className="w-[18px] h-[18px]" />,
      title: "On-demand support",
      desc: "Technical assistance for implementation.",
    },
    {
      icon: <CoinsHand className="w-[18px] h-[18px]" />,
      title: "Significant passive income",
      desc: "Earn a significant passive income by referring clients to CometChat.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-graydark-1 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 gap-12">
      <div className="flex flex-col w-full max-w-2xl gap-3">
        <div className="text-[#FF7F3E] text-lg md:text-[22px] font-bold leading-tight tracking-tight">
          <span className="md:hidden">The benefits</span>
          <span className="hidden md:inline">Be a partner</span>
        </div>
        <MainHeading>
          <span className="md:hidden">Moderation to help your community thrive</span>
          <span className="hidden md:inline">CometChat partner advantages</span>
        </MainHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl">
        {advantages.map((item, i) => (
          <div key={i} className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center justify-center p-3 bg-[#6852d61f] rounded-full text-[#6852D6]">
              {item.icon}
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="text-gray-100 text-base md:text-lg font-semibold leading-tight tracking-tight text-left">
                {item.title}
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium leading-normal tracking-tight text-left">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerAdvantages;
