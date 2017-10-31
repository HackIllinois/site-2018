import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
    render() {
        return(
            <div className="About">
			<div className={styles['about-section']}> <span className={styles.text}> WELCOME TO HACKILLINOIS! </span>     
				<p>
				HackIllinois is unlike any other hackathon you’ve been to. This year, we are focusing on collaboration and sustainability rather than competition. For 36 hours, our attendees will innovate, design, and improve the open source community. Attendees can choose from two tracks:
				</p>
			</div>
			<div className={styles['about-section']}> <span className={styles.text}> OUR EVENT </span>
				<p>
				HackIllinois is unlike any other hackathon you’ve been to. This year, we are focusing on collaboration and sustainability rather than competition. For 36 hours, our attendees will innovate, design, and improve the open source community. Attendees can choose from two tracks:
				</p> 
				<h2> CONTRIBUTE </h2>
				<p>
				Allows for each group to be mentored by core developers while working on existing open source projects, providing a welcoming environment while they make their first additions to the community.
				</p>
				<h2> CREATE </h2>
				<p>
				Encourages students to create a brand new open source project with the intention of building a founda- tion that others can build upon after the event.
				</p>
			</div>
			<div className={styles['about-section']}> <span className={styles.text}> TEAM </span> 
				<p>
				We’re a team of driven individuals working towards the goal of inspiring and empow- ering creative minds to build anything they can imagine.
				</p>
			</div>
		</div>
        )
    }
}

export default About

