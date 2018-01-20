import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import styles from './countdown.scss'

class Countdown extends Component {
    constructor() {
        super();
        this.state = {
          d: 0,
          h: 0,
          m: 0,
          s: 0
        }
    }

    componentDidMount() {
      const countdownDate = new Date("Feb 23, 2018 0:00:00").getTime();
      const x = setInterval(() => {
        const now = new Date().getTime();
        const dist = countdownDate - now;

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        this.setState({
          d,
          h,
          m,
          s
        });
      }, 1000)
    }

    render() {

        return(
        	<div className="Countdown">
                <div className="Countdown__content">
                    <h4 className="Countdown__timerHeader">Hacking begins in</h4>
                    <br/>
                    <div className="Countdown__timer">
                        <div className="Countdown__timerFlexItem">
                          <h2 className="Countdown__number">{this.state.d + 1}</h2>
                          <h1 className="Countdown__number">{this.state.d}</h1>
                          <h2 className="Countdown__number">{(this.state.d - 1) < 0 ? 0 : (this.state.d - 1)}</h2>
                        </div>
                        <div className="Countdown__timerFlexItem"><h3 className="Countdown__letter">D</h3></div>

                        <div className="Countdown__timerFlexItem">
                          <h2 className="Countdown__number">{this.state.h + 1}</h2>
                          <h1 className="Countdown__number">{this.state.h}</h1>
                          <h2 className="Countdown__number">{(this.state.h - 1) < 0 ? 23 : (this.state.h - 1)}</h2>
                        </div>
                        <div className="Countdown__timerFlexItem"><h3 className="Countdown__letter">H</h3></div>

                        <div className="Countdown__timerFlexItem">
                          <h2 className="Countdown__number">{this.state.m + 1}</h2>
                          <h1 className="Countdown__number">{this.state.m}</h1>
                          <h2 className="Countdown__number">{(this.state.m - 1) < 0 ? 59 : (this.state.m - 1)}</h2>
                        </div>
                        <div className="Countdown__timerFlexItem"><h3 className="Countdown__letter">M</h3></div>

                        <div className="Countdown__timerFlexItem">
                          <h2 className="Countdown__number">{this.state.s + 1}</h2>
                          <h1 className="Countdown__number">{this.state.s}</h1>
                          <h2 className="Countdown__number">{(this.state.s - 1) < 0 ? 59 : (this.state.s - 1)}</h2>
                        </div>
                        <div className="Countdown__timerFlexItem"><h3 className="Countdown__letter">S</h3></div>
                    </div>
                </div>
			    </div>
        )
    }
}
export default Countdown
