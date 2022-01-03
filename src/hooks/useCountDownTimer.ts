import { useEffect, useState, useCallback } from 'react'

const useCountDownTimer = () => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0)

  useEffect(() => {
    const tick = () => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1000)
    }
    const timerInterval = setInterval(() => tick(), 1000)
    return () => {
      clearInterval(timerInterval)
    }
  }, [])

  const setSecondRemaining = useCallback(
    (timeToCount: number) => {
      setSecondsRemaining((prev) => timeToCount)
    },
    [setSecondsRemaining],
  )

  const isFinished = Boolean(secondsRemaining <= 0)
  return [secondsRemaining, setSecondRemaining, isFinished] as const
}

export default useCountDownTimer
