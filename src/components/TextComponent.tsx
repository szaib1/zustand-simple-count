import { memo } from "react"
import { useAppStore } from "../stores/app"

const TextComponent = () => {
  const asyncCount = useAppStore((state) => state.asyncCount)

  return (
    <div>It would re-render only when the Async count gets changed
      {asyncCount}
    </div>
  )
}

export default memo(TextComponent)
