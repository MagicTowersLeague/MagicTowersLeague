"use client"

import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function Login() {
  const [loginMethod, setLoginMethod] = useState<"email" | "google" | "phone" | null>(null)

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]">
      <motion.div
        className="bg-gray-900/80 p-8 rounded-lg shadow-lg max-w-md w-full border border-[#1E90FF]/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white glow-blue">Login</h2>
        {!loginMethod ? (
          <div className="space-y-4">
            <button
              onClick={() => setLoginMethod("email")}
              className="w-full py-2 px-4 bg-[#1E90FF]/20 hover:bg-[#1E90FF]/30 text-white rounded transition-colors glow-blue flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Mit Email anmelden
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 p-3 rounded-lg transition-colors"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-google-logo-144-2xOn8F4YNVSGcn2goBWFBEE4IaanIG.png"
                alt="Google"
                width={20}
                height={20}
                className="object-contain"
              />
              Mit Google anmelden
            </button>
            <button
              onClick={() => setLoginMethod("phone")}
              className="w-full py-2 px-4 bg-[#1E90FF]/20 hover:bg-[#1E90FF]/30 text-white rounded transition-colors glow-blue flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Mit Telefonnummer anmelden
            </button>
          </div>
        ) : (
          <form className="space-y-4">
            {loginMethod === "email" && (
              <>
                <input type="email" placeholder="Email" className="w-full p-2 bg-gray-800 text-white rounded" />
                <input type="password" placeholder="Passwort" className="w-full p-2 bg-gray-800 text-white rounded" />
              </>
            )}
            {loginMethod === "phone" && (
              <input type="tel" placeholder="Telefonnummer" className="w-full p-2 bg-gray-800 text-white rounded" />
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#1E90FF] hover:bg-[#1E90FF]/80 text-white rounded transition-colors glow-blue"
            >
              Anmelden
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod(null)}
              className="w-full py-2 px-4 bg-transparent hover:bg-gray-800 text-white rounded transition-colors"
            >
              Zurück
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}

