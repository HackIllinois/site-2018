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
                    <Icon name='twitter' size='huge' />
                    <Icon name='facebook f' size='huge' />
                    <Icon name='mail' size='huge' />
                </div>
			</div>
        )
    }
}
export default Footer
