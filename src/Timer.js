import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>Tempo trascorso: {seconds} secondi</p>
      <button onClick={toggleTimer}>{isActive ? 'Pausa' : 'Avvia'}</button>
      <button onClick={resetTimer}>Azzera</button>
    </div>
  );
}

export default Timer;
