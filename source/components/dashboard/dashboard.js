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
        "fulcrumtransparent",
        "googlecloudplatformtransparent",
        "forcepointtransparent",
        "caterpillartransparent",
        "microsofttransparent",
        "rubriktransparent",
      ],
      visible: true,
      hide: 750,
      show: 750,
    };
  };

  componentWillMount() {
    setInterval(() => {
      this.setState({ visible: false });
    }, 60000);
  };


  randomLogos = () => {
    let newLogos = [];
    let allLogos = [
      "fulcrumtransparent", "oathtransparent", "forcepointtransparent", "facebooktransparent", "microsofttransparent", "schlumbergertransparent", "amadeustransparent", "jacksontransparent",
      "caterpillartransparent", "googlecloudplatformtransparent", "imotransparent", "rockwellcollinstransparent", "synchronytransparent", "rubriktransparent", "qtumtransparent", "goldmantransparent", "johndeeretransparent"
    ];
    for(var i = 0; i < 6; i++){
      const index = Math.floor(Math.random() * allLogos.length);
      const logo = allLogos.splice(index,1);
      newLogos = newLogos.concat(logo);
    }

    this.setState({
      logos: newLogos,
      visible: true
    });
  }

  render() {
    const {logos, visible, hide, show} = this.state;

    return (
      <Grid className='dashboardContainer' columns='equal'>
        <Grid.Row>
          <Grid.Column verticalAlign='bottom' className="sponsorLogoContainer leftSideContainer">
            <Transition onHide={this.randomLogos} duration={{ hide, show }} visible={visible} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[0]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} visible={visible} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[1]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} visible={visible} animation='fade'>
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
            <Transition duration={{ hide, show }} visible={visible} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image  src={'./assets/img/png/logos/'+logos[3]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} visible={visible} animation='fade'>
              <Segment basic className="sponsorLogo">
                <Image src={'./assets/img/png/logos/'+logos[4]+'.png'} size='large' centered />
              </Segment>
            </Transition>
            <Transition duration={{ hide, show }} visible={visible} animation='fade'>
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
