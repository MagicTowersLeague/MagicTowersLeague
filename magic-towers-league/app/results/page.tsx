"use client"

import { useState } from "react"

type Result = {
  id: number
  homeTeam: string
  awayTeam: string
  homeScore: number | null
  awayScore: number | null
  date: string
}

const initialResults: Result[] = [
  { id: 1, homeTeam: "Team A", awayTeam: "Team B", homeScore: null, awayScore: null, date: "2023-06-01" },
  { id: 2, homeTeam: "Team C", awayTeam: "Team D", homeScore: null, awayScore: null, date: "2023-06-02" },
  { id: 3, homeTeam: "Team E", awayTeam: "Team F", homeScore: null, awayScore: null, date: "2023-06-03" },
]

export default function Results() {
  const [results, setResults] = useState<Result[]>(initialResults)

  const handleScoreChange = (id: number, team: "home" | "away", score: number) => {
    setResults((prevResults) =>
      prevResults.map((result) =>
        result.id === id ? { ...result, [team === "home" ? "homeScore" : "awayScore"]: score } : result,
      ),
    )
  }

  const handleSave = () => {
    // Hier würden Sie normalerweise die Ergebnisse an Ihr Backend senden
    console.log("Gespeicherte Ergebnisse:", results)
    alert("Ergebnisse gespeichert!")
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#1E90FF]">Ergebnisse eintragen</h1>
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-[#1E90FF] text-white">
            <th className="border p-2">Datum</th>
            <th className="border p-2">Heimteam</th>
            <th className="border p-2">Ergebnis</th>
            <th className="border p-2">Auswärtsteam</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id} className="even:bg-gray-100">
              <td className="border p-2">{result.date}</td>
              <td className="border p-2">{result.homeTeam}</td>
              <td className="border p-2 flex justify-center items-center space-x-2">
                <input
                  type="number"
                  min="0"
                  value={result.homeScore ?? ""}
                  onChange={(e) => handleScoreChange(result.id, "home", Number.parseInt(e.target.value))}
                  className="w-12 text-center border rounded p-1"
                />
                <span>:</span>
                <input
                  type="number"
                  min="0"
                  value={result.awayScore ?? ""}
                  onChange={(e) => handleScoreChange(result.id, "away", Number.parseInt(e.target.value))}
                  className="w-12 text-center border rounded p-1"
                />
              </td>
              <td className="border p-2">{result.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSave}
        className="bg-[#FF4500] text-white px-4 py-2 rounded hover:bg-[#000000] transition-colors"
      >
        Ergebnisse speichern
      </button>
    </div>
  )
}

