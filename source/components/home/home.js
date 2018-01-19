import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import Countdown from '../countdown/countdown.jsx'
// import Sponsors from '../sponsors/sponsors.jsx'
import Footer from '../footer/footer.jsx'
import { Button } from 'semantic-ui-react'


class Home extends Component {
    render() {
        return(
            <div>
                <div className="container">
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

                {/* <Sponsors /> */}

                <Footer />
            </div>
        )
    }
}

export default Home
