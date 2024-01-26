import { useAppStore } from '../stores/app'

export const Decrement = () => {
  const decrement = useAppStore((state) => state.decrement)
  const count = useAppStore((state) => state.count)

  return (
    <div className="card">
      <button onClick={decrement} disabled={count === 0}>
        after decrement count is {count}
      </button>
    </div>
  )
}
