import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image} from 'semantic-ui-react';
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

    };
  };

  componentWillMount() {

  };

  render() {
    const currentTime = new Date();
    //fulcrumtransparent, oathtransparent, forcepointtransparent, facebooktransparent, microsofttransparent, schlumbergertransparent, amadeustransparent, jacksontransparent
    //caterpillartransparent, googlecloudplatformtransparent, imotransparent, rockwellcollinstransparent, synchronytransparent, rubriktransparent, qtumtransparent, goldman sachs, and john deere

    return (
      <Grid className='dashboardContainer' columns='equal'>
        <Grid.Row>
          <Grid.Column verticalAlign='bottom' className="sponsorLogoContainer leftSideContainer">
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/imotransparent.png' size='large' centered />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/rockwellcollinstransparent.png' size='large' centered />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/schlumbergertransparent.png' size='large' centered />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/synchronytransparent.png' size='large' centered />
            </Segment>
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
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/forcepointtransparent.png' size='large' centered />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/facebooktransparent.png' size='large' centered />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/caterpillartransparent.png' size='large' centered />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image src='./assets/img/png/logos/googlecloudplatformtransparent.png' size='large' centered />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
