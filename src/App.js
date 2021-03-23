import React from 'react';
import './App.css';

function App() {
  const [time, setTime] = React.useState(600);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
      let interval = null;

      if (timerOn) {
          interval = setInterval(() => {
            setTime(prevTime => prevTime + 1)
          }, 1000);
      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
  }, [timerOn])

  return (
    <div className="App">
        <div id="stopwatch">
            <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span>
            <span>{("0" + Math.floor(time / 60) % 60).slice(-2)}:</span>
            <span>{("0" + Math.floor((time % 60))).slice(-2)}</span>
        </div>
        <div id='buttons'>
            {!timerOn && (
                <button onClick={() => setTimerOn(true)}>Start</button>
            )}
            {timerOn && (
                <button onClick={() => {setTimerOn(false); setTime(0)}}>Stop</button>
            )}
            {timerOn && (
                <button onDoubleClick={() => setTimerOn(false)}>Wait</button>
            )}
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    </div>
  );
}

export default App;
