import React, { useState, useEffect } from "react";
const useCountdown = () => {
  const [seconds, setSeconds] = useState(59);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) return 1;
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return { seconds };
};

export default useCountdown;
