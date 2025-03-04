import { useState, type ReactNode } from 'react'
import { useThemeContext } from '@/theme/ThemeProvider'
import { FiSun, FiMoon } from 'react-icons/fi'

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
    <div className="min-h-screen bg-gray-50 px-4 py-6 text-gray-900 sm:p-8 dark:bg-gray-950 dark:text-white">
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
              className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Count is: {count}
            </button>

            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {isDarkMode ? (
                <>
                  <FiSun /> Light
                </>
              ) : (
                <>
                  <FiMoon /> Dark
                </>
              )}
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

        <footer className="text-center text-sm text-gray-500 sm:text-base dark:text-gray-400">
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
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              github.com/m6io/m6-react-starter
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
