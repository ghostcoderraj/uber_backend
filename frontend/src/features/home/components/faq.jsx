import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Can I have a lost item delivered to me?",
        answer: "Yes, you can request to have a lost item delivered to you through the app. Fees may apply depending on your location and the driver."
    },
    {
        question: "Can I rent a car using Uber?",
        answer: "Yes, Uber Rent allows you to rent a car from local providers directly through the Uber app. Tap the 'Rent' icon to explore available vehicles."
    },
    {
        question: "Can I request a ride that picks up friends in different locations?",
        answer: "Absolutely. You can add up to 5 extra stops along your route. Just tap the '+' next to the destination box when requesting a ride."
    },
    {
        question: "Can I request a taxi on Uber?",
        answer: "Yes, in many cities you can request a local taxi through the Uber app. Look for the 'Uber Taxi' or 'Local Cab' option when choosing your ride type."
    },
    {
        question: "Is there an Uber ride option for 5 people?",
        answer: "Yes, UberXL or UberSUV options accommodate up to 6 passengers comfortably. Select this option if you have a larger group."
    }
];

const FaqSection = () => {
    return (
        <div className="w-full py-20 px-4 lg:px-16 flex justify-center">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-[2.5rem] font-bold tracking-tight mb-10">
                    Frequently asked questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                            <AccordionTrigger className="text-[1.125rem] font-bold hover:no-underline hover:text-gray-600 transition-colors text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-gray-700 pb-6 pr-8">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FaqSection;
