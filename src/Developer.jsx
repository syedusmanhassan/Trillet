import React from 'react';
import { useInView } from 'react-intersection-observer';
import Stack from "./images/stack.webp";
import API from "./images/API_icon.webp";
import Code1 from "./images/code1.svg";
import Code2 from "./images/nocode2.svg";
import Love from "./images/love.svg";

const AnimatedCard = ({ children, delay, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`rounded-[32px] p-8 flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{
        boxShadow: "inset 0 0 25px 0 rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(10px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Developer = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="developers" className="relative z-10" ref={sectionRef}>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] font-display font-semibold text-dark text-center px-0">
              <span className={`inline transition-opacity duration-700 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}>
                Loved
                <img
                  alt="Love"
                  width={100}
                  height={100}
                  className="inline-block align-middle -ml-[3px] -mr-3"
                  src={Love}
                />
                by Developers
              </span>
            </h2>
          </div>
          
          <AnimatedCard delay={100} className="mb-6">
            <div className="lg:w-1/2 space-y-6 lg:pl-12 sm:pl-4">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900">
                Built for developers who build
              </h3>
              <p className="text-lg text-gray-600 font-display leading-relaxed">
                Tap into our robust APIs and SDKs to add powerful voice AI to your systems—fast. With clear
                documentation and developer-first tools, you're in the driver's seat.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-3">
                  <div>
                    <span className="inline-flex items-center gap-2">
                      <img alt="Stack" width={20} height={20} src={Stack} />
                      <h4 className="font-display text-primary font-semibold mb-1">Official SDKs</h4>
                    </span>
                    <p className="text-sm text-gray-600">
                      Build fast and effortlessly with our SDKs for Node.js, Python, C#, Java, PHP, Ruby, and Go.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <span className="inline-flex items-center gap-2">
                      <img alt="API Icon" width={20} height={20} src={API} />
                      <h4 className="font-display text-primary font-semibold mb-1">Trusted API availability</h4>
                    </span>
                    <p className="text-sm text-gray-600">
                      Reliable stability to power your app's core functionalities with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                alt="Code snippet showcase"
                width={520}
                height={250}
                className="rounded-xl"
                src={Code1}
              />
            </div>
          </AnimatedCard>

          <AnimatedCard delay={300}>
            <div className="lg:w-1/2 space-y-6 lg:pl-12 sm:pl-4">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900">
                Prefer not to code? No problem.
              </h3>
              <p className="text-lg text-gray-600 font-display leading-relaxed">
                Our team takes care of everything—custom setup, integration, and ongoing support. Get a
                production-ready solution tailored to your business, hassle-free.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-display hover:bg-primary/90 transition-colors text-center no-underline"
              >
                Speak to our team today
              </a>
            </div>
            <div className="lg:w-1/2">
              <img
                alt="No-code interface showcase"
                width={500}
                height={300}
                className="w-full h-auto rounded-xl"
                src={Code2}
              />
            </div>
          </AnimatedCard>
        </div>
      </section>
    </section>
  );
};

export default Developer;