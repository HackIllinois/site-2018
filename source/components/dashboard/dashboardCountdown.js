import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import styles from './dashboardCountdown.scss'

export default class DashboardCountdown extends Component {
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
    const countdownDate = new Date("Feb 25, 2018 11:00:00").getTime();
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
    	<div className="dashboardCountdown">
        <div className="dashboardCountdown__content">
          <div className="dashboardCountdown__timer">
            <div className="dashboardCountdown__timerFlexItem">
              <h1 className="dashboardCountdown__number">0{this.state.d}</h1>
            </div>
            <div className="dashboardCountdown__timerFlexItem"><h3 className="dashboardCountdown__letter">D</h3></div>

            <div className="dashboardCountdown__timerFlexItem">
              <h1 className="dashboardCountdown__number">{this.state.h}</h1>
            </div>
            <div className="dashboardCountdown__timerFlexItem"><h3 className="dashboardCountdown__letter">H</h3></div>

            <div className="dashboardCountdown__timerFlexItem">
              <h1 className="dashboardCountdown__number">{this.state.m}</h1>
            </div>
            <div className="dashboardCountdown__timerFlexItem"><h3 className="dashboardCountdown__letter">M</h3></div>

            <div className="dashboardCountdown__timerFlexItem">
              <h1 className="dashboardCountdown__number">{this.state.s}</h1>
            </div>
            <div className="dashboardCountdown__timerFlexItem"><h3 className="dashboardCountdown__letter">S</h3></div>
          </div>
        </div>
	    </div>
    )
  }
}
