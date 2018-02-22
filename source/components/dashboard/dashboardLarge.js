import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image, Transition} from 'semantic-ui-react';
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
      logos: [
        "fulcrumtransparent-regular",
        "googlecloudplatformtransparent",
        "forcepointtransparent",
        "caterpillartransparent",
        "microsofttransparent",
        "rubriktransparent",
        "oathtransparent",
        "facebooktransparent",
        "schlumbergertransparent"
      ],
      visible: true,
      hide: 750,
      show: 750,
    };
  };

  componentWillMount() {
    setInterval(() => {
      this.setState({ visible: false });
    }, 10000);
  };

  randomLogos = () => {
    let newLogos = [];
    let allLogos = [
      "fulcrumtransparent-regular", "oathtransparent", "forcepointtransparent", "facebooktransparent", "microsofttransparent", "schlumbergertransparent", "amadeustransparent", "jacksontransparent",
      "caterpillartransparent", "googlecloudplatformtransparent", "imotransparent", "rockwellcollinstransparent", "synchronytransparent", "rubriktransparent", "qtumtransparent", "goldmantransparent", "johndeeretransparent"
    ];
    for(var i = 0; i < 9; i++){
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
              <Image src="../../assets/animation/dashboard_animation.gif" size='large' className="dashboardAnimation"/>
            </div>
            <div className="largeBlockContainer" style={{marginBottom: '4vh'}}>
              <DashboardAnnouncements size='small'/>
            </div>
            <div className="largeLogoContainer">
              <Grid>
                <Grid.Row columns={3} className="logoRow">
                  <Grid.Column className="logoCol">
                    <Transition onHide={this.randomLogos} duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[0]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[1]+'.png'} size='small' centered />
                    </Transition>                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[2]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} className="logoRow">
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[3]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[4]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[5]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} className="logoRow">
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[6]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[7]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} visible={visible} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[8]+'.png'} size='small' centered />
                    </Transition>
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
