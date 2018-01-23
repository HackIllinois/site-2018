import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import SectionHeader from '../sectionHeader/sectionHeader'
import Countdown from '../countdown/countdown.jsx'
import Sponsors from '../sponsors/sponsors.jsx'
import Footer from '../footer/footer.jsx'
import { Button } from 'semantic-ui-react'
import { DefaultPlayer as Video } from 'react-html5video';


class Home extends Component {

    constructor(props) {
      super(props);

      this.state = {
        playingAnimation: true
      }
    }

    endAnimation() {
      this.setState({
        playingAnimation: false
      });
    }

    render() {
        return(
            <div>
                <div className="container">
                    <video id="splash_anim" className={(this.state.playingAnimation) ? "Splash" : "EndSplash"}
                      autoPlay muted src="../../assets/animation/splash.mp4" preload="auto"
                      poster="../../assets/animation/poster.png"
                      onEnded={() => this.endAnimation()}>
                    </video>
                    <div className="Background">
                        <div className="Background__foreground">

                        </div>

                        <div className="Background__footer">

                        </div>
                    </div>
                    <div className="Landing">
                        <div className="Landing__logo">
                            <img src="./assets/img/png/logo_with_date.png" />
                            <div class="RegButton">
                                <a href = "/start">
                                    <button class="ui button" tabindex="0">REGISTER</button>
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
