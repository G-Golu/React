import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Initial time is 4 minutes (4:00)
  const initialTime = 4 * 60; // 4 minutes in seconds
  const [time, setTime] = useState(initialTime);

  // Function to format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (time === 0) return; // Stop the timer if time reaches 0

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup interval on component unmount or when time reaches 0
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default CountdownTimer;
