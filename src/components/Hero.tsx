import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const HeroHome = () => {

    return (
        <>
            <div className='relative min-h-screen w-full flex flex-col'>
                <div className='absolute z-10 min-h-screen w-full bg-[url("/hero/hero-bg.webp")] bg-cover bg-center'>
                </div>
                <div className='absolute z-10 min-h-screen flex items-center justify-start font-inter bg-black/50 w-full lg:pl-20'>
                    <div className='text-left space-y-6 px-4 max-w-6xl m-4'>
                        <div>
                            <h1 className='text-5xl sm:text-7xl font-black uppercase text-white mb-2'>Gaia The Earth<br />Foundation</h1>
                            <p className='text-xl sm:text-2xl text-gray-200 mb-2'>regenrating earth, one step at a time.</p>
                        </div>
                        <p className='text-md sm:text-lg text-gray-200 font-light max-w-2xl'>At GAIA The Earth Foundation, we work to restore ecosystems, reduce waste, and rebuild harmony between people and the planet.</p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-start'>
                            <Link href="/get-started" passHref>
                                <Button size={"lg"} className="w-full sm:w-auto text-md active:scale-97 hover:scale-102 transition-transform duration-300 text-green-700">Explore Our Work</Button>
                            </Link>
                            <Link href="/get-started" passHref>
                                <Button size={"lg"} className="w-full sm:w-auto text-md active:scale-97 hover:scale-102 transition-transform duration-300 text-green-700">Donate Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroHome;