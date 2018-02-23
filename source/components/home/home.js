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
              <div className="Background">
              </div>
              <div className="Landing">
                <div className="Landing__logo">
                  <img src="./assets/img/png/logo_with_date.png" />
                  <img src="./assets/img/png/fulcrum.png" />
                  <div className="RegButton">
                    <a href = "/schedule">
                      <button>DAY OF</button>
                    </a>
                    <a href = "/rsvp">
                      <button>CHECK YOUR STATUS</button>
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
