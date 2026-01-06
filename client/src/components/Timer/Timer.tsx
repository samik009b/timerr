import React, { useState, useEffect, useRef } from "react";

interface TimerProps {
  onStop?: (totalSeconds: number) => void;
}

const Timer: React.FC<TimerProps> = ({ onStop }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const toggle = () => {
    if (isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    if (onStop) onStop(seconds);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (secs: number): string => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-5xl md:text-[80px] m-12.5">{formatTime(seconds)}</p>
      <ul className="menu menu-horizontal font-semibold text-center text-base">
        <li>
          <button onClick={toggle}>{isRunning ? "Pause" : "Start"}</button>
        </li>
        <li>
          <button onClick={stop}>Stop</button>
        </li>
        <li>
          <button onClick={reset}>Reset</button>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Timer;
