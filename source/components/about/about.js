import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
    render() {
        return(
            <div className="About">
                <div className="About__section">
                    <h2> DREAM IT. BUILD IT.</h2>
                    <p>
                      Since its inception in 2014, HackIllinois has pushed the boundaries to create an exceptional and dynamic hackathon culture. Now, it’s time to give back to the community. Last year HackIllinois broke ground with the first open source-focused collegiate hackathon — go beyond and explore your dreamscape in 2018.
                    </p>
                    <br/>
                </div>
                <div className="About__section">
                    <br/>
                    <h2> WE ARE HACKILLINOIS. </h2>
                    <p>
                      A team of driven individuals working towards the goal of inspiring and empowering creative minds to build anything they can imagine.
                    </p>
                </div>
            </div>
        )
    }
}

export default About
