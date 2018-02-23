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
      visibles: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ],
      visible: true,
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
    const {logos, visible, visibles, hide, show} = this.state;

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
                  options={{chrome: 'transparent nofooter noheader noscrollbar', tweetLimit: 3, ariaPolite: 'rude', username:'hackillinois'}}
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
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(0)} visible={visibles[0]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[0]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(1)} visible={visibles[1]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[1]+'.png'} size='small' centered />
                    </Transition>
                   </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(2)} visible={visibles[2]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[2]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} className="logoRow">
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(3)} visible={visibles[3]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[3]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(4)} visible={visibles[4]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[4]+'.png'} size='small' centered />
                    </Transition>
                   </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(5)} visible={visibles[5]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[5]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} className="logoRow">
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(6)} visible={visibles[6]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[6]+'.png'} size='small' centered />
                    </Transition>
                  </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(7)} visible={visibles[7]} animation='fade'>
                      <Image className="sponsorLogo" src={'../../assets/img/png/logos/'+logos[7]+'.png'} size='small' centered />
                    </Transition>
                   </Grid.Column>
                  <Grid.Column className="logoCol">
                    <Transition duration={{ hide, show }} onHide={() => this.randomLogos(8)} visible={visibles[8]} animation='fade'>
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
