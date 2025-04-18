import React, { useState } from "react";
import WebHero from "./images/herocircle.webp"


export default function HeroSection() {
    const [showChat, setShowChat] = useState(false)
  
    const toggleChat = () => {
      setShowChat(!showChat)
    }
  
    return (
      <section
        id="hero-section"
        className="relative overflow-hidden w-full max-w-full mx-auto pt-20 md:pt-32 lg:pt-6 lg:h-[calc(100vh-1.25rem)] px-4 sm:px-6 lg:px-5.5 z-50 pb-16 lg:pb-1"
      >
        {/* Animated blob background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="animate-moveRandomly relative">
            <div className="blob w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary opacity-30 rounded-full blur-3xl transition-transform duration-200 cursor-pointer pointer-events-auto scale-100 hover:scale-110"></div>
          </div>
        </div>
  
        {/* Main content container */}
        <div className="max-w-[100%] mx-auto relative z-10 bg-[white] bg-opacity-40 rounded-xl mt-[-60px] lg:mt-0 md:mt-[-99px] lg:h-full flex flex-col lg:justify-center border-2 border-primary animate-glowingBorder">
          <div className="relative bg-opacity-10 rounded-xl backdrop-blur-xl pt-24 px-6 lg:pt-0 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 2xl:gap-16 items-center overflow-hidden min-h-[600px] lg:min-h-0 lg:h-full w-full animate-thinClockwiseGlow">
            {/* Grid squares */}
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "160px", top: "160px", transition: "all 0.3s ease-out" }}
            ></div>
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "240px", top: "320px", transition: "all 0.3s ease-out" }}
            ></div>
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "80px", top: "480px", transition: "all 0.3s ease-out" }}
            ></div>
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "560px", top: "400px", transition: "all 0.3s ease-out" }}
            ></div>
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "560px", top: "160px", transition: "all 0.3s ease-out" }}
            ></div>
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "800px", top: "240px", transition: "all 0.3s ease-out" }}
            ></div>
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "1200px", top: "160px", transition: "all 0.3s ease-out" }}
            ></div>
            <div
              className="absolute w-[80px] h-[80px] bg-white"
              style={{ left: "1360px", top: "400px", transition: "all 0.3s ease-out" }}
            ></div>
  
            {/* Grid background */}
            <div
              className="absolute inset-0 pointer-events-none z-0 before:absolute before:inset-0 before:z-10 "
              style={{
                backgroundSize: "80px 80px",
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent 0 79px,
                    #E9EAEB 79px 80px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent 0 79px,
                    #E9EAEB 79px 80px
                  )
                `,
                transition: "all 0.2s ease-out",
                maskImage: `
                  linear-gradient(
                    to right,
                    transparent,
                    black 10%,
                    black 70%,
                    transparent
                  ),
                  linear-gradient(
                    to bottom,
                    transparent,
                    black 10%,
                    black 70%,
                    transparent
                  )
                `,
                maskComposite: "intersect",
                WebkitMaskImage: `
                  linear-gradient(
                    to right,
                    transparent,
                    black 10%,
                    black 70%,
                    transparent
                  ),
                  linear-gradient(
                    to bottom,
                    transparent,
                    black 10%,
                    black 70%,
                    transparent
                  )
                `,
                WebkitMaskComposite: "source-in",
              }}
            ></div>
  
            {/* Text content */}
            <div className="max-w-2xl xl:max-w-2xl 2xl:max-w-[50rem] text-center lg:text-left order-1 relative z-10 p-6 lg:p-8 rounded-xl mx-auto lg:translate-x-[8%] 2xl:translate-x-[11%] lg:pr-24 2xl:pr-44">
              <h1 className="text-3xl sm:text-4xl md:text-4xl xl:text-[2.8rem] leading-[40px] sm:leading-[50px] md:leading-[50px] 2xl:leading-[1.2] tracking-[-0.01em] font-display font-semibold text-dark">
                AI Conversations So Real, <br />
                You'd Swear They're Human.
              </h1>
              <p className="mt-4 text-base sm:text-[14px] md:text-[17px] 2xl:text-l leading-[24px] 2xl:leading-[1.6] font-display font-normal text-gray-600">
                Deploy hyper‑realistic voice agents in days — reduce human agent workload by 50%, boost CSAT, and scale
                24/7 support without extra headcount.
              </p>
              <div className="flex justify-center lg:justify-start mt-6 2xl:mt-6">
                <a href="https://app.trillet.ai">
                  <div className="group flex items-center cursor-pointer select-none">
                    <div className="font-display bg-primary text-white px-7 py-2 rounded-full group-hover:bg-primary-dark transition-all duration-200 flex items-center justify-center space-x-0 text-base font-normal">
                      <span>Get Started</span>
                      <div className="p-2 rounded-full bg-primary group-hover:bg-primary-dark transition-all duration-200 flex items-center justify-center">
                        <svg className="w-6 h-6 2xl:w-8 2xl:h-8" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
  
            {/* Image and chat section */}
            <div className="relative flex justify-center order-2 mt-4 lg:mt-0 w-full lg:translate-x-[-4%] 2xl:translate-x-[0%] pb-20 lg:pb-0">
              <div className="relative w-full max-w-[450px] 2xl:max-w-[550px] h-[400px] 2xl:h-[550px] flex items-center">
                <img
                  alt="AI Visualization"
                  width={400}
                  height={400}
                  className="object-contain w-full h-auto animate-spin-slow"
                  style={{ transform: "rotate(233.703deg)" }}
                  src={WebHero}
                />
                <div className="absolute left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
                  <button
                    onClick={toggleChat}
                    className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 bg-[#1066FF] backdrop-blur-[90px] text-white rounded-full transition-all duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] hover:scale-105 font-display font-bold disabled:opacity-50 text-[10px] sm:text-[12px] md:text-[16px] border-2 border-transparent hover:border-primary animate-glowingBorder"
                  >
                    <svg className="mr-2 w-6 h-6 md:w-8 md:h-8" viewBox="0 0 100 20" fill="currentColor">
                      <rect x="10" y="8" width="8" height="12" rx="5" ry="5">
                        <animate attributeName="height" values="4;80;4" dur="0.6s" repeatCount="indefinite"></animate>
                        <animate attributeName="y" values="8;-30;8" dur="0.6s" repeatCount="indefinite"></animate>
                      </rect>
                      <rect x="30" y="8" width="8" height="12" rx="5" ry="5">
                        <animate
                          attributeName="height"
                          values="4;80;4"
                          dur="0.6s"
                          begin="0.2s"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="y"
                          values="8;-30;8"
                          dur="0.6s"
                          begin="0.2s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                      <rect x="50" y="8" width="8" height="12" rx="5" ry="5">
                        <animate
                          attributeName="height"
                          values="4;80;4"
                          dur="0.6s"
                          begin="0.4s"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="y"
                          values="8;-30;8"
                          dur="0.6s"
                          begin="0.4s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </svg>
                    Try It Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }