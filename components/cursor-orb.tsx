"use client"

import { useEffect, useState } from "react"

export default function CursorOrb() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updatePosition)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 opacity-60 blur-sm transition-all duration-100 ease-out"
      style={{
        left: position.x - 16, // Updated offset from -12 to -16 for new size
        top: position.y - 16, // Updated offset from -12 to -16 for new size
        transform: "translate3d(0, 0, 0)",
      }}
    />
  )
}
