import React, { Component } from 'react'

import styles from './registerNav.scss'

class RegisterNav extends Component {
  render() {
    // Variables setup
    const step = this.props.step


    return(
      <div className="Line">
        <div className="Step-Container">
          <div className={step == 0 ? 'Oval-Active' : 'Oval-Inactive'}></div>
          <div className="Header-Text">
            PERSONAL INFORMATION
          </div>
        </div>
        <div className="Step-Container">
          <div className={step == 1 ? 'Oval-Active' : 'Oval-Inactive'}></div>
          <div className="Header-Text">
            PROFRESSIONAL INFORMATION
          </div>
        </div>
        <div className="Step-Container">
          <div className={step == 2 ? 'Oval-Active' : 'Oval-Inactive'}></div>
          <div className="Header-Text">
            TEAM
          </div>
        </div>
        <div className="Step-Container">
          <div className={step == 3 ? 'Oval-Active' : 'Oval-Inactive'}></div>
          <div className="Header-Text">
            REVIEW
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterNav
