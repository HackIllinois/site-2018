import React, { Component } from 'react'

import styles from './sponsors.scss'

class Sponsors extends Component {
    constructor() {
        super();
    }

    render() {
        const path = "./assets/img/png/logos/";
        const filetype = ".png";
        const sponsorData = [
            // {
            //     "company": "1517",
            //     "url": ""
            // },
            {
                "company": "amadeus",
                "url": ""
            },
            // {
            //     "company": "axis",
            //     "url": ""
            // },
            {
                "company": "caterpillar",
                "url": ""
            },
            {
                "company": "citadel",
                "url": ""
            },
            {
                "company": "facebook",
                "url": ""
            },
            {
                "company": "forcepoint",
                "url": ""
            },
            {
                "company": "fulcrumgt",
                "url": ""
            },
            {
                "company": "googlecloudplatform",
                "url": ""
            },
            // {
            //     "company": "imo",
            //     "url": ""
            // },
            {
                "company": "jackson",
                "url": ""
            },
            {
                "company": "microsoft",
                "url": ""
            },
            {
                "company": "nvidia",
                "url": ""
            },
            {
                "company": "oath",
                "url": ""
            },
            {
                "company": "productiveedge",
                "url": ""
            },
            {
                "company": "rubrik",
                "url": ""
            },
            {
                "company": "schlumberger",
                "url": ""
            },
            {
                "company": "synchrony",
                "url": ""
            }
        ]

        const sponsors = sponsorData.map((sponsor) => {
            return(
                <div className="Sponsors__flexItem">
                    <img src={ path + sponsor.company + filetype} />
                </div>
            );
        })

        return(
        	<div className="Sponsors">
                <div className="container">
                  <h1>Our Sponsors</h1>
                  <div className="Sponsors__flexBox">{sponsors}</div>
                </div>
			</div>
        )
    }
}
export default Sponsors
