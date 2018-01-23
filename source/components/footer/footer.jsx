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
                    <a href="https://twitter.com/hackillinois">
                        <Icon name='twitter' size='huge' />
                    </a>
                    <a href="https://www.facebook.com/hackillinois/">
                        <Icon name='facebook f' size='huge' />
                    </a>
                    <a href="mailto:contact@hackillinois.org">
                        <Icon name='mail' size='huge' />
                    </a>
                </div>
			</div>
        )
    }
}
export default Footer
