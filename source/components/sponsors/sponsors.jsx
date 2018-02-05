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
                "company": "fulcrum",
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
                "company": "imo",
                "url": "https://www.e-imo.com"
            },
            {
                "company": "qtum",
                "url": "https://qtum.org/en/"
            },
        ]

        const sponsorsSmall = [
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

        const sponsorsXSmall = [
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
            {
                "company": "rockwellcollins",
                "url": "https://www.rockwellcollins.com/"
            },

            {
                "company": "axis",
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
                "company": "1517",
                "url": "http://www.1517fund.com/"
            },

            {
                "company": "soylent",
                "url": "http://www.soylent.com/"
            },

            {
                "company": "illinoismakerlab",
                "url": "https://makerlab.illinois.edu/"
            }
        ]

        const sponsorData = [
        ]

        const large = sponsorsLarge.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemLarge">
                    <a href={sponsor.url}><img src={ path + sponsor.company + 'transparent' + filetype} /></a>
                </div>
            );
        })

        const medium = sponsorsMedium.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemMedium">
                    <a href={sponsor.url}><img src={ path + sponsor.company + 'transparent' + filetype} /></a>
                </div>
            );
        })

        const small = sponsorsSmall.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemSmall">
                    <a href={sponsor.url}><img src={ path + sponsor.company + 'transparent' + filetype} /></a>
                </div>
            );
        })

        const xsmall = sponsorsXSmall.map((sponsor) => {
            return(
                <div className="Sponsors__flexItemXSmall">
                    <a href={sponsor.url}><img src={ path + sponsor.company + 'transparent' + filetype} /></a>
                </div>
            );
        })

        return(
        	<div className="Sponsors">
                <div className="container">
                    <div className="Sponsors__container">
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
                        <div className="Sponsors__flexBox">
                            {xsmall}
                        </div>
                    </div>
                </div>
			</div>
        )
    }
}
export default Sponsors
