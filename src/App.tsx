import './App.css'
import reactLogo from './assets/react.svg'
import { Decrement } from './components/Decrement'
import { Increment } from './components/Increment'
import { IncrementNew } from './components/NewIncrement'
import viteLogo from '/vite.svg'

const App = () => {
  // use individual statements like so only that component get rendered while this value changes otherwise it would render on all cases
  // it would be an exact match with context so we don't wanna do this here is an example as following:
  // const { increment } = useAppStore((state) => state)
  // in this case this component will render only when count and increment get's changed.

  // const { count, increment } = useAppStore((state) => state)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Increment />

        <IncrementNew />

        <Decrement />

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
