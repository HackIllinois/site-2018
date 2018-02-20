import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import SectionHeader from '../sectionHeader/sectionHeader'
import Countdown from '../countdown/countdown.jsx'
import Sponsors from '../sponsors/sponsors.jsx'
import Footer from '../footer/footer.jsx'
import { Button, Image } from 'semantic-ui-react'


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

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.forceUpdate();
    };

    render() {
        return(
          <div>
            <div className="container">
              <div className="Background video-container">
                <video id="splash_anim"
                  autoPlay muted src="../../assets/animation/landing_page_animation.mp4" preload="auto"
                  poster="../../assets/animation/poster.png"
                  onEnded={() => this.endAnimation()}>
                </video>
              </div>
              <div className="Landing">
                <div className="Landing__logo">
                  { (window.innerWidth < 780 ) ? <img className="logo" src="./assets/img/png/logo_with_date.png" /> : null}
                  { (window.innerWidth < 780 ) ? <img className="logo" src="./assets/img/png/fulcrum.png" /> : null}
                  <div className="RegButton">
                    <a href = "/schedule">
                    { (this.state.playingAnimation || window.innerWidth < 780 ) ? <button>SCHEDULE</button> : null}
                    </a>
                    <a href = "/rsvp">
                    { (this.state.playingAnimation || window.innerWidth < 780 ) ? <button>CHECK YOUR STATUS</button> : null}
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
