import React, { Fragment } from "react";
import './Clock.css';



const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <Fragment>
            <div className="timer-container">
                <div className="timer">
                    <h3>Time passed since the Toronto Maple Leafs last won the Stanley Cup on May 2nd, 1967:</h3>

                    <div className="clock">
                    <span> 
                        <div className="timer-box">
                            <p>{timerDays}</p>
                            <small>Days</small>
                        </div>
                       </span>

                            <span>
                        <div className="timer-box">
                            <p>{timerHours}</p>
                            <small>Hours</small>
                        </div>{" "}
                    </span>

                        <span>
                        <div className="timer-box">
                            <p>{timerMinutes}</p>
                            <small>Minutes</small>
                        </div>{" "}
                            </span>

                        <span>
                        <div className="timer-box">
                            <p>{timerSeconds}</p>
                            <small>Seconds</small>
                        </div>
                            </span>
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
};

export default Clock;