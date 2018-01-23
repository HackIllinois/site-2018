import React, { Component } from 'react'
import Lottie from 'lottie-web'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import SectionHeader from '../sectionHeader/sectionHeader'
import Countdown from '../countdown/countdown.jsx'
import Sponsors from '../sponsors/sponsors.jsx'
import Footer from '../footer/footer.jsx'
import { Button } from 'semantic-ui-react'
const animationData = require('../../assets/json/data.json')


class Home extends Component {
    componentDidMount() {
        let anim = Lottie.loadAnimation({
            container: document.getElementById('lottie'),
            renderer: 'html',
            loop: false,
            autoplay: true,
            animationData: animationData
        })
        anim.setSubframe(false);
    }

    render() {
    //   const defaultOptions = {
    //     loop: false,
    //     autoplay: true,
    //     animationData: animationData
    //   };
        return(
            <div>
                <div className="container" id="lottie">
                    {/* <Lottie options = {defaultOptions} /> */}
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
