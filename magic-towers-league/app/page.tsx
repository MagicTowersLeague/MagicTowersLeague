"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Crown, Star, HeartIcon as Hearts } from "lucide-react"

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const packages = [
    {
      id: "ass",
      name: "Ass Paket",
      icon: <Star className="w-8 h-8 mb-4" />,
      price: "29,99€",
      features: ["Basis Ligaverwaltung", "5 Teams pro Liga", "Basis Statistiken", "Email Support"],
    },
    {
      id: "dame",
      name: "Dame Paket",
      icon: <Crown className="w-8 h-8 mb-4" />,
      price: "49,99€",
      features: [
        "Erweiterte Ligaverwaltung",
        "15 Teams pro Liga",
        "Detaillierte Statistiken",
        "Priority Support",
        "Turnierorganisation",
      ],
    },
    {
      id: "pick",
      name: "Pick Paket",
      icon: <Hearts className="w-8 h-8 mb-4" />,
      price: "39,99€",
      features: [
        "Standard Ligaverwaltung",
        "10 Teams pro Liga",
        "Erweiterte Statistiken",
        "Chat Support",
        "Basis Turnierorganisation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1E90FF] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Wählen Sie Ihr Paket</h1>

        <div className="relative h-[600px] flex items-center justify-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`absolute w-[380px] rounded-2xl backdrop-blur-sm bg-white/10 p-8 text-white 
                         border border-white/20 shadow-xl transition-all duration-500
                         hover:bg-white/20 cursor-pointer`}
              initial={{
                x: (index - 1) * 300,
                scale: 0.9,
                zIndex: index === 1 ? 2 : 1,
              }}
              animate={{
                scale: hoveredCard === pkg.id ? 1.05 : 0.9,
                zIndex: hoveredCard === pkg.id ? 3 : 1,
                x: hoveredCard ? (hoveredCard === pkg.id ? (index - 1) * 320 : (index - 1) * 280) : (index - 1) * 300,
              }}
              onHoverStart={() => setHoveredCard(pkg.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="text-center">
                {pkg.icon}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                <ul className="space-y-3 text-left mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-[#FF4500]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 px-6 rounded-lg bg-[#FF4500] hover:bg-[#1E90FF] 
                                 transition-colors duration-300 font-semibold"
                >
                  Paket auswählen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

