import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import SectionHeader from '../sectionHeader/sectionHeader.jsx'

class Home extends Component {
    render() {
        return(
            <div className="container">

                <div className="Background">
                    <div className="Background__foreground">

                    </div>

                    <div className="Background__footer">

                    </div>
                </div>

                <div className="Landing">
                  <img className="Landing__logo" src="./assets/img/png/landing_page_logo_date.png" />
                </div>

                <About/>

                <SectionHeader text="We thought you might have some questions." />
                <FAQ/>

            </div>
        )
    }
}

export default Home
