"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const playersData = {
  Stuttgart: ["Max Mustermann", "Lisa Schmidt", "Tom Weber"],
  Mannheim: ["Anna Müller", "Paul Becker", "Sarah Koch"],
  Karlsruhe: ["Felix Braun", "Emma Wagner", "David Schulz"],
  Calw: ["Nagold"],
  Nagold: Array(8)
    .fill(null)
    .map((_, i) => `Spieler ${i + 1}`),
}

const districts = [
  "Stuttgart",
  "Mannheim",
  "Karlsruhe",
  "Freiburg",
  "Heidelberg",
  "Ulm",
  "Heilbronn",
  "Pforzheim",
  "Reutlingen",
  "Esslingen am Neckar",
  "Ludwigsburg",
  "Tübingen",
  "Konstanz",
  "Villingen-Schwenningen",
  "Aalen",
  "Calw",
]

export default function Leagues() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [selectedSubCity, setSelectedSubCity] = useState<string | null>(null)

  const handleCityClick = (city: string) => {
    if (city === "Calw") {
      setSelectedCity(city)
      setSelectedSubCity(null)
    } else {
      setSelectedCity(city === selectedCity ? null : city)
      setSelectedSubCity(null)
    }
  }

  const handleSubCityClick = (subCity: string) => {
    setSelectedSubCity(subCity === selectedSubCity ? null : subCity)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white glow-blue">Ligen in Baden-Württemberg</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {districts.sort().map((city) => (
          <motion.div
            key={city}
            className="relative overflow-hidden rounded-lg cursor-pointer border border-[#1E90FF]/20 bg-gray-900/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCityClick(city)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#FF4500]/10"></div>
            <div className="relative p-6 text-white z-10">
              <h2 className="text-xl font-semibold mb-2 glow">{city}</h2>
              <p className="text-sm text-gray-300">Klicken für Details</p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => {
              setSelectedCity(null)
              setSelectedSubCity(null)
            }}
          >
            <motion.div
              className="bg-gray-900/90 backdrop-blur-md rounded-lg p-8 max-w-md w-full border border-[#1E90FF]/20"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-white glow-blue">{selectedCity}</h2>
              {selectedCity === "Calw" ? (
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white glow">Unterstadt:</h3>
                  <motion.div
                    className="bg-[#1E90FF]/10 border border-[#1E90FF]/20 text-white p-4 rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSubCityClick("Nagold")}
                  >
                    <h4 className="text-lg font-semibold glow">Nagold</h4>
                  </motion.div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-2 text-white glow">Registrierte Spieler:</h3>
                  <ul className="space-y-2">
                    {playersData[selectedCity]?.map((player, index) => (
                      <li key={index} className="text-gray-300 glow">
                        {player}
                      </li>
                    )) || <li className="text-gray-300">Keine Spieler registriert</li>}
                  </ul>
                </>
              )}
              <button
                className="mt-6 px-4 py-2 bg-[#FF4500]/20 border border-[#FF4500]/30 text-white rounded hover:bg-[#FF4500]/30 transition-colors glow-orange"
                onClick={() => {
                  setSelectedCity(null)
                  setSelectedSubCity(null)
                }}
              >
                Schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedSubCity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSubCity(null)}
          >
            <motion.div
              className="bg-gray-900/90 backdrop-blur-md rounded-lg p-8 max-w-md w-full border border-[#1E90FF]/20"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-white glow-blue">{selectedSubCity}</h2>
              <h3 className="text-xl font-semibold mb-2 text-white glow">Spielerplätze:</h3>
              <div className="grid grid-cols-2 gap-4">
                {Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 border border-[#1E90FF]/20 p-4 rounded-lg backdrop-blur-sm"
                    >
                      <p className="font-semibold text-white glow">Platz {index + 1}</p>
                      <p className="text-gray-300">{playersData[selectedSubCity][index] || "Frei"}</p>
                    </div>
                  ))}
              </div>
              <button
                className="mt-6 px-4 py-2 bg-[#FF4500]/20 border border-[#FF4500]/30 text-white rounded hover:bg-[#FF4500]/30 transition-colors glow-orange"
                onClick={() => setSelectedSubCity(null)}
              >
                Schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

