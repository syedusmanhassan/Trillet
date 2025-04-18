import React from 'react'
import Dollar from "./images/dollar.svg";

const Price = () => {
  return (
    <section id="pricing" className="relative z-10">
        <section
          id="pricing-section"
          className="relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] font-display font-semibold text-dark px-0">
                <span className="inline">
                  Simple
                  <img
                    alt="Dollar"
                    width={100}
                    height={100}
                    className="inline-block align-middle -ml-[3px] -mr-3 w-[clamp(60px,8vw,100px)]"
                    src={Dollar}
                  />
                  pay-per-minute pricing.
                </span>
              </h2>
              <p className="mt-5 mb-10 sm:mb-16 text-base sm:text-lg leading-[1.6] font-display font-normal text-gray-600 max-w-3xl mx-auto px-4">
                Discounts available at scale.
              </p>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div
                  className="relative bg-white bg-opacity-30 rounded-[32px] p-6 sm:p-8 transform transition-all duration-500"
                  style={{
                    boxShadow: "inset 0 0 25px 0 rgba(255, 255, 255, 0.8)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[32px] -z-10"
                    style={{
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      background: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "inset 0 0 30px 5px rgba(255, 255, 255, 0.6)",
                    }}
                  ></div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 pr-0 sm:pr-6 mb-6 sm:mb-0">
                      <div className="mb-4">
                        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-display font-medium border-2 border-[#3971FB] bg-transparent text-gray-800">
                          Pay-as-you-go
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="text-[clamp(2rem,5vw,3rem)] font-bold bg-gradient-to-r from-[#15A9FB] to-[#3971FB] bg-clip-text text-transparent">
                            9¢
                          </span>
                        </div>
                        <div className="text-gray-600 font-display text-base">/minute</div>
                      </div>
                      <p className="text-gray-700 font-display text-sm sm:text-base mb-0">
                        Start instantly with no upfront commitments. Pay only for what you use.
                      </p>
                    </div>
                    <div className="flex-1 border-t-2 sm:border-t-0 pt-6 sm:pt-0 sm:pl-6">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">10 concurrent calls</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">99.9% uptime</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">Unused credits roll over</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">Email support (≤24h)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">Onboarding support (works!)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">Custom voice expertise (1 pilot)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="relative bg-white bg-opacity-30 rounded-[32px] p-6 sm:p-8 transform transition-all duration-500"
                  style={{
                    boxShadow: "inset 0 0 25px 0 rgba(255, 255, 255, 0.8)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[32px] -z-10"
                    style={{
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      background: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "inset 0 0 30px 5px rgba(255, 255, 255, 0.6)",
                    }}
                  ></div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 pr-0 sm:pr-6 mb-6 sm:mb-0">
                      <div className="mb-4">
                        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-display font-medium border-2 border-[#3971FB] bg-transparent text-gray-800">
                          Enterprise
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="text-[clamp(2rem,5vw,3rem)] font-bold bg-gradient-to-r from-[#15A9FB] to-[#3971FB] bg-clip-text text-transparent">
                            Custom
                          </span>
                        </div>
                        <div className="text-gray-600 font-display text-base">/minute</div>
                      </div>
                      <p className="text-gray-700 font-display text-sm sm:text-base mb-0">
                        Tailored plans crafted for businesses with large-scale needs.
                      </p>
                    </div>
                    <div className="flex-1 pt-6 sm:pt-0 sm:pl-6 border-t-2 sm:border-t-0">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">Unlimited concurrent calls</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">99.99% uptime SLA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">Bulk volume discounts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">Custom trained voices</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">
                            Dedicated engineer and Slack support
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 text-[#3971FB] mr-2">✓</span>
                          <span className="text-gray-700 font-display text-sm">
                            White glove agent creation &amp; setup
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  )
}

export default Price