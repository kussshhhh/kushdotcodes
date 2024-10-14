'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"

export function RetroMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="p-4 bg-white">
      <div className="w-64 h-64 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
        <Button
          onClick={togglePlayPause}
          className="w-32 h-32 rounded-full flex items-center justify-center bg-white border-2 border-black hover:bg-gray-100 transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={isPlaying 
                ? "M6 4h4v16H6V4zm8 0h4v16h-4V4z" 
                : "M6 4l12 8-12 8V4z"}
              fill="black"
            />
          </svg>
        </Button>
        <audio ref={audioRef} loop>
          <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  )
}