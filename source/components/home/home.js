import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import SectionHeader from '../sectionHeader/sectionHeader.jsx'
import Countdown from '../countdown/countdown.jsx'
import Sponsors from '../sponsors/sponsors.jsx'
import Footer from '../footer/footer.jsx'

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
                        </div>
                    </div>
                </div>

                <div className="container">
                    <About/>
                </div>

                <Countdown />

                <div className="container">
                    <SectionHeader text="Frequently Asked Questions" />
                    <FAQ/>
                </div>

                <Sponsors />

                <Footer />
            </div>
        )
    }
}

export default Home
