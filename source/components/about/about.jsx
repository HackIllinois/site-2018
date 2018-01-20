import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
    render() {
        return(
            <div className="About">
              <div className="container">
                <h1>Dream it. Build it.</h1>

                <p>
                  Since its inception in 2014, HackIllinois has pushed the boundaries to create an exceptional and dynamic hackathon culture. Now, it’s time to give back to the community. Last year HackIllinois broke ground with the first Open Source-focused collegiate hackathon — go beyond and explore your dreams in 2018.
                </p>

                <h1>The Event.</h1>

                <p>
                  This year, we are continuing our commitment to the open source community. Take the time to explore our full list of Projects and discover our Excellent Mentors, and on February 23rd through 25th, get ready to develop, create, and support exciting Open Source projects!
                </p>

                <h1>About Us.</h1>

                <p>
                  We are the Hackillinois team, dedicated to create an environment for hackers to pursue creativity and innovation at its finest.  We aim to assist hackers push creativity towards limitless bounds. Our team has worked hard to cultivate an environment worthy of bringing inventive ideas to life. 
                </p>

                <p></p>
              </div>
            </div>
        )
    }
}

export default About
