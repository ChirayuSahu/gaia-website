import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { aboutText, cards, prakritiText } from '@/lib/consts/about'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const AboutSection = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16'>
        <h2 className='text-3xl font-extrabold text-green-700 mb-6'>About GAIA, Building a Regenerative Future</h2>
        <MarkdownRenderer content={aboutText[0]} className='text-lg text-gray-700 mb-4 text-justify' />
        <MarkdownRenderer content={aboutText[1]} className='text-lg text-gray-700 mb-4 text-justify' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
          {cards.map((card, index) => (
            <div key={index} className="group flex flex-col justify-start border border-green-700 hover:border-green-500 p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300">
              <h3 className="text-xl font-bold mb-1 text-green-700">{card.title}</h3>
              <MarkdownRenderer content={card.content} className="text-gray-700 mt-2" />
            </div>
          ))}

        </div>
      </div>
      <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-16'>
        <h2 className='text-3xl font-extrabold text-green-700 mb-6'>Our Regenerative Mission: Prakriti</h2>
        <MarkdownRenderer content={prakritiText} className='text-lg text-gray-700 mb-6' />
        <div className="flex justify-start btn-group group">
          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full sm:w-auto text-md active:scale-97 hover:scale-102 transition-all duration-300 bg-green-700 hover:bg-green-600 hover:text-white text-white flex items-center rounded-full"
          >
            Learn More
            <ArrowRight />
          </Button>
        </div>

      </div>
    </div>
  )
}

export default AboutSection