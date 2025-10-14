import React from 'react'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

const responsibilities = [
    "Develop and implement fundraising strategies to meet the Foundation’s fundraising goals, focusing on grants, sponsorships, and other funding opportunities.",
    "Attract financial support for Mission Prakriti from diverse sources, including government agencies, corporate sponsorships, philanthropic donations, and other funding opportunities.",
    "Oversee and maintain a comprehensive database of grant opportunities from government agencies, private foundations, and corporate sponsors that align with Gaia the Earth Foundation’s strategic goals.",
    "Prepare compelling proposals and grant applications to engage funder interest and convert them into grant sponsorships or revenue streams.",
    "Collaborate with internal teams, including senior leadership and program teams, to align fundraising efforts with the Foundation’s overall strategy and objectives."
];

const qualifications = [
    "6-7 years of experience in a fundraising/business development role, with a proven track record of securing funding support from diverse sources.",
    "Proven track record in developing strategic partnerships with funders, sponsors, and partners.",
    "Excellent interpersonal and relationship-building skills, with the ability to build and maintain strong relationships with stakeholders.",
    "Exceptional verbal and written communication skills, with the ability to create compelling fundraising proposals and engage potential funders.",
    "Demonstrated experience in leading and mentoring a team, fostering a collaborative and results-driven culture.",
    "Strong negotiation skills with the ability to finalize partnership agreements and sponsorship terms.",
    "Ability to work collaboratively with internal teams and external stakeholders to achieve fundraising goals.",
    "A passion for driving positive social impact and a strong commitment to sustainability."
];

export const metadata: Metadata = {
    title: "Work with Us - Gaia The Earth Foundation",
    description: "Join our team and help us shape the future.",
};

const page = () => {
    return (
        <div className='h-auto bg-white pt-25'>
            <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10'>
                <div className='space-y-2'>
                    <h2 className='text-3xl font-extrabold text-green-700'>Work with Us!</h2>
                    <p className='text-lg text-gray-700 mb-4'>Join our team and help us shape the future.</p>
                <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfxWgwHP7BZ6W91SSNWATRs32FTahfPr6oPC3wJuSR0BFLUhA/viewform"} target='_blank'>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto text-md active:scale-97 hover:scale-102 transition-all duration-300 bg-green-700 hover:bg-green-600 hover:text-white text-white flex items-center rounded-full"
                    >
                        Apply Now
                        <ArrowRight className="-rotate-45" />
                    </Button>
                </Link>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-extrabold text-green-700'>Responsibilities</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {responsibilities.map((item, index) => (
                            <li key={index} className="text-gray-800">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-extrabold text-green-700'>Qualifications</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {qualifications.map((item, index) => (
                            <li key={index} className="text-gray-800">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page