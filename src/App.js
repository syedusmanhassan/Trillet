import './App.css';
import Navbar from './navbar';
// import Hero from "./Hero"
import HeroSection from './Hero';
import VideoSection from './VideoSection';
import Features from './Features';
import Result from './Result';
import Developer from './Developer';
import WhyUs from './WhyUs';
import Price from './Price';
import Home from './Next';

function App() {
  return (
    <main className="overflow-hidden flex min-h-screen flex-col relative bg-[#ECF1FD]">
      <Navbar/>
      <HeroSection />
      <VideoSection/>
      <Features/>
      <Result/>
      <Developer/>
      <WhyUs/>
      <Price/>
      <Home/>
    </main>
  );
}

export default App;
