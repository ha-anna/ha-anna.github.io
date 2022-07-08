import React from "react";
import { useStopwatch } from 'react-timer-hook';

export default function Stopwatch() {
  const {
    seconds,
    minutes,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  return (
    <>
      <span>{minutes}</span>:<span>{seconds}</span>
      <br />
      <button className="stopwatch-btn" onClick={start}>Start</button>
      <button className="stopwatch-btn" onClick={pause}>Pause</button>
      <button className="stopwatch-btn" onClick={reset}>Reset</button>
    </>
  );
}