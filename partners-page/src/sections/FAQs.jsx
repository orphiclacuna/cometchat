import { useState } from 'react';

const faqs = [
	{
		question: 'How do I become a partner?',
		answer:
			'To become a partner, you can fill out the form on our website. Our team will review your application and get back to you within 24-48 hours.',
	},
	{
		question: 'What are the benefits of the partner program?',
		answer:
			'Our partner program offers a variety of benefits, including access to exclusive resources, dedicated support, and co-marketing opportunities. You can find more details on our partner program page.',
	},
	{
		question: 'Is there a fee to join the partner program?',
		answer:
			'No, there is no fee to join our partner program. We believe in building strong relationships with our partners, and we don’t want cost to be a barrier.',
	},
	{
		question: 'What are the requirements to become a partner?',
		answer:
			'We have a few basic requirements for our partners, such as having a registered business and a website. You can find the full list of requirements on our partner program page.',
	},
	{
		question: 'What kind of support can I expect as a partner?',
		answer:
			"You'll have access to our dedicated partner support team, available to help you with any questions or issues you may encounter. We also provide extensive documentation and resources.",
	},
];

const ChevronIcon = ({ open }) => (
	<svg
		className={`w-6 h-6 shrink-0 ml-4 transition-transform duration-300 ${
			open ? 'transform rotate-180' : ''
		}`}
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
        strokeWidth={1.5}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M19 9l-7 7-7-7"
		/>
	</svg>
);

export default function FAQs() {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-16 sm:py-24 bg-[#FAFAFF] px-4 sm:px-6 lg:px-8">
			<div className="text-left sm:text-center max-w-3xl mx-auto">
                <p className="font-bold text-lg sm:text-xl text-[#FF7F3E] uppercase tracking-wider">
                    FAQ's
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2939] leading-tight">
                    We want to help you <br /> with all your doubts
                </h2>
            </div>
			<div className="max-w-3xl mx-auto mt-12 sm:mt-16 space-y-4 sm:space-y-5">
				{faqs.map((faq, index) => (
					<div key={index} className="flex flex-col gap-2 rounded-[20px] border border-black/[.04] bg-black/[.02] p-4 sm:p-6 backdrop-blur-[20px]">
						<button
							className={`w-full flex justify-between items-center text-left text-base sm:text-lg font-semibold text-[#1D2939]`}
							onClick={() => toggleFAQ(index)}
						>
							<span className="pr-4">{faq.question}</span>
							<ChevronIcon open={openIndex === index} />
						</button>
						{openIndex === index && (
							<div className="text-[#475467] font-medium leading-relaxed text-sm sm:text-base pr-8">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}