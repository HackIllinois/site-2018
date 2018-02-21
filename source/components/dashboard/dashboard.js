import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image} from 'semantic-ui-react';
import styles from './dashboard.scss'
import DashboardCountdown from './dashboardCountdown'
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

    return (
      <Grid className='dashboardContainer' columns='equal'>
        <Grid.Row>
          <Grid.Column verticalAlign='bottom' className="sponsorLogoContainer removePaddingRight">
            <Segment basic className="sponsorLogo">
              <Image className="logo" src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image className="logo" src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image className="logo" src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment textAlign="center" className="dashboardSmallContainer">
              <div className="dashboardTitle">
                COUNTDOWN
              </div>
              <Segment basic className="dashboardContent">
                <DashboardCountdown />
              </Segment>
            </Segment>
            <Segment clearing textAlign="center" className="dashboardBigContainer">
              <div className="dashboardTitle">
                HAPPENING NOW
              </div>
              <Segment textAlign="left" className="eventCellContainer">
                <div className="eventName">
                  Current Event Name
                </div>
                <div className="eventLocation">
                  East Entrance, Siebel Center
                </div>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment textAlign="center" className="dashboardSmallContainer">
              <div className="dashboardTitle">
                CURRENT TIME
              </div>
              <div className="dashboardContent ">
                <Clock className="currentTime" format={'h:mm A'} ticking={true} timezone={'US/Central'} />
              </div>
            </Segment>
            <Segment textAlign="center" className="dashboardBigContainer">
              <div className="dashboardTitle">
                ANNOUNCEMENTS
              </div>
              <Segment textAlign="left" className="eventCellContainer">
                <div className="eventName">
                  Current Event Name
                </div>
                <div className="eventLocation">
                  East Entrance, Siebel Center
                </div>
              </Segment>
            </Segment>

          </Grid.Column>
          <Grid.Column verticalAlign='bottom' className="sponsorLogoContainer removePaddingLeft">
            <Segment basic className="sponsorLogo">
              <Image className="logo" src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image className="logo" src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Segment>
            <Segment basic className="sponsorLogo">
              <Image className="logo" src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
