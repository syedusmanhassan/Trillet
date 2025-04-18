import { useState, useEffect } from "react"
import Logo from "./images/trillet-icon.webp";
import Text from "./images/trillet-text.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <nav
      className={`
        fixed backdrop-blur-xl z-100 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out
        ${scrolled ? "shadow-md" : ""}
      `}
      style={{
        top: "32px",
        // Width decreases when scrolled
        width: scrolled ? "var(--navbar-width-scrolled, 75%)" : "var(--navbar-width, 90%)",
        // Starting with larger height and collapsing when scrolled
        height: scrolled ? "56px" : "64px", 
        background: "var(--navbar-bg, rgba(255, 255, 255, 0.9))",
        backdropFilter: "blur(var(--navbar-blur, 10px))",
        borderRadius: scrolled ? "24px" : "32px",
        padding: scrolled ? "0px 24px" : "0px 32px",
      }}
    >
      <div className="h-full flex items-center justify-between mx-auto">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-start group transition-transform duration-200 hover:scale-105">
          <div className="relative flex-none transition-all duration-300" 
            style={{ 
              width: scrolled ? "40px" : "48px", 
              height: scrolled ? "40px" : "48px"
            }}>
            <img src={Logo} alt="Trillet Icon" className="object-contain w-full h-full" />
          </div>
          <div 
            className="relative transition-all duration-500 ease-out ml-1" 
            style={{ 
              width: scrolled ? "0" : "56px", 
              height: scrolled ? "40px" : "56px",
              opacity: scrolled ? "0" : "1", 
              overflow: "hidden" 
            }}
          >
            <div className="absolute inset-0">
              <img src={Text} alt="Trillet Text" className="object-contain w-full h-full" />
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6" style={{ gap: scrolled ? "24px" : "30px", opacity: "0.8" }}>
          <a href="#" className="text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light">
            Features
          </a>
          <a href="#" className="text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light">
            Why Us
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light"
          >
            Docs
          </a>
          <a href="/blogs" className="text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light">
            Blogs
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light"
          >
            Enterprise
          </a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center pl-3" style={{ gap: scrolled ? "8px" : "10px" }}>
          {/* Discord Button */}
          <a
            href="https://discord.com/invite/4qbWtkbT93"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center transition-transform duration-300"
            title="Join our Discord"
            aria-label="Join our Discord"
          >
            <div className="bg-[#1060FF] rounded-full flex items-center justify-center group-hover:bg-[#0050E0] transition-colors duration-300"
              style={{
                width: scrolled ? "36px" : "40px",
                height: scrolled ? "36px" : "40px"
              }}
            >
              <DiscordIcon 
                className="text-white" 
                style={{ 
                  transform: "translateX(-0.5px)",
                  width: scrolled ? "20px" : "24px",
                  height: scrolled ? "20px" : "24px"
                }} 
              />
            </div>
          </a>

          {/* Login Button - Transforms on scroll */}
          <a
            href="#"
            className="flex items-center justify-center transition-all duration-300 rounded-full text-white hover:bg-[#0050E0] relative overflow-hidden"
            style={{
              width: scrolled ? "36px" : "96px",
              height: scrolled ? "36px" : "40px",
              backgroundColor: "#1060FF"
            }}
          >
            {/* Text version - visible when not scrolled */}
            <div 
              className="flex items-center justify-center transition-all duration-300 absolute inset-0"
              style={{
                opacity: scrolled ? 0 : 1,
                transform: scrolled ? "translateY(20px)" : "translateY(0)"
              }}
            >
              <span className="text-sm font-medium">Login</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </div>
            
            {/* Icon version - visible when scrolled */}
            <div 
              className="flex items-center justify-center transition-all duration-300 absolute inset-0"
              style={{
                opacity: scrolled ? 1 : 0,
                transform: scrolled ? "translateY(0)" : "translateY(-20px)"
              }}
            >
              <LoginIcon className="w-5 h-5" />
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-full transform transition-all duration-300 ease-in-out top-0 ${isMenuOpen ? "rotate-45 top-[7px]" : ""}`}
                style={{ height: "2px", backgroundColor: "currentcolor", borderRadius: "2px" }}
              ></span>
              <span
                className={`absolute left-0 w-full transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                style={{ height: "2px", backgroundColor: "currentcolor", borderRadius: "2px", top: "7px" }}
              ></span>
              <span
                className={`absolute left-0 w-full transform transition-all duration-300 ease-in-out top-[14px] ${isMenuOpen ? "-rotate-45 top-[7px]" : ""}`}
                style={{ height: "2px", backgroundColor: "currentcolor", borderRadius: "2px" }}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[90%] bg-white/100 backdrop-blur-xl shadow-lg
          rounded-lg z-40 overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <div className="px-4 py-3 space-y-2 flex flex-col items-center">
          <a
            href="#"
            className="w-full text-center px-4 py-2 text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light"
          >
            Features
          </a>
          <a
            href="#"
            className="w-full text-center px-4 py-2 text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light"
          >
            Why Us
          </a>
          <a
            href="https://docs.trillet.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-2 text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light"
          >
            Docs
          </a>
          <a
            href="/blogs"
            className="w-full text-center px-4 py-2 text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light"
          >
            Blogs
          </a>
          <a
            href="https://form.typeform.com/to/qRRENIBp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-2 text-gray-900 hover:text-[#1060FF] transition-colors duration-200 font-light"
          >
            Enterprise
          </a>
          <a
            href="https://discord.com/invite/4qbWtkbT93"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-6 py-3 text-gray-900 rounded-full hover:text-[#1060FF] transition-transform transform duration-200 font-display flex items-center justify-center"
          >
            Join our Discord
            <DiscordIcon className="w-5 h-5 ml-2" />
          </a>
          <a
            href="https://app.trillet.ai"
            className="w-full text-center px-6 py-3 bg-[#1060FF] text-white rounded-full transition-transform transform hover:scale-105 hover:shadow-md duration-200 font-display flex items-center justify-center"
          >
            Login
            <ArrowRightIcon className="w-5 h-5 ml-2 text-white transition-transform duration-200" />
          </a>
        </div>
      </div>
    </nav>
  )
}

// Discord Icon Component
function DiscordIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
    </svg>
  )
}

// Arrow Right Icon Component
function ArrowRightIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
    </svg>
  )
}

// Login Icon Component (SVG you provided)
function LoginIcon(props) {
  return (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      strokeWidth="0" 
      viewBox="0 0 24 24" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"></path>
    </svg>
  )
}