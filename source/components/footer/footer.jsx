import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

import styles from './footer.scss'

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return(
        	<div className="Footer">
                <div className="Footer__content">
                    <a href="https://www.github.com/hackillinois/" target="_blank">
                        <Icon name='github' size='big' />
                    </a>
                    <a href="https://www.facebook.com/hackillinois/" target="_blank">
                        <Icon name='facebook f' size='big' />
                    </a>
                    <a href="https://www.instagram.com/hackillinois/" target="_blank">
                        <Icon name='instagram' size='big' />
                    </a>
                    <a href="https://twitter.com/hackillinois" target="_blank">
                        <Icon name='twitter' size='big' />
                    </a>
                    <a href="mailto:contact@hackillinois.org" target="_blank">
                        <Icon name='mail' size='big' />
                    </a>
                </div>
			</div>
        )
    }
}
export default Footer
