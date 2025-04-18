import React from 'react'
import Globe from "./images/globe.webp";
import Building from "./images/building-07.webp";
import Heart from "./images/activity-heart.webp";
import Stonks from "./images/stonks.svg";

const Result = () => {
  return (
    <section id="results" className="relative z-10">
    <section
      id="why-us-section"
      className="relative pt-12 sm:pt-16 lg:pt-6 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-[#ecf1fd] bg-opacity-30 overflow-hidden"
      style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] font-display font-semibold text-dark px-0">
            <span className="inline">
              Results
              <img
                alt="Stonks"
                width={100}
                height={100}
                className="inline-block align-middle -ml-[3px] -mr-3 w-[clamp(60px,8vw,100px)]"
                src={Stonks}
              />
              That Speak Volumes
            </span>
          </h2>
          <p className="mt-1 mb-10 sm:mb-16 text-base/relaxed sm:text-lg/relaxed font-display font-normal text-gray-600 max-w-3xl mx-auto px-4">
            Our clients see immediate impact: increased efficiency, reduced wait times, happier customers, and
            stronger returns.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
            <div
              className="bg-white bg-opacity-30 rounded-[32px] p-6 sm:p-8 text-center transform transition-all duration-500"
              style={{ boxShadow: "inset 0 0 25px 0 rgba(255, 255, 255, 0.8)" }}
            >
              <div className="mb-4">
                <div className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-2 bg-gradient-to-r from-[#15A9FB] to-[#3971FB] bg-clip-text text-transparent">
                  30%
                </div>
                <div className="text-gray-700 font-display text-sm/5 sm:text-base/5 md:text-[18px]/5">
                  <span className="font-semibold">increase</span> in referral
                  <br />
                  conversion with AI-assisted
                  <br />
                  lead qualification.
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <img
                  alt="Lead Generation Icon"
                  width={22}
                  height={22}
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  src={Globe}
                />
                <span className="text-sm sm:text-base whitespace-nowrap font-display text-gray-600">
                  Lead Generation Company
                </span>
              </div>
            </div>
            <div
              className="bg-white bg-opacity-30 rounded-[32px] p-6 sm:p-8 text-center transform transition-all duration-500"
              style={{ boxShadow: "inset 0 0 25px 0 rgba(255, 255, 255, 0.8)" }}
            >
              <div className="mb-4">
                <div className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-2 bg-gradient-to-r from-[#15A9FB] to-[#3971FB] bg-clip-text text-transparent">
                  51%
                </div>
                <div className="text-gray-700 font-display text-sm/5 sm:text-base/5 md:text-[18px]/5">
                  <span className="font-semibold">reduction</span> in calls handled <br />
                  by human team while AI manages <br />
                  all FAQs and scheduling.
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <img
                  alt="Healthcare Provider Icon"
                  width={22}
                  height={22}
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  src={Building}
                />
                <span className="text-sm sm:text-base whitespace-nowrap font-display text-gray-600">
                  Healthcare Provider
                </span>
              </div>
            </div>
            <div
              className="bg-white bg-opacity-30 rounded-[32px] p-6 sm:p-8 text-center transform transition-all duration-500"
              style={{ boxShadow: "inset 0 0 25px 0 rgba(255, 255, 255, 0.8)" }}
            >
              <div className="mb-4">
                <div className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-2 bg-gradient-to-r from-[#15A9FB] to-[#3971FB] bg-clip-text text-transparent">
                  $146K
                </div>
                <div className="text-gray-700 font-display text-sm/5 sm:text-base/5 md:text-[18px]/5">
                  <span className="font-semibold">savings</span> in monthly labor costs
                  <br /> through 24/7 AI call handling and
                  <br /> lead capture.
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <img
                  alt="National Legal Hotline Icon"
                  width={22}
                  height={22}
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  src={Heart}
                />
                <span className="text-sm sm:text-base whitespace-nowrap font-display text-gray-600">
                  National Legal Hotline
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

export default Result