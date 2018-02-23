import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import styles from './dashboardClock.scss'

export default class DashboardClock extends Component {
  constructor() {
      super();
      this.state = {
        countdownTime: {
          d: '0',
          h: '0',
          m: '0',
          s: '0'
        },
        currentTimer: {
          h: '0',
          m: '0',
          type: ''
        }
      }
  }

  componentDidMount() {
    const countdownDate = new Date("Feb 25, 2018 11:00:00").getTime();

    setInterval(() => {
      const now = new Date();
      const dist = countdownDate - now.getTime();

      let CDd = Math.floor(dist / (1000 * 60 * 60 * 24)).toString();
      let CDh = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
      let CDm = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)).toString();
      let CDs = Math.floor((dist % (1000 * 60)) / 1000).toString();

      if (dist < 0) {
        CDd = 0
        CDh = 0
        CDm = 0
        CDs = 0
      }

      const NOWh = now.getHours() % 12;
      const NOWm = now.getMinutes();
      const type = now.getHours() < 12 ? 'AM' : 'PM';

      this.setState({
        countdownTime : {
          d: CDd,
          h: CDh,
          m: CDm,
          s: CDs
        },
        currentTimer: {
          h: NOWh,
          m: NOWm,
          type: type
        }
      });

    }, 1000)
  }

  render() {

    const {clock, title} = this.props;
    const {countdownTime, currentTimer} = this.state;

    const currentTimer_H = currentTimer.h
    const currentTimer_M = currentTimer.m.toString().length == 1 ? '0' + currentTimer.m : currentTimer.m

    return(
      <Segment textAlign="center" className="countdownContainer">
        <div className="countdownTitle">
          {title}
        </div>
        {
          clock ?
          <Segment basic className="currentTimer">
            <div>
              <h1 className="currentTimer__number">{currentTimer_H + ':' + currentTimer_M}</h1>
            </div>
            <div>
              <h3 className="currentTimer__letter">{currentTimer.type}</h3>
            </div>
          </Segment>
          :
          <Segment basic className="countdownTimer">
            <div>
              <h1 className="countdownTimer__number">{countdownTime.d.length == 1 ? '0' + countdownTime.d : countdownTime.d}</h1>
            </div>
            <div>
              <h3 className="countdownTimer__letter">D</h3>
            </div>

            <div>
              <h1 className="countdownTimer__number">{countdownTime.h.length == 1 ? '0' + countdownTime.h : countdownTime.h }</h1>
            </div>
            <div>
              <h3 className="countdownTimer__letter">H</h3>
            </div>

            <div>
              <h1 className="countdownTimer__number">{countdownTime.m.length == 1 ? '0' + countdownTime.m : countdownTime.m }</h1>
            </div>
            <div>
              <h3 className="countdownTimer__letter">M</h3>
            </div>

            <div>
              <h1 className="countdownTimer__number">{countdownTime.s.length == 1 ? '0' + countdownTime.s : countdownTime.s }</h1>
            </div>
            <div>
              <h3 className="countdownTimer__letter">S</h3>
            </div>
          </Segment>
        }
      </Segment>
    )
  }
}
