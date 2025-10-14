import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { aboutText, cards, prakritiText } from '@/lib/consts/about'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16'>
        <h2 className='text-3xl font-extrabold text-green-700 mb-6'>About GAIA, Building a Regenerative Future</h2>
        <MarkdownRenderer content={aboutText[0]} className='text-lg text-gray-700 mb-4 text-justify' />
        <MarkdownRenderer content={aboutText[1]} className='text-lg text-gray-700 mb-4 text-justify' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative w-full h-[400px] sm:h-[450px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4 text-white">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <MarkdownRenderer content={card.content} className="text-sm text-white/90" />
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-md active:scale-97 hover:scale-102 transition-all duration-300 text-green-700 hover:text-green-600 flex items-center rounded-full"
                >
                  {card.buttonText}
                  <ArrowRight className="-rotate-45" />
                </Button>
              </div>
            </div>

          ))}

        </div>
      </div>
      <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-16'>
        <h2 className='text-3xl font-extrabold text-green-700 mb-6'>Our Regenerative Mission: <span className='font-light'>Prakriti</span></h2>
        <MarkdownRenderer content={prakritiText} className='text-lg text-gray-700 mb-6' />
        <div className="flex justify-start btn-group group">
          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full sm:w-auto text-md active:scale-97 hover:scale-102 transition-all duration-300 bg-green-700 hover:bg-green-600 hover:text-white text-white flex items-center rounded-full"
          >
            Learn More
            <ArrowRight className='-rotate-45' />
          </Button>
        </div>
        <div className='py-4'>
          <Image src="/prakriti/prakriti.webp" alt="Prakriti" width={600} height={375} className='rounded-md w-full' draggable={false} />
        </div>
      </div>
    </div>
  )
}

export default AboutSection