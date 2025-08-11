import { useState, useEffect } from 'react'

export const useTheme = (storageKey = 'm6-ui-theme') => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (document.documentElement.classList.contains('dark')) return true

    return localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey) === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)

    localStorage.setItem(storageKey, isDarkMode.toString())
  }, [isDarkMode, storageKey])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return { isDarkMode, toggleDarkMode }
}
