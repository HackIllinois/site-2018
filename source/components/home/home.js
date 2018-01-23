import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import SectionHeader from '../sectionHeader/sectionHeader'
import Countdown from '../countdown/countdown.jsx'
import Sponsors from '../sponsors/sponsors.jsx'
import Footer from '../footer/footer.jsx'
import { Button } from 'semantic-ui-react'


class Home extends Component {

    constructor(props) {
      super(props);

      this.state = {
        playingAnimation: false
      };
    }

    endAnimation() {
      this.setState({
        playingAnimation: true
      });
    }

    render() {
        return(
          <div>
            <div className="container">
              <div className="Background video-container">
                <video id="splash_anim"
                  autoPlay muted src="../../assets/animation/splash.mp4" preload="auto"
                  poster="../../assets/animation/poster.png"
                  onEnded={() => this.endAnimation()}>
                </video>
              </div>
              <div className="Landing">
                <div className="Landing__logo">
                  <img className="logo" src="./assets/img/png/logo_with_date.png" />
                  <div className="RegButton">
                    <a href = "/start">
                    { (this.state.playingAnimation || window.innerWidth < 768 ) ? <button>REGISTER</button> : null}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <About />

            <Countdown />

            <FAQ/>

            <Sponsors />

            <Footer />
          </div>
        )
    }
}

export default Home
