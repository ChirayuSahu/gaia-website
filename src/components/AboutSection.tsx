import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { aboutText } from '@/lib/consts/about'

const AboutSection = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16'>
        <h2 className='text-3xl font-extrabold text-green-700 mb-6'>About GAIA, Building a Regenerative Future</h2>
        <MarkdownRenderer content={aboutText[0]} className='text-lg text-gray-700 mb-4 text-justify' />
        <MarkdownRenderer content={aboutText[1]} className='text-lg text-gray-700 mb-4 text-justify' />
        <div className='grid grid-cols-3'>
          <div className=''>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection