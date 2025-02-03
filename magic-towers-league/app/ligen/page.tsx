"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const districts = [
  "Alb-Donau-Kreis",
  "Baden-Baden",
  "Biberach",
  "Bodenseekreis",
  "Böblingen",
  "Breisgau-Hochschwarzwald",
  "Calw",
  "Emmendingen",
  "Enzkreis",
  "Esslingen",
  "Freiburg im Breisgau",
  "Freudenstadt",
  "Göppingen",
  "Heidelberg",
  "Heidenheim",
  "Heilbronn",
  "Hohenlohekreis",
  "Karlsruhe",
  "Konstanz",
  "Lörrach",
  "Ludwigsburg",
  "Main-Tauber-Kreis",
  "Mannheim",
  "Neckar-Odenwald-Kreis",
  "Ortenaukreis",
  "Ostalbkreis",
  "Pforzheim",
  "Rastatt",
  "Ravensburg",
  "Rems-Murr-Kreis",
  "Reutlingen",
  "Rhein-Neckar-Kreis",
  "Rottweil",
  "Schwäbisch Hall",
  "Schwarzwald-Baar-Kreis",
  "Sigmaringen",
  "Stuttgart",
  "Tübingen",
  "Tuttlingen",
  "Ulm",
  "Waldshut",
  "Zollernalbkreis",
]

export default function Ligen() {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center glow-blue">Ligen in Baden-Württemberg</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {districts.map((district, index) => (
          <motion.div
            key={district}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Link href={`/ligen/${district.toLowerCase().replace(/ /g, "-")}`}>
              <div
                className={`p-4 rounded-lg border ${
                  district === "Calw"
                    ? "border-[#1E90FF] text-[#1E90FF] glow-blue"
                    : "border-gray-700 text-gray-400 hover:border-[#1E90FF] hover:text-white"
                } transition-all duration-300`}
              >
                <h2 className="text-lg font-semibold">{district}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

