"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Spielberichtsbogen from "@/components/Spielberichtsbogen"

// Mock data for demonstration
const games = [
  { id: 1, date: "2023-06-01", homeTeam: "Calw", awayTeam: "Stuttgart", spieltag: 1 },
  { id: 2, date: "2023-06-08", homeTeam: "Karlsruhe", awayTeam: "Heidelberg", spieltag: 2 },
  { id: 3, date: "2023-06-15", homeTeam: "Mannheim", awayTeam: "Freiburg", spieltag: 3 },
]

export default function Spielplan() {
  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center glow-blue">Spielplan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <motion.div
            key={game.id}
            className="p-4 border border-[#1E90FF]/20 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2 glow-blue">Spieltag {game.spieltag}</h2>
            <p>Datum: {game.date}</p>
            <p>
              {game.homeTeam} vs {game.awayTeam}
            </p>
            <button
              onClick={() => setSelectedGame(game)}
              className="mt-4 px-4 py-2 bg-[#1E90FF] text-white rounded hover:bg-[#1E90FF]/80 transition-colors"
            >
              Spielbericht erstellen
            </button>
          </motion.div>
        ))}
      </div>
      {selectedGame && <Spielberichtsbogen game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </div>
  )
}

