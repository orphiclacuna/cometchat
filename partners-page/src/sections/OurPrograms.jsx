import React from "react";
import CheckVerified01 from "../assets/check-verified-01.svg?react";
import CodeSquare02 from "../assets/code-square-02.svg?react";
import SunSetting01 from "../assets/sun-setting-01.svg?react";

const programs = [
	{
		icon: <CheckVerified01 className="w-[18px] h-[18px] text-[#6852D6]" />,
		title: "Affiliate partner program",
		description:
			"Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
	},
	{
		icon: <CodeSquare02 className="w-[18px] h-[18px] text-[#6852D6]" />,
		title: "Technology partner program",
		description:
			"Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It's simple, safe and secure!",
	},
	{
		icon: <SunSetting01 className="w-[18px] h-[18px] text-[#6852D6]" />,
		title: "Start up growth program",
		description:
			"We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
	},
];

export default function Programs() {
	return (
		<section className="w-full flex flex-col bg-[#FAFAFF] px-4 sm:px-8 lg:px-16 py-16 sm:py-24 gap-12">
			<div className="flex flex-col w-full max-w-4xl items-start text-left gap-3">
				<div className="text-indigo-600 text-base md:text-lg font-semibold">
					Our programs
				</div>
				<h2 className="text-gray-900 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
					Types of partnerships <br /> programs
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl">
				{programs.map((program, i) => (
					<div key={i} className="flex flex-col items-start gap-6 text-left">
						<div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full">
							{program.icon}
						</div>
						<div className="flex flex-col items-start gap-2">
							<h3 className="text-lg md:text-xl font-semibold text-gray-900">
								{program.title}
							</h3>
							<p className="text-gray-600 text-sm md:text-base font-medium leading-[21.6px]">{program.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
