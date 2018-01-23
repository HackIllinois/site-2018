import React, { Component } from 'react'

import styles from './sponsors.scss'

class Sponsors extends Component {
    constructor() {
        super();
    }

    render() {
        const path = "./assets/img/png/logos/";
        const filetype = ".png";
        const sponsorsLarge = [
            {
                "company": "fulcrumgt",
                "url": ""
            }
        ];

        const sponsorsMedium = [
            // meditate
            {
                "company": "microsoft",
                "url": ""
            },
            {
                "company": "imo_2",
                "url": ""
            },
            //placeholder for nussbaumer???

            // recurring
            {
                "company": "amadeus",
                "url": ""
            },
            // goldman
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
        const sponsorsSmall = [
            {
                "company": "googlecloudplatform",
                "url": ""
            },
            {
                "company": "oath",
                "url": ""
            },
            {
                "company": "caterpillar",
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
                "company": "jackson",
                "url": ""
            },

            // optum and rockwell?

            {
                "company": "axis_2",
                "url": ""
            },

            {
                "company": "citadel",
                "url": ""
            },

            {
                "company": "nvidia",
                "url": ""
            },

            {
                "company": "productiveedge",
                "url": ""
            },

            {
                "company": "1517_2",
                "url": ""
            }
        ]

        const sponsorData = [
        ]

        const large = sponsorsLarge.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemLarge">
                    <img src={ path + sponsor.company + filetype} />
                </div>
            );
        })

        const medium = sponsorsMedium.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemMedium">
                    <img src={ path + sponsor.company + filetype} />
                </div>
            );
        })

        const small = sponsorsSmall.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemSmall">
                    <img src={ path + sponsor.company + filetype} />
                </div>
            );
        })

        return(
        	<div className="Sponsors">
                <div className="container">
                  <h1>Our Sponsors</h1>
                  <div className="Sponsors__flexBox">
                      {large}
                  </div>
                  <div className="Sponsors__flexBox">
                      {medium}
                  </div>
                  <div className="Sponsors__flexBox">
                      {small}
                  </div>
                </div>
			</div>
        )
    }
}
export default Sponsors
