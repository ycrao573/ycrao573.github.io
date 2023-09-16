import React, { useEffect, useMemo } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Container } from '@mui/material';
import './styles.scss';

const Countdown: React.FC = () => {
  const { duration, initialRemainingTime } = useMemo(() => {
    const startTime = new Date('2023-09-17T00:00:00').getTime();
    const endTime = new Date('2023-10-17T00:00:00').getTime();
    const now = Date.now();
    return {
      duration: Math.floor((endTime - startTime) / 1000),
      initialRemainingTime: Math.floor((endTime - now) / 1000),
    };
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-background" />
      <div className="countdown">
        <CountdownCircleTimer
          isPlaying
          duration={duration} // Adjust the duration (in seconds) as needed
          initialRemainingTime={initialRemainingTime}
          size={160}
          colors={'#87CEFA'}
        >
          {({ remainingTime }) => renderTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

const renderTime = (time: number) => {
  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  return (
    <div className="flip-clock">
      <div className="flip-unit">
        <div className="flip-digit">{days.toString().padStart(2, '0')}</div>
      </div>
      <div className="flip-unit">
        <div className="flip-digit">{hours.toString().padStart(2, '0')}</div>
      </div>
      <br />
      <div className="flip-unit">
        <div className="flip-digit">{minutes.toString().padStart(2, '0')}</div>
      </div>
      <div className="flip-unit">
        <div className="flip-digit">{seconds.toString().padStart(2, '0')}</div>
      </div>
    </div>
  );
};
export default Countdown;
