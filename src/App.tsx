import { useState, type ReactNode } from 'react'
import { useThemeContext } from '@/theme/ThemeProvider'
import { FiSun, FiMoon, FiYoutube, FiGithub } from 'react-icons/fi'

interface FeatureProps {
  title: ReactNode
  description: string
  codeExample: string
}

export const Feature = ({
  title,
  description,
  codeExample,
}: FeatureProps): ReactNode => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50 sm:p-6 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800/80">
    <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
      {title}
    </h3>
    <p className="mb-4 text-sm text-gray-600 sm:text-base dark:text-gray-300">
      {description}
    </p>
    <pre className="overflow-x-auto rounded bg-gray-100 p-2 text-xs break-words whitespace-pre-wrap text-gray-800 sm:p-3 sm:text-sm dark:bg-gray-900 dark:text-gray-200">
      <code>{codeExample}</code>
    </pre>
  </div>
)

function App(): ReactNode {
  const [count, setCount] = useState(0)
  const { isDarkMode, toggleDarkMode } = useThemeContext()

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <header className="sticky top-0 z-10 bg-white shadow-sm dark:border-b dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src="/m6.svg"
              alt="M6 Logo"
              className="h-8 w-auto"
              aria-hidden="true"
            ></img>
            <span className="font-bold text-gray-900 dark:text-white">
              m6io
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@m6io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none active:bg-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
              aria-label="Visit m6io on YouTube"
            >
              <FiYoutube className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/m6io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none active:bg-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
              aria-label="Visit m6io on GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <span className="h-6 w-px bg-gray-300 dark:bg-gray-700"></span>
            <button
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none active:bg-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <FiSun aria-hidden="true" />
              ) : (
                <FiMoon aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow px-4 py-6 sm:p-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center sm:mb-12">
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
              M6 React Starter
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl dark:text-gray-300">
              Enhanced Vite + React + TypeScript template
            </p>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={() => setCount((c) => c + 1)}
                className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
                aria-label={`Increment count, current count is ${count}`}
              >
                Count is: {count}
              </button>
            </div>
          </div>

          <div className="mb-8 grid gap-4 sm:mb-12 sm:gap-6">
            <Feature
              title={<>🌗 Theme Management</>}
              description="Built-in dark mode support with system preference detection, persistent storage, and TypeScript-ready hooks and context."
              codeExample={`// 1. Wrap your app with ThemeProvider
import { ThemeProvider } from './ThemeProvider'

<ThemeProvider>
  <App />
</ThemeProvider>

// 2. Use the theme hook in any component
import { useThemeContext } from './ThemeProvider'

function MyComponent() {
  const { isDarkMode, toggleDarkMode } = useThemeContext()
  
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}`}
            />

            <Feature
              title={<>🎨 Tailwind CSS Integration</>}
              description="Pre-configured with Tailwind CSS and additional plugins for typography and forms. Just start using Tailwind classes in your components."
              codeExample={`// Example component with Tailwind classes:
<div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
  <h2 className="text-xl font-bold">
    Hello World
  </h2>
</div>`}
            />

            <Feature
              title={<>🛣️ React Router Ready</>}
              description="Routing capabilities ready to use with react-router-dom v7"
              codeExample={`// Basic routing setup:
const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
)`}
            />

            <Feature
              title={<>📦 Zustand State Management</>}
              description="Simple and fast state management with Zustand"
              codeExample={`// Basic store example:
const useStore = create((set) => ({
  count: 0,
  increment: () => set(state => ({ 
    count: state.count + 1 
  }))
}))`}
            />

            <Feature
              title={<>💅 React Icons v5.5</>}
              description="Access to thousands of icons from popular icon libraries, all in one place. Includes Material, FontAwesome, Feather, and many more."
              codeExample={`// Import icons from any collection:
import { FiSun, FiMoon } from 'react-icons/fi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'

// Use them in your components:
<button className="flex items-center gap-2">
  <FiSun className="w-5 h-5" />
  Light Mode
</button>`}
            />
          </div>
        </div>
      </main>

      <footer className="px-4 py-6 sm:py-8">
        <div className="mx-auto max-w-3xl text-center text-sm text-gray-500 sm:text-base dark:text-gray-400">
          <p>
            Ready to start building? Edit{' '}
            <code className="text-blue-600 dark:text-blue-400">
              src/App.tsx
            </code>
          </p>
          <p className="mt-2">
            Clone this template at{' '}
            <a
              href="https://github.com/m6io/m6-react-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-600 hover:underline focus:rounded focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-blue-400 dark:hover:underline"
              aria-label="Visit m6-react-starter on GitHub"
            >
              github.com/m6io/m6-react-starter
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
