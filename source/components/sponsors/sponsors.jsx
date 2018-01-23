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
                "url": "http://fulcrum-gt.com/"
            }
        ];

        const sponsorsMedium = [
            // meditate
            {
                "company": "microsoft",
                "url": "https://www.microsoft.com/en-us/"
            },
            {
                "company": "imo_2",
                "url": "https://www.e-imo.com"
            },
            //placeholder for nussbaumer???

            // recurring
            {
                "company": "amadeus",
                "url": "http://www.amadeus.com/"
            },
            // goldman
            {
                "company": "rubrik",
                "url": "https://www.rubrik.com/"
            },
            {
                "company": "schlumberger",
                "url": "http://www.slb.com/"
            },
            {
                "company": "synchrony",
                "url": "https://www.mysynchrony.com/"
            }
        ]
        const sponsorsSmall = [
            {
                "company": "googlecloudplatform",
                "url": "https://cloud.google.com/"
            },
            {
                "company": "oath",
                "url": "https://www.oath.com/"
            },
            {
                "company": "caterpillar",
                "url": "https://www.caterpillar.com/"
            },
            {
                "company": "facebook",
                "url": "https://www.facebook.com/careers/"
            },
            {
                "company": "forcepoint",
                "url": "https://www.forcepoint.com/"
            },
            {
                "company": "jackson",
                "url": "https://www.jackson.com/index.xhtml"
            },

            // optum and rockwell?

            {
                "company": "axis_2",
                "url": "http://www.axiscapital.com/en-us"
            },

            {
                "company": "citadel",
                "url": "https://www.citadel.com/"
            },

            {
                "company": "nvidia",
                "url": "http://www.nvidia.com/page/home.html"
            },

            {
                "company": "productiveedge",
                "url": "https://www.productiveedge.com/"
            },

            {
                "company": "1517_2",
                "url": "http://www.1517fund.com/"
            }
        ]

        const sponsorData = [
        ]

        const large = sponsorsLarge.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemLarge">
                    <a href={sponsor.url}><img src={ path + sponsor.company + filetype} /></a>
                </div>
            );
        })

        const medium = sponsorsMedium.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemMedium">
                    <a href={sponsor.url}><img src={ path + sponsor.company + filetype} /></a>
                </div>
            );
        })

        const small = sponsorsSmall.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemSmall">
                    <a href={sponsor.url}><img src={ path + sponsor.company + filetype} /></a>
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
