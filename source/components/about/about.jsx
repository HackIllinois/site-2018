import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
  render() {
    return(
      <div className="About">
        <div className="container">
          <h1>Dream It. Build It.</h1>

          <p className="About__copy">
            Since its inception in 2014, HackIllinois has pushed boundaries to create an exceptional and dynamic hackathon culture. Last year, HackIllinois broke ground with the first Open Source-focused collegiate hackathon. This year, we challenge you to go beyond and explore your own dreamscape.
          </p>

          <h1 className="space_above">The Event.</h1>

          <p className="About__copy">
            This year, we are continuing our commitment to the Open Source community. On February 23rd through 25th, get ready to develop, create, and support exciting Open Source projects!
          </p>

          <h1 className="space_above">About Us.</h1>

          <p className="About__copy">
            We are the HackIllinois team, dedicated to creating a collaborative environment for hackers to push creativity and innovation beyond bounds. Our team worked hard to gather the resources you need to bring your dreamscape to life.
          </p>
          <p></p>
        </div>
      </div>
    )
  }
}

export default About
