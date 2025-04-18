import React from "react";
import Rob from "./images/Rob.webp";
import Office from "./images/Office.webp";
import TrilletLogo from "./images/trillet-logo.svg";
import TrilletFooter from "./images/trillet-footer.svg";

const Home =()=> {
  return (
    <section className="relative z-10">
      <section className="py-0 px-0 bg-white relative">
        {/* Gradient background blob */}
        <div
          className="absolute left-[-10rem] top-[40%] w-[calc(100vw+15rem)] h-60 bg-primary rounded-full blur-2xl opacity-20 pointer-events-none transform -translate-y-1/2 rotate-[165deg]"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, #3971FB 0%, #15A9FB 100%)" }}
        />

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-30 lg:pb-40">
          <span className="text-primary font-display text-base uppercase tracking-[0.2em]">BOOK A DEMO</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug lg:leading-normal font-display font-semibold text-dark text-center">
            Experience The Next Level of Voice AI Dev Tooling
          </h2>
          <div className="mt-10">
            <a
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark hover:shadow-lg transition-all duration-200 text-[18px] leading-[26px] font-display font-normal"
              href="https://app.trillet.ai"
            >
              Sign Up Now
            </a>
          </div>
        </div>

        {/* Blog Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-display font-bold text-gray-900 mt-10 mb-12">
            Stay Ahead With{" "}
            <span className="bg-gradient-to-r from-[#83E4FF] via-[#27A3FD] to-[#0062E9] text-transparent bg-clip-text">
              Conversational AI
            </span>
          </h2>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-[400px] md:max-w-[740px] mx-auto">
            {/* Blog Card 1 */}
            <article
              className="z-50 h-full flex flex-col bg-white/20 backdrop-blur-md shadow-lg hover:scale-[1.02] hover:shadow-xl transition rounded-[12px] overflow-hidden"
              style={{ boxShadow: "inset 0 0 25px 0 rgb(255, 255, 255), 0 2px 4px rgba(0, 0, 0, 0.1)" }}
            >
              <a className="mb-4" href="/blogs/human-like-voice-ai">
                <div className="relative w-full h-[275px]">
                  <img
                    alt="Why Do Most AI Voices Still Sound Robotic?"
                    src={Rob}
                    fill
                    className="max-h-[275px] object-cover"
                  />
                </div>
              </a>
              <div className="px-6 pb-6 flex-1 flex flex-col">
                <a href="/blogs/human-like-voice-ai">
                  <h2 className="text-xl font-semibold text-gray-900 font-display hover:text-blue-500 transition line-clamp-2 mb-2">
                    Why Do Most AI Voices Still Sound Robotic?
                  </h2>
                </a>
                <p className="text-gray-700 font-display line-clamp-2 mb-4">
                  Voice AI has exploded onto the scene, but talk to most AI assistants and you&apos;ll still hear
                  something … off. They speak clearly, sure, but they lack the little quirks that make human
                  conversation feel natural. Explore how Trillet solves this!
                </p>
                <div className="mt-auto">
                  <a
                    className="text-blue-600 font-display hover:underline transition duration-300"
                    href="/blogs/human-like-voice-ai"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </article>

            {/* Blog Card 2 */}
            <article
              className="z-50 h-full flex flex-col bg-white/20 backdrop-blur-md shadow-lg hover:scale-[1.02] hover:shadow-xl transition rounded-[12px] overflow-hidden"
              style={{ boxShadow: "inset 0 0 25px 0 rgb(255, 255, 255), 0 2px 4px rgba(0, 0, 0, 0.1)" }}
            >
              <a className="mb-4" href="/blogs/VoiceAICustomerService">
                <div className="relative w-full h-[275px]">
                  <img
                    alt="Voice AI in Customer Service: Transforming the Contact Center Experience"
                    src={Office}
                    fill
                    className="max-h-[275px] object-cover"
                  />
                </div>
              </a>
              <div className="px-6 pb-6 flex-1 flex flex-col">
                <a href="/blogs/VoiceAICustomerService">
                  <h2 className="text-xl font-semibold text-gray-900 font-display hover:text-blue-500 transition line-clamp-2 mb-2">
                    Voice AI in Customer Service: Transforming the Contact Center Experience
                  </h2>
                </a>
                <p className="text-gray-700 font-display line-clamp-2 mb-4">
                  Discover how voice AI in customer service is revolutionizing contact centers. Learn how AI-powered
                  IVR, voice bots, and more help enterprises cut costs, boost efficiency, and improve CX—with real-world
                  stats to back it up.
                </p>
                <div className="mt-auto">
                  <a
                    className="text-blue-600 font-display hover:underline transition duration-300"
                    href="/blogs/VoiceAICustomerService"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-white relative overflow-hidden mt-20 mb-[-63] mt-[140]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 mt-12">
                <a className="flex" href="/">
                  <img
                    alt="Trillet"
                    width={80}
                    height={80}
                    className="h-10 w-auto"
                    src={TrilletLogo}
                  />
                </a>
                <p className="mt-4 text-gray-600 text-sm font-display">
                  Intelligent voice agents that handle customer service and automate your business workflows.
                </p>
              </div>

              <div className="lg:col-span-2 lg:col-start-7 space-y-4 text-left" style={{ zIndex: 3 }}>
                <h3 className="text-lg font-display font-bold text-dark mb-2">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="text-sm font-display text-black hover:text-primary focus:outline-none">
                      Features
                    </button>
                  </li>
                  <li>
                    <button className="text-sm font-display text-black hover:text-primary focus:outline-none">
                      Why Us
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://docs.trillet.ai"
                      className="text-sm font-display text-black hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-display text-black hover:text-primary" href="/blogs">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://form.typeform.com/to/qRRENIBp"
                      target="_blank"
                      className="text-sm font-display text-black hover:text-primary"
                      rel="noopener noreferrer"
                    >
                      Enterprise
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-4 sm:mt-8 sm:pt-3 md:mt-6 md:pt-2 lg:mt-10 lg:pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex space-x-6">
                  <a className="text-sm font-display text-black hover:text-primary" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  <a className="text-sm font-display text-black hover:text-primary" href="/terms-of-use">
                    Terms of Use
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full md:w-auto -mb-4">
              <div className="hidden md:inline-block">
                <img
                  alt="Trillet Decorative"
                  width={600}
                  height={240}
                  className="w-full md:w-[400px] lg:w-[600px] object-contain"
                  src={TrilletFooter}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
export default Home;
