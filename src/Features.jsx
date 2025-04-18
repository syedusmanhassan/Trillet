import React from 'react'
import Gif1 from "./images/1.gif";
import Gif2 from "./images/2.gif";
import Gif3 from "./images/3.gif";
import Gif4 from "./images/4.gif";
import SVG from "./images/asterik.svg";

const Features = () => {
  return (
    <section id="features" className="relative z-10">
    <section
      id="features-section"
      className="relative pt-12 sm:pt-16 lg:pt-24 pb-0 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-display text-base uppercase tracking-[0.2em]">FEATURES</span>
          <h2 className="mt-4 text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] font-display font-semibold text-dark text-center">
            <span className="flex justify-center items-center px-4">
              <span>Complete Toolkit</span>
              <img
                alt="Asterisk"
                width={100}
                height={100}
                className="hidden sm:inline-block"
                src={SVG}
              />
            </span>
            <span className="block">to Deliver Results with Voice AI</span>
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-6 auto-rows-min relative pb-20">
          <div
            className="relative col-span-12 md:col-span-5 bg-white bg-opacity-30 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10"
            style={{
              boxShadow: "inset 0 0 25px 0 rgba(255,255,255,1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2 sm:mb-3">
              Guided Dialogues
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6 font-display">
              Enhance customer interactions by crafting intuitive conversation flows that optimize your calls.
            </p>
            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-6 h-[600px] relative overflow-hidden border-2 border-white">
              <div className="absolute inset-0 w-full h-full">
                <img
                  alt="Guided Dialogues Animation"
                  fill
                  src={Gif1}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div
            className="relative col-span-12 md:col-span-7 bg-white bg-opacity-30 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10"
            style={{
              boxShadow: "inset 0 0 25px 0 rgba(255,255,255,1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2 sm:mb-3">
              True Multilingual Mastery
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6 font-display">
              Harness native support for 30+ languages and dialects to deliver culturally aware, consistent
              interactions worldwide.
            </p>
            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-6 h-[600px] relative overflow-hidden border-2 border-white">
              <div className="absolute inset-0 w-full h-full">
                <img
                  alt="Multilingual Mastery Animation"
                  fill
                  src={Gif2}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-7 bg-white bg-opacity-30 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10"
            style={{
              boxShadow: "inset 0 0 25px 0 rgba(255,255,255,1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2 sm:mb-3">
              Every Channel Covered
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6 font-display">
              Engage your customers on multiple channels. Work seamlessly across voice, SMS, WhatsApp, and beyond.
            </p>
            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-6 h-[400px] relative overflow-hidden border-2 border-white">
              <div className="absolute inset-0 w-full h-full">
                <img
                  alt="Every Channel Covered Animation"
                  fill
                  src={Gif3}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-5 bg-white bg-opacity-30 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10"
            style={{
              boxShadow: "inset 0 0 25px 0 rgba(255,255,255,1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2 sm:mb-3">
              API-Powered Integration
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6 font-display">
              Automate your workflows seamlessly by connecting your CRM, ERP, and PBX via robust APIs.
            </p>
            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-6 h-[400px] relative overflow-hidden border-2 border-white">
              <div className="absolute inset-0 w-full h-full">
                <img
                  alt="API-Powered Integration Animation"
                  fill
                  src={Gif4}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

export default Features