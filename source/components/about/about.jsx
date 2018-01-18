import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
    render() {

        const contributeDescription = 'Allows for each group to be mentored by core developers while working on existing open source projects, providing a welcoming environment while they make their first additions to the community.'
        const createDescription = 'Encourages students to create a brand new open source project with the intention of building a foundation that others can build upon after the event.'

        return(
            <div className="About">
              <div className="container">
                <h1>Dream it. Build it.</h1>

                <p>
                  Since its inception in 2014, HackIllinois has pushed the boundaries to create an exceptional and dynamic hackathon culture. Now, it's time to give back to the community. Last year, HackIllinois broke ground with the first open source-focused collegiate hackathon - go beyond and explore your dreamscape in 2018.
                </p>

                <h1>The Tracks.</h1>

                <p>
                  HackIllinois is unlike any other hackathon you've been to. This year, we are focusing on collaboration and sustainability rather than competition. For the 36 hours, our attendees will innovate, design, and improve the open source community. Attendees can choose from two tracks.
                </p>

                <div className="About__trackCards">
                  <div className="About__trackCard">
                    <div className="About__trackCardHeader">
                      <h3>Contribute</h3>
                    </div>
                    <div className="About__trackCardBody">
                      <p>{contributeDescription}</p>
                    </div>
                  </div>

                  <div className="About__trackCard">
                    <div className="About__trackCardHeader">
                      <h3>Create</h3>
                    </div>
                    <div className="About__trackCardBody">
                      <p>{createDescription}</p>
                    </div>
                  </div>
                </div>

                <p></p>

                <h1>We are HackIllinois.</h1>

                <p>
                A team of driven individuals working towards the goal of inspiring and
                empowering creative minds to build anything they can imagine.
                </p>
              </div>
            </div>
        )
    }
}

export default About
