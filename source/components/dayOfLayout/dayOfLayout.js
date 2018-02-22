import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image} from 'semantic-ui-react';
import styles from './dayOfLayout.scss'

export default class DayOfLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  componentWillMount() {

  };

  render() {
    const {title, content} = this.props;

    return(
      <Grid stackable columns={2} className='dayOfContainer overflowFix'>
        <Grid.Column stretched mobile={16} tablet={5} computer={4} className='navbarColumn overflowFix'>
          <Segment basic padded='very' className='navbarContainer'>
            <Image className="logo" src='./assets/img/png/hackillinois_logo.png' size='small' />
            <ul className="navBar">
              <li><a className={title=='Schedule' ? 'active' : ""} href="/schedule">Schedule</a></li>
              <li><a className={title=='Maps' ? 'active' : ""} href="/maps">Maps</a></li>
              <li><a className={title=='Prizes' ? 'active' : ""} href="/prizes">Prizes</a></li>
              <li><a className={title=='Travel' ? 'active' : ""} href="/travel">Travel</a></li>
              <li><a className={title=='Mentorship' ? 'active' : ""} href="/mentorship">Mentorship</a></li>
            </ul>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={11} computer={12} className='contentColumn overflowFix'>
          <Responsive as={Segment} basic padded='very' className='contentContainer'>
            <div className='contentTitle'>
              {title}
            </div>
            {content}
          </Responsive>
        </Grid.Column>
      </Grid>
    )
  }
}
