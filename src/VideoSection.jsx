import React, { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);
  
  // Sample video URLs - you can replace these with your actual video sources
  const videoOptions = [
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Select a random video when playing
        const randomVideo = videoOptions[Math.floor(Math.random() * videoOptions.length)];
        videoRef.current.src = randomVideo;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const seekTime = (clickPosition / progressBarWidth) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="video-trillet" className="relative z-10">
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#ecf1fd] bg-opacity-0 overflow-hidden"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] font-display font-semibold text-dark">
              A Video is Worth a Thousand Words
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-[1.6] font-display text-gray-600 max-w-3xl mx-auto">
              Explore how Trillet AI combines cutting-edge technology with a human touch to transform customer interactions and drive innovative business growth.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]"
              style={{
                boxShadow: '0 20px 80px -20px rgba(255, 255, 255, 1)',
                aspectRatio: '16/9'
              }}
            >
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/Images/thumbnail.png"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onClick={handlePlayPause}
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay - only shows when video is not playing */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center z-10"
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <button
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
                      aria-label="Play video"
                      type="button"
                      onClick={handlePlayPause}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                  </div>
                )}
                
                {/* Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 z-20">
                  <div 
                    className="w-full h-1.5 bg-white/30 rounded-full mb-4 cursor-pointer relative overflow-hidden"
                    onClick={handleProgressClick}
                  >
                    <div 
                      className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-100 ease-out" 
                      style={{width: `${progress}%`}}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button 
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors hover:bg-white/30" 
                        aria-label={isPlaying ? "Pause" : "Play"} 
                        type="button"
                        onClick={handlePlayPause}
                      >
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                        )}
                      </button>
                      <div className="text-white text-sm font-medium">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors hover:bg-white/30" aria-label="Mute" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors hover:bg-white/30" aria-label="Enter fullscreen" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VideoSection;