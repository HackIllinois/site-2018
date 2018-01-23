import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
    render() {
        return(
            <div className="About">
              <div className="container">
                <h1>Dream It. Build It.</h1>

                <p className="About__copy">
                    Since its inception in 2014, HackIllinois has pushed the boundaries to create an exceptional and dynamic hackathon culture. Last year, HackIllinois broke ground with the first Open Source-focused collegiate hackathon. This year, go beyond and explore your dreamscape in 2018.

                </p>

                <h1 className="space_above">The Event.</h1>

                <p className="About__copy">
                    This year, we are continuing our commitment to the Open Source community. On February 23rd through 25th, get ready to develop, create, and support exciting Open Source projects!
                </p>


                <h1 className="space_above">About Us.</h1>

                <p className="About__copy">
                    We are the HackIllinois team, dedicated to building an innovative environment for attendees. We aim to enable our participants to push their creativity towards limitless bounds. Our team has worked hard to cultivate an environment where you can bring your ideas to life. 
                </p>

                <p></p>
              </div>
            </div>
        )
    }
}

export default About
