import { useState, useEffect } from 'react'

export const useLeast = (least: number) => {
  if (least <= 0) {
    throw new Error('least must greater than 0')
  }
  const [count, setCount] = useState(0)
  const [isReach, setReachState] = useState(false)
  const increase = () => setCount(count + 1)
  useEffect(() => {
    if (count >= least && !isReach) setReachState(true)
  }, [count])

  return {
    increase,
    isReach
  }
}
