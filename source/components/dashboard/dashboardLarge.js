import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image} from 'semantic-ui-react';
import { Timeline } from 'react-twitter-widgets'

import styles from './dashboardLarge.scss'
import DashboardClock from './dashboardClock'
import DashboardEvents from './dashboardEvents'
import DashboardAnnouncements from './dashboardAnnouncements'
import Clock from 'react-live-clock';

export default class DashboardLarge extends Component {
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
      <Grid className='largeDashboardContainer' columns='equal'>
        <Grid.Row>
          <Grid.Column className="largeLeftSideContainer">
            <div className="largeBlockContainer">
              <DashboardClock clock={false} title='COUNTDOWN'/>
            </div>
            <div className="largeBlockContainer">
              <DashboardEvents key="dashboardLarge" className="bottomContainer"/>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="largeBlockContainer">
              <DashboardClock clock={true} title='CURRENT TIME'/>
            </div>
            <div className="largeBlockContainer">
              <Segment basic className="twitterContainer">
                <Timeline
                  dataSource={{sourceTypr:'profile', screenName:'hackillinois'}}
                  options={{chrome: 'transparent nofooter noheader', username:'hackillinois'}}
                />
              </Segment>
            </div>
          </Grid.Column>
          <Grid.Column className="largeRightSideContainer">
            <div className="largeBlockContainer dashboardAnimationPlaceholder">
              <video className="dashboardAnimation" autoPlay loop>
                <source src="../../assets/animation/dashboard_animation.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="largeBlockContainer" style={{marginBottom: '4vh'}}>
              <DashboardAnnouncements size='small'/>
            </div>
            <div className="largeLogoContainer">
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='../../assets/img/png/logos/imotransparent.png' size='small' centered />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
