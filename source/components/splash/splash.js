import React, { Component } from 'react'
import Lottie from 'lottie-web'

import styles from './splash.scss'

class Splash extends Component {
    componentDidMount() {
      const anim = Lottie.loadAnimation({
        container: document.getElementById('lottie'),
        renderer: 'html',
        loop: false,
        autoplay: true,
        path: '../../assets/animation/data.json'
      });

      anim.setSubframe(false);
      anim.addEventListener('complete', () => {
        anim.destroy()
        this.props.history.push("/home");
      })
    }

    render() {
        return(
            <div>
              <div className="container" id="lottie">
              </div>
            </div>
        )
    }
}

export default Splash
