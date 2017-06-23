import React, { Component } from 'react'

import styles from './home.scss'

class Home extends Component {
    render() {
        return(
            <div className="Landing">
              <img className="Landing__logo" src="./assets/img/png/landing_page_logo.png" />
              <video autoPlay loop id="video-background" className="Landing__background" muted playsInline>
                <source src="./assets/video/landing_page_bg.mp4" type="video/mp4" />
                <source src="./assets/video/landing_page_bg.webm" type="video/webm" />
              </video>
            </div>
        )
    }
}

export default Home