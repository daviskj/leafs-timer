
import "./App.css";
import React, {useState, useEffect} from "react";
import Clock from "./components/clock/Clock.js";
import Footer from "./components/footer/Footer.js";
import "./components/footer/Footer.css"


const App = () => {
const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 2, 1967 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = now - countDownDate;

      

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        

        clearInterval(interval.current);
      } else {
        
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  

  return <div className="App">
    <Clock 
    timerDays = {timerDays}
    timerHours = {timerHours}
    timerMinutes = {timerMinutes}
    timerSeconds = {timerSeconds} />
      
    <Footer />
  </div>;
}

export default App;
