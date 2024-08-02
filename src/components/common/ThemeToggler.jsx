// app/components/ThemeSwitch.tsx
'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark")
    }
  }, [resolvedTheme])

  if (!mounted) {
    return (
      <Button variant="ghost">
        <Sun />
      </Button>
    )
  }

  return (
    <Button variant="ghost" onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
