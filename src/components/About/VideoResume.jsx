import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipForward,
  SkipBack,
  Loader2,
  PictureInPicture2
} from 'lucide-react';

const VideoResume = () => {
  // Refs
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);
  const containerRef = useRef(null);

  // State
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [remainingTime, setRemainingTime] = useState('0:00');

  // Video data
  const videos = [
    {
      id: 1,
      title: 'Professional Introduction',
      src: '/videos/TestProfile1.mp4',
      poster: '/images/ProfilePic1.jpg'
    },
    {
      id: 2,
      title: 'Skills Showcase',
      src: '/videos/TestProfile2.mp4',
      poster: '/images/ProfilePic1.jpg'
    },
    {
      id: 3,
      title: 'Services Showcase',
      src: '/videos/TestProfile2.mp4',
      poster: '/images/ProfilePic1.jpg'
    },
    {
      id: 4,
      title: 'Projects Showcase',
      src: '/videos/TestProfile2.mp4',
      poster: '/images/ProfilePic1.jpg'
    },
    {
      id: 5,
      title: 'Experience Showcase',
      src: '/videos/TestProfile2.mp4',
      poster: '/images/ProfilePic1.jpg'
    },
    {
      id: 6,
      title: 'Education and Training Showcase',
      src: '/videos/TestProfile2.mp4',
      poster: '/images/ProfilePic1.jpg'
    },
  ];

  const currentVideo = videos[currentVideoIndex];

  // Helper functions
  const formatTime = useCallback((seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }, []);

  // Core functionality
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;

    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(e => {
          console.error('Error playing video:', e);
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted && videoRef.current.volume === 0) {
        videoRef.current.volume = 0.5;
        setVolume(0.5);
      }
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      // Use the video container for fullscreen instead of the outer container
      const videoContainer = videoRef.current?.parentElement;
      if (videoContainer) {
        videoContainer.requestFullscreen().catch(err => {
          console.error('Error enabling fullscreen:', err.message);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  /* const togglePictureInPicture = useCallback(async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await videoRef.current?.requestPictureInPicture();
      }
    } catch (error) {
      console.error('Picture-in-Picture error:', error);
    }
  }, []); */

  // Navigation
  const goToNextVideo = useCallback(() => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    setIsPlaying(true);
  }, [currentVideoIndex, videos.length]);

  const goToPrevVideo = useCallback(() => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevIndex);
    setIsPlaying(true);
  }, [currentVideoIndex, videos.length]);

  // Video controls
  const seekRelative = useCallback((seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(
        videoRef.current.currentTime + seconds,
        videoRef.current.duration
      ));
    }
  }, []);

  const handleSeek = useCallback((e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
      setProgress(pos * 100);
    }
  }, []);

  const adjustVolume = useCallback((delta) => {
    if (videoRef.current) {
      let newVolume = Math.min(1, Math.max(0, videoRef.current.volume + delta));
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  }, []);

  // Event handlers
  const handleMouseMove = useCallback(() => {
    if (!showControls) {
      setShowControls(true);
    }
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }
  }, [showControls]);

  // Effects
  useEffect(() => {
    setIsLoading(true);
    setShowControls(true);
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      if (isPlaying) {
        video.play().catch(e => {
          console.error('Error auto-playing video:', e);
          setIsPlaying(false);
        });
      }
    };

    const handleEnded = () => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(nextIndex);
    };

    const handleTimeUpdate = () => {
      if (!isSeeking) {
        setProgress((video.currentTime / video.duration) * 100);
        setRemainingTime(formatTime(video.duration - video.currentTime));
      }
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      setRemainingTime(formatTime(video.duration));
    };

    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);
    const handleVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('volumechange', handleVolumeChange);
    video.addEventListener('canplay', handleCanPlay);
    video.load(); // This will trigger loading of the new source

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('volumechange', handleVolumeChange);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentVideoIndex, isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const hideControls = () => {
      if (showControls) {
        controlsTimeout.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
    };

    hideControls();
    return () => {
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    };
  }, [isPlaying, showControls]);

  useEffect(() => {

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!containerRef.current) return;

      if (document.activeElement === containerRef.current ||
        containerRef.current.contains(document.activeElement)) {
        switch (e.key.toLowerCase()) {
          case ' ':
          case 'k':
            e.preventDefault();
            togglePlay();
            break;
          case 'm':
            e.preventDefault();
            toggleMute();
            break;
          case 'arrowleft':
            e.preventDefault();
            seekRelative(-5);
            break;
          case 'arrowright':
            e.preventDefault();
            seekRelative(5);
            break;
          case 'arrowup':
            e.preventDefault();
            adjustVolume(0.1);
            break;
          case 'arrowdown':
            e.preventDefault();
            adjustVolume(-0.1);
            break;
          case 'f':
            e.preventDefault();
            toggleFullscreen();
            break;
          case 'escape':
            if (document.fullscreenElement) {
              document.exitFullscreen();
            }
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleMute, toggleFullscreen, seekRelative, adjustVolume]);

  return (

    <div className="p-4 md:p-8">

      <div className="relative w-full max-w-4xl mx-auto">

        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <span className="font-medium">Note:</span> This video intro page is currently in progress and may contain AI-generated content. The images and information presented in the videos might not be 100% accurate.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={containerRef}
          className="relative group overflow-hidden"
          onDoubleClick={toggleFullscreen}
        >
          <video
            ref={videoRef}
            key={currentVideo.id}
            className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            muted={isMuted}
            poster={currentVideo.poster}
            preload="metadata"
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="animate-pulse flex flex-col items-center">
                <Loader2 className="h-10 w-10 text-blue-400 animate-spin mb-2" />
                <span className="text-sm text-white/80">Loading video...</span>
              </div>
            </div>
          )}

          {!isPlaying && showControls && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="group/playbutton bg-black/40 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:bg-black/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                aria-label="Play video"
              >
                <Play
                  size={56}
                  className="text-white/90 group-hover/playbutton:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          )}


          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 transition-all duration-300 ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
          >
            <div
              className="w-full h-1.5 bg-gray-700 rounded-full mb-3 cursor-pointer group/progress"
              onClick={handleSeek}
              onMouseMove={(e) => {
                if (videoRef.current) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  const time = pos * videoRef.current.duration;
                  setRemainingTime(`-${formatTime(time)}`);
                }
              }}
            >
              <div className="relative h-full w-full">
                <div
                  className="absolute h-full bg-blue-600 rounded-full group-hover/progress:bg-gray-500 transition-colors"
                  style={{ width: '100%' }}
                ></div>
                <div
                  className="absolute h-full bg-red-500 rounded-full group-hover:bg-blue-400 transition-colors"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 -top-1 h-3 w-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePlay}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause size={20} className="text-white" />
                  ) : (
                    <Play size={20} className="text-white ml-0.5" />
                  )}
                </button>

                <div className="relative group/volume">
                  <button
                    onClick={toggleMute}
                    className="text-white/80 hover:text-white p-1.5 rounded-full transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    onMouseEnter={() => setShowVolumeSlider(true)}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX size={20} />
                    ) : volume < 0.5 ? (
                      <Volume2 size={20} />
                    ) : (
                      <Volume2 size={20} />
                    )}
                  </button>

                  <div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-32 bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-gray-700 transition-all duration-200 origin-bottom ${showVolumeSlider ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    onMouseLeave={() => setShowVolumeSlider(false)}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => {
                        const newVolume = parseFloat(e.target.value);
                        if (videoRef.current) {
                          videoRef.current.volume = newVolume;
                          videoRef.current.muted = newVolume === 0;
                          setVolume(newVolume);
                          setIsMuted(newVolume === 0);
                        }
                      }}
                      className="w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    />
                  </div>
                </div>

                <div className="text-sm text-white/80 font-mono flex items-center ml-1">
                  <span>{formatTime(videoRef.current?.currentTime || 0)}</span>
                  <span className="mx-1 text-white/50">/</span>
                  <span className="text-white/60">{remainingTime}</span>
                </div>
              </div>

              

              <div className="flex items-center space-x-1">
                <button
                  onClick={goToPrevVideo}
                  className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Previous video"
                >
                  <SkipBack size={18} />
                </button>

                <button
                  onClick={goToNextVideo}
                  className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Next video"
                >
                  <SkipForward size={18} />
                </button>



                <button
                  onClick={toggleFullscreen}
                  className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? (
                    <Maximize size={18} className="transform rotate-180" />
                  ) : (
                    <Maximize size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {showControls && (
            <div className="absolute top-4 right-4 bg-black/70 text-white/80 text-xs px-2 py-1 rounded-md backdrop-blur-sm">
               <div className="flex-1 px-4">
                <h3 className="text-sm font-medium text-white truncate">
                  {currentVideo.title} • {currentVideoIndex + 1} of {videos.length}
                </h3>
              </div>
            </div>
            
          )}
        </div>


        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {videos.map((video, index) => {
            const isActive = index === currentVideoIndex;
            const buttonColors = [
              'from-blue-500 to-blue-600',
              'from-green-500 to-green-600',
              'from-purple-500 to-purple-600',
              'from-pink-500 to-pink-600',
              'from-yellow-500 to-yellow-600',
              'from-cyan-500 to-cyan-600'
            ][index % 6]; // Cycle through colors if you have more than 6 videos

            return (
              <button
                key={video.id}
                onClick={() => {
                  if (index !== currentVideoIndex) {
                    setCurrentVideoIndex(index);
                    setIsPlaying(true);
                  }
                }}
                className={`
          group relative h-14 rounded-lg overflow-hidden transition-all duration-200
          ${isActive
                    ? 'ring-2 ring-offset-2 ring-blue-500 transform scale-[1.02]'
                    : 'hover:ring-1 hover:ring-white/20 hover:scale-[1.02]'
                  }
          bg-gradient-to-r ${buttonColors} text-white
          flex items-center justify-center
          font-medium text-sm
          shadow-md hover:shadow-lg
          transform hover:-translate-y-0.5
          transition-all duration-200
        `}
              >
                <span className="relative z-10 px-2 text-center">
                  {video.title}
                </span>
                {isActive && isPlaying ? (
                  <Pause
                    size={14}
                    className="absolute right-2 text-white/80"
                  />
                ) : (
                  <Play
                    size={14}
                    className="absolute right-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Video</h3>
          <p className="text-gray-700 mb-4">
            In this video, I share my professional journey, key achievements, and what drives me in my career.
            You'll get insights into my technical expertise and problem-solving approach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Key Highlights:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professional background and expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Key projects and achievements</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Technical Skills:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Software Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Problem Solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default VideoResume;