import { useState, useEffect } from "react";

export const LogoutTimer = ({ onHandleLogout }) => {
  const [remainingTime, setRemainingTime] = useState(300); // in seconds

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Decrease remaining time by 1 second
      setRemainingTime((prevTime) => prevTime - 1);

      // Logout the user after 1 minute
      if (remainingTime === 0) {
        onHandleLogout();
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [onHandleLogout, remainingTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <p className="logout-timer">
      You will be logged out in{" "}
      <span className="timer">{formatTime(remainingTime)}</span>
    </p>
  );
};
