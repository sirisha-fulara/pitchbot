'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { InfiniteSlider } from './InfiniteSlider'
import { ProgressiveBlur } from './ProgressiveBlur'
import HeroSpline from './HeroSpline'
import { AnimatedGradientText } from './AnimatedGradientText'

export function HeroSection() {
    return (
        <>
            <main className="overflow-x-hidden">
                <section className='bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 lg:px-8 text-center'>
                    {/* Logo */}
                    <div className='border border-gray-300 dark:border-gray-600 rounded-lg text-center text-sm sm:text-base lg:text-lg px-3 py-1 text-gray-500 dark:text-gray-300 mx-auto w-fit mt-4'>
                        PitchBotX
                    </div>
                    
                    {/* Hero Content */}
                    <div className="pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20 lg:pb-28 lg:pt-16">
                        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 items-center px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                            
                            {/* Text Content */}
                            <div className="w-full max-w-2xl text-center lg:w-1/2 lg:text-left lg:max-w-xl">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-tight">
                                    <AnimatedGradientText 
                                        speed={1.5}
                                        colorFrom="#999090"
                                        colorTo="#ef4444"
                                        className="block"
                                    >
                                        Pitch Like a Pro.
                                    </AnimatedGradientText>
                                </h1>
                                <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
                                    Turn ideas into investor-ready pitches with AI.
                                </p>
                                
                                {/* CTA Buttons */}
                                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:justify-start">
                                    <Link to="/pitchform" className="w-full sm:w-auto">
                                        <Button 
                                            size="lg" 
                                            className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base font-medium"
                                        >
                                            Try Now!
                                        </Button>
                                    </Link>
                                    <Button
                                        size="lg"
                                        variant="ghost"
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base font-medium border border-gray-300 dark:border-gray-600"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </div>

                            {/* HeroSpline */}
                            <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                                <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
                                    <HeroSpline />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Logos Section */}
                <section className="bg-white dark:bg-black text-black dark:text-white pb-12 sm:pb-16 md:pb-20 lg:pb-24">
                    <div className="group relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center md:flex-row">
                            
                            {/* "Made By" Label */}
                            <div className="mb-4 md:mb-0 md:max-w-32 lg:max-w-44 md:border-r md:border-gray-200 dark:md:border-gray-700 md:pr-4 lg:pr-6">
                                <p className="text-center md:text-right text-sm text-gray-500 dark:text-gray-400">
                                    Made By
                                </p>
                            </div>
                            
                            {/* Logo Slider */}
                            <div className="relative py-4 w-full md:w-[calc(100%-8rem)] lg:md:w-[calc(100%-11rem)]">
                                <InfiniteSlider speedOnHover={20} speed={40} gap={80} className="sm:gap-100 lg:gap-112">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-4 sm:h-5 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-3 sm:h-4 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-3 sm:h-4 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-4 sm:h-5 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-4 sm:h-5 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-3 sm:h-4 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-5 sm:h-6 lg:h-7 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-5 sm:h-6 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            loading="lazy"
                                        />
                                    </div>
                                </InfiniteSlider>

                                {/* Gradient Overlays */}
                                <div className="absolute inset-y-0 left-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
                                <div className="absolute inset-y-0 right-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
                                
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 lg:w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 lg:w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
