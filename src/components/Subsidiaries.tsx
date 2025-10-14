import React from 'react'
import Image from 'next/image'
import { subsidiaries } from '@/lib/consts/subsidiaries'
import Link from 'next/link'

const Subsidiaries = () => {
    return (
        <div className='h-auto bg-white'>
            <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-16'>
                <h2 className='text-3xl font-extrabold text-green-700 mb-6'>Our Subsidiaries</h2>
                <div className="flex flex-col md:flex-row justify-start">
                    {subsidiaries.map((subsidiary) => (
                        <Link key={subsidiary.name} href={subsidiary.link} target='_blank' className="flex items-center space-x-4 p-4  hover:bg-gray-100 rounded-md transition-all duration-200 w-full md:w-1/3">
                            <Image src={subsidiary.image} alt={subsidiary.name} width={100} height={100} className='rounded-md' draggable={false} />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">{subsidiary.name}</h3>
                                <p className="text-sm text-gray-600">{subsidiary.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Subsidiaries