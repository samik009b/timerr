import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faArrowRotateLeft, faSquare } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex flex-col items-center hover:shadow-lg duration-300 shadow-gray-900 rounded-2xl md:w-150">
      <p className="text-2xl md:text-5xl font-bold uppercase m-8">Stopwatch</p>
      <p className="text-xl md:text-[50px] mb-3">{formatTime(seconds)}</p>
      <ul className="menu menu-horizontal font-semibold text-center text-base">
        <li>
          <button onClick={toggle}>
            {isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
        </li>
        <li>
          <button onClick={stop}>
            <FontAwesomeIcon icon={faSquare} />
          </button>
        </li>
        <li>
          <button onClick={reset}>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
          </button>
        </li>
      </ul>
      <div className="text-center flex justify-between m-3 w-48 md:w-100 ">
        <p>study 8h</p>
        <p>sprints 3</p>
      </div>
    </div>
  );
};

export default Timer;
