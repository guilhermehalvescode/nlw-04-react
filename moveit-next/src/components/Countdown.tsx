import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css'

// Icons 
import { PlayArrow, Close, CheckCircle } from '@material-ui/icons/';

import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFineshed, 
    isActive, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext);
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFineshed ? (
        <button
          disabled
          type="button"
          className={styles.countdownButton}
          onClick={resetCountdown}
        >
         <span>Ciclo encerrado</span><CheckCircle style={{color: "var(--green)"}}/>
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                <span> Abandonar ciclo</span><Close /> 
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  <span>Iniciar um ciclo</span><PlayArrow />
                </button>
              )}
          </>
        )}


    </div>
  );
}