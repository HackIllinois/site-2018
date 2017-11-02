import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
    render() {
        return(
            <div className="About">
				<div className="About__section">
	                <h2> WELCOME TO HACKILLINOIS! </h2>
					<p>
                    Since its inception in 2014, HackIllinois has pushed the boundaries to create an exceptional and dynamic hackathon culture. Now, it’s time to give back to the community. HackIllinois 2017 is the first open source-focused collegiate hackathon!
                    </p>
					<br />
					<h2> OUR EVENT </h2>
					<p>
					HackIllinois is unlike any other hackathon you’ve been to. This year, we are focusing on collaboration and sustainability rather than competition. For 36 hours, our attendees will innovate, design, and improve the open source community. Attendees can choose from two tracks:
					</p>
				</div>
				<div className="About__columnSection">
					<div className="About__columnSection__column">
						<h2> CONTRIBUTE </h2>
						<p>
						Allows for each group to be mentored by core developers while working on existing open source projects, providing a welcoming environment while they make their first additions to the community.
						</p>
					</div>
					<div className="About__columnSection__column">
						<h2> CREATE </h2>
						<p>
						Encourages students to create a brand new open source project with the intention of building a foundation that others can build upon after the event.
						</p>
					</div>
				</div>
				<div className="About__section">
					<br/>
					<h2> TEAM </h2>
					<p>
					We’re a team of driven individuals working towards the goal of inspiring and empowering creative minds to build anything they can imagine.
					</p>
				</div>
			</div>
        )
    }
}

export default About
