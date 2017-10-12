import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'

class Home extends Component {
    render() {
        return(
            <div>
                <div className="Landing">
                  <img className="Landing__logo" src="./assets/img/png/landing_page_logo_date.png" />
                  <div className="Landing__background">
                  </div>
                </div>

                <About/>
                <FAQ/>
            </div>
        )
    }
}

export default Home
