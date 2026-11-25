'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  useEffect(() => {
    // Follow the OS setting unless the visitor picked a theme themselves
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const getSaved = () => {
      try {
        return localStorage.getItem('theme')
      } catch {
        return null
      }
    }
    const saved = getSaved()
    const shouldBeDark = saved ? saved === 'dark' : media.matches

    updateTheme(shouldBeDark)

    const timeoutId = setTimeout(() => {
      setIsDark(shouldBeDark)
      setMounted(true)
    }, 0)

    // Track OS changes live while there's no saved choice
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (getSaved()) return
      setIsDark(event.matches)
      updateTheme(event.matches)
    }
    media.addEventListener('change', onSystemChange)

    return () => {
      clearTimeout(timeoutId)
      media.removeEventListener('change', onSystemChange)
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    try {
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    } catch {
      // Storage unavailable (private mode): the choice lasts for this visit
    }
    updateTheme(newIsDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
