import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about'
import FAQ from '../faq/faq'
import SectionHeader from '../sectionHeader/sectionHeader'

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="Background">
                    <div className="Background__foreground"></div>
                    <div className="Background__footer"></div>
                </div>

                <div className="Landing">
                    <img className="Landing__logo" src="./assets/img/png/landing_page_logo_date.png" />
                    <a href="http://fulcrum-gt.com">
                        <img className="Landing__logo2" src="./assets/img/png/fulcrum.png" />
                    </a>
                </div>

                <About/>
                <SectionHeader text="We thought you might have some questions." />
                <FAQ/>
            </div>
        )
    }
}

export default Home
