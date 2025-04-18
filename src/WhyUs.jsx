import React from 'react'
import { Play} from "lucide-react"
import Trillet from "./images/trillet.svg"

const WhyUs = () => {
  return (
    <section id="why-us" className="relative z-10">
        <section
          id="why-us"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
          style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(10px)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] font-display font-semibold text-dark text-center px-0">
                <span className="inline">
                  Hear the
                  <img
                    alt="Trillet"
                    width={100}
                    height={100}
                    className="inline-block align-middle -ml-[3px] -mr-3"
                    src={Trillet}
                  />
                  Trillet Advantage
                </span>
              </h2>
              <p className="mt-1 mb-10 sm:mb-16 text-base sm:text-lg leading-[1.6] font-display font-normal text-gray-600 max-w-3xl mx-auto px-4">
                Our pre-optimized orchestration means you don't have to "bring your own" components (but you still can)
                - our entire stack is pre-integrated and tuned for perfect interoperation.
              </p>
            </div>
            <div
              className="rounded-[32px] overflow-hidden"
              style={{ boxShadow: "inset 0 0 25px 0 rgba(255, 255, 255, 0.8)" }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 bg-primary text-white px-6 py-4 font-display">
                <div className="text-left">AUDIO DEMO</div>
                <div className="text-center">USE CASE</div>
                <div className="text-center hidden sm:block">LANGUAGE</div>
                <div className="text-right">LENGTH</div>
              </div>
              <div className="divide-y divide-white">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out">
                  <div className="flex items-center gap-4">
                    <button
                      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                      aria-label="Play"
                    >
                      <Play className="w-4 h-4 fill-white" />
                    </button>
                    <span className="font-display font-bold text-black">Andrew</span>
                  </div>
                  <div className="text-gray-600 text-sm text-center">Solar outbound post-sales call</div>
                  <div className="text-gray-600 text-sm text-center hidden sm:block">ENGLISH</div>
                  <div className="text-gray-600 text-sm text-right">00:00 / 01:56</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  )
}

export default WhyUs