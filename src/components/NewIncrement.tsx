import { useAppStore } from '../stores/app'

export const IncrementNew = () => {
  const incrementNew = useAppStore((state) => state.incrementNew)
  const newCount = useAppStore((state) => state.newCount)

  return (
    <div className="card">
      <button onClick={incrementNew}>
        New count is {newCount}
      </button>
    </div>
  )
}
