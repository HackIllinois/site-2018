import React, { Component } from 'react'

import styles from './sectionHeader.scss'

class SectionHeader extends Component {
    constructor() {
        super();
    }

    render() {
        return(
        	<div className="SectionHeader">
                <h2>{ this.props.text }</h2>
			</div>
        )
    }
}
export default SectionHeader
