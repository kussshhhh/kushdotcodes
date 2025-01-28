"use client"
import './globals.css'
import { useState, useEffect } from "react"
import { ChevronDown, Moon, Sun, Search } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(true)
  const [isElectricalOpen, setIsElectricalOpen] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-white text-slate-900'}`}>
      {/* Sidebar */}
      <aside className={`w-72 border-r ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Portfolio</h1>
          <div className="flex items-center gap-2 mb-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-700">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <div className="relative">
            <Search className={`absolute left-2 top-2.5 h-4 w-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            <input
              type="text"
              placeholder="Search page or heading..."
              className={`w-full rounded pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 ${
                isDarkMode 
                  ? 'bg-slate-800 focus:ring-slate-600' 
                  : 'bg-slate-100 focus:ring-slate-300'
              }`}
            />
          </div>
        </div>
        <nav className="px-2">
          <Link href="#about" className={`block px-2 py-1 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>
            About
          </Link>
          <Link href="#questions" className={`block px-2 py-1 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>
            Questions
          </Link>
          <div className="mt-2">
            <button
              onClick={() => setIsEngineeringOpen(!isEngineeringOpen)}
              className={`flex items-center gap-2 px-2 py-1 w-full text-left ${
                isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${isEngineeringOpen ? "rotate-0" : "-rotate-90"}`} />
              Engineering
            </button>
            {isEngineeringOpen && (
              <div className="ml-4">
                <button
                  onClick={() => setIsElectricalOpen(!isElectricalOpen)}
                  className={`flex items-center gap-2 px-2 py-1 w-full text-left ${
                    isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isElectricalOpen ? "rotate-0" : "-rotate-90"}`} />
                  Electrical Engineering
                </button>
                {isElectricalOpen && (
                  <div className="ml-4">
                    <Link href="#electrodynamics" className={`block px-2 py-1 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>
                      Electrodynamics
                    </Link>
                    <Link href="#semiconductors" className={`block px-2 py-1 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>
                      Semiconductor Electronics
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-4xl">
          <h1 className="text-2xl mb-4">Welcome to My Portfolio</h1>
          <p className={`mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            This site documents my technical efforts and shares my thoughts on various topics.
          </p>

          <section id="about" className="mb-12">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-yellow-500"></span>
              About me
            </h2>
            <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              I'm currently in my senior year, double majoring in Electrical Engineering and Computer Science.
            </p>
            <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              I'm passionate about my field of study and believe that this combination of subjects provides me with valuable tools to navigate the technological landscape.
            </p>
          </section>

          <section id="work">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-yellow-500"></span>
              Work
            </h2>
            <ul className={`list-disc list-inside space-y-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li>Currently working on software and firmware at a leading electric vehicle company.</li>
              <li>
                Previously, I was a software engineering intern at a start-up focused on smart home technology.
                <ul className="ml-6 mt-2 space-y-2">
                  <li>Developed an almost-functional hardware-in-the-loop testing framework from scratch.</li>
                  <li>Gained valuable experience in systems engineering.</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className={`w-64 p-8 border-l ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <h3 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>ON THIS PAGE</h3>
        <nav>
          <Link href="#about" className={`block text-sm mb-2 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>
            About me
          </Link>
          <Link href="#work" className={`block text-sm ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>
            Work
          </Link>
        </nav>
      </aside>
    </div>
  )
}