import { useAppStore } from '../stores/app'
import TextComponent from './TextComponent'

export const Increment = () => {
  const increment = useAppStore((state) => state.increment)
  const asyncIncrement = useAppStore((state) => state.incrementAsync)
  const count = useAppStore((state) => state.count)
  const asyncCount = useAppStore((state) => state.asyncCount)


  return (
    <div className="card">
      <button onClick={increment}>
        count is {count}
      </button>

      <button onClick={asyncIncrement}>
        async count is {asyncCount}
      </button>

      <TextComponent />
    </div>
  )
}
