'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { ProgressiveBlur } from './ProgressiveBlur'
import HeroSpline from './HeroSpline'
import { AnimatedGradientText } from './AnimatedGradientText'

export function HeroSection() {
    return (
        <>
            <main className="overflow-x-hidden">
                <section className='bg-white dark:bg-black text-black dark:text-white p-5 text-center'>
                    <div className='border border-white rounded-[10px] text-center text-lg logo px-3 text-gray-300 mx-auto w-fit'>
                        PitchBotX
                    </div>
                    <div className="pb-15 pt-6 md:pb-28 lg:pb-35 lg:pt-18">
                        <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-x-12 items-center px-7 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                            {/* Text Content */}
                            <div className="mt-12 w-full max-w-xl py-10 text-center lg:mt-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 text-balance text-5xl font-medium md:text-6xl xl:text-7xl">
                                    <AnimatedGradientText speed={1.5}
                                        colorFrom="#999090"
                                        colorTo="#ef4444"
                                        className="text-7xl headline">
                                        Pitch Like a Pro.
                                    </AnimatedGradientText>
                                </h1>
                                <p className="mt-3 text-pretty text-lg text-gray-400">
                                    Turn ideas into investor-ready pitches with AI.
                                </p>
                                <div className="mt-12 flex flex-col items-center justify-center gap-1 sm:flex-row lg:justify-start">
                                    <Link to="/pitchform">
                                        <Button asChild size="lg" className="px-5 text-base bg" >
                                            <span className="text-nowrap">Try Now!</span>
                                        </Button>
                                    </Link>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base"
                                    >
                                    </Button>
                                </div>
                            </div>

                            {/* HeroSpline beside the text */}
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <HeroSpline />
                            </div>
                        </div>

                    </div>
                </section>
                <section className="bg-background pb-10 md:pb-30 bg-white dark:bg-black text-black dark:text-white">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Made By </p>
                            </div>
                            <div className="relative py-4 md:w-[calc(100%-11rem)] ">
                                

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
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

// const HeroHeader = () => {
//     const [menuState, setMenuState] = React.useState(false)
//     return (
//         <header>
//             <nav
//                 data-state={menuState && 'active'}
//                 className="group bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
//             >
//                 <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
//                     <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
//                         <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
//                             <Link href="/" aria-label="home" className="flex items-center space-x-2">
//                                 <Logo />
//                             </Link>

//                             <button
//                                 onClick={() => setMenuState(!menuState)}
//                                 aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
//                                 className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
//                             >
//                                 <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
//                                 <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
//                             </button>
//                         </div> 
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }
