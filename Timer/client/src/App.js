import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);     
  const [isActive, setIsActive] = useState(false);  
  const [isStarted, setIsStarted] = useState(false);  

  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); 
  }, [isActive]);

  
  const startTimer = () => {
    setIsActive(true);
    setIsStarted(true); 
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  
  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
    setIsStarted(false);  
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.timerDisplay}>React Timer</h1>
      <h1 style={styles.timerDisplay} >Time:{time}s</h1>
      <div style={styles.buttonContainer}>
        <button 
          onClick={startTimer} 
          style={styles.button} 
          disabled={isStarted && isActive} 
        >
          Start
        </button>

        <button 
          onClick={pauseTimer} 
          style={styles.button} 
          disabled={!isStarted || !isActive} 
        >
          Pause
        </button>

        <button onClick={resetTimer} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  timerDisplay: {
    fontSize: '30px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px 25px',
    fontSize: '18px',
    cursor: 'pointer',
    background :'green',
    borderRadius:'3px',
    color: 'white',
  },
};

export default Timer;
