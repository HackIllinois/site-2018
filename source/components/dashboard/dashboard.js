import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image, Transition} from 'semantic-ui-react';
import { Timeline } from 'react-twitter-widgets'

import styles from './dashboard.scss';
import DashboardClock from './dashboardClock';
import DashboardEvents from './dashboardEvents';
import DashboardAnnouncements from './dashboardAnnouncements'
import Clock from 'react-live-clock';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logos: [
        "fulcrumtransparent-regular",
        "googlecloudplatformtransparent",
        "forcepointtransparent",
        "caterpillartransparent",
        "microsofttransparent",
        "rubriktransparent",
      ],
      visibles: [
        true,
        true,
        true,
        true,
        true,
        true
      ],
      hide: 750,
      show: 750,
    };
  };

  componentWillMount() {
    setInterval(() => {
      let {visibles} = this.state;
      var index = Math.floor(Math.random() * visibles.length);
      visibles[index] = false;

      this.setState({ visibles: visibles });
    }, 5000);
  };

  randomLogos = (index) => {
    let {logos, visibles} = this.state;
    const allLogos = [
      "fulcrumtransparent-regular", "oathtransparent", "forcepointtransparent", "facebooktransparent", "microsofttransparent", "schlumbergertransparent", "amadeustransparent", "jacksontransparent",
      "caterpillartransparent", "googlecloudplatformtransparent", "imotransparent", "rockwellcollinstransparent", "synchronytransparent", "rubriktransparent", "qtumtransparent", "goldmantransparent", "johndeeretransparent"
    ];

    let newLogoIndex = Math.floor(Math.random() * allLogos.length);
    let newLogo = allLogos[newLogoIndex];
    while (logos.indexOf(newLogo) >= 0) {
      newLogoIndex = Math.floor(Math.random() * allLogos.length);
      newLogo = allLogos[newLogoIndex];
    }

    logos[index] = allLogos[newLogoIndex];
    visibles[index] = true;
    this.setState({
      logos: logos,
      visibles: visibles
    });
  }

  render() {
    const {logos, visibles, hide, show} = this.state;

    return (
      <Grid className='dashboardContainer' columns='equal'>
        <Grid.Row>
          <Grid.Column verticalAlign='bottom' className="sponsorLogoContainer leftSideContainer">
            <Transition duration={{ hide, show }} onHide={() => this.randomLogos(0)} visible={visibles[0]} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[0]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} onHide={() => this.randomLogos(1)} visible={visibles[1]} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[1]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} onHide={() => this.randomLogos(2)} visible={visibles[2]} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[2]+'.png'} size='large' centered />
              </Segment>
            </Transition>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="blockContainer">
              <DashboardClock key="countdown" clock={false} title='COUNTDOWN'/>
            </div>
            <div className="blockContainer">
              <DashboardEvents key="dashboardSmall" className="bottomContainer"/>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="blockContainer">
              <DashboardClock key="time"clock={true} title='CURRENT TIME'/>
            </div>
            <div className="blockContainer">
              <DashboardAnnouncements className="bottomContainer"/>
            </div>
          </Grid.Column>
          <Grid.Column verticalAlign='bottom' className="sponsorLogoContainer rightSideContainer">
            <Transition duration={{ hide, show }} onHide={() => this.randomLogos(3)} visible={visibles[3]} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image  src={'./assets/img/png/logos/'+logos[3]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} onHide={() => this.randomLogos(4)}visible={visibles[4]} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[4]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} onHide={() => this.randomLogos(5)} visible={visibles[5]} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[5]+'.png'} size='large' centered />
              </Segment>
            </Transition>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
