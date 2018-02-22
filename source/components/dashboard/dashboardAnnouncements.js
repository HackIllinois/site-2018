import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image} from 'semantic-ui-react';

import styles from './dashboardAnnouncements.scss'
import axios from 'axios';

export default class DashboardAnnouncements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: []
    };
  };

  componentWillMount() {
    this.getEventData();
  };

  componentDidMount() {
    setInterval(() => {
      this.getEventData();
    }, 60000);
  }

  getEventData = () => {
    axios.get("https://api.hackillinois.org/v1/announcement/all?limit=10 ")
    .then(response => {
      let announcements = response.data.data;
      announcements.sort(function(a, b) {
        if (new Date(a.created) > new Date(b.created)) return -1;
        if (new Date(a.created) < new Date(b.created)) return 1;
        return 0;
      });
      this.setState({announcements: announcements});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {size} = this.props;
    const {announcements} = this.state;

    return (
      <Segment textAlign="center" className="announcementsContainer" style={{height: size=='small' ? '25vh' : '55vh'}}>
        <div className="eventsTitle">
          ANNOUNCEMENTS
        </div>
        {
          announcements.length == 0 ?
            <Segment basic textAlign="left" className="cellContainer">
              <div className="cellTitle">
                No announcements
              </div>
              <div className="cellLocation">

              </div>
            </Segment>
          :
          announcements.map((announcement, index) => {
            return(
              <Segment key={index} basic textAlign="left" className="cellContainer">
                <div className="cellTitle">
                  {announcement.title}
                </div>
                <div className="cellLocation">
                  {announcement.description}
                </div>
              </Segment>
            )
          })
        }
      </Segment>
    )
  }

}
