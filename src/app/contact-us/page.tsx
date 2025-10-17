import React from 'react'
import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: "Contact Us - Gaia The Earth Foundation",
    description: "Get in touch with us for any inquiries or support.",
};

const ContactUsPage = () => {
    return (
        <div className='h-auto bg-white pt-25'>
            <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10'>
                <div className='space-y-2'>
                    <h2 className='text-3xl font-extrabold text-green-700'>Contact Us!</h2>
                    <p className='text-lg text-gray-700 mb-4'>If you have any questions or need assistance, please reach out to us.</p>
                </div>
                <div className='w-full md:max-w-xl'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage;