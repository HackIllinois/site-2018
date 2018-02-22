import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image} from 'semantic-ui-react';

import styles from './dashboardEvents.scss'
import axios from 'axios';

export default class DashboardEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: {},
      upcomingEvent: [],
      currentEvent: []
    };
  };

  componentWillMount() {
    this.getEventData();
  };

  componentDidMount() {
    setInterval(() => {
      this.getEventData();
    }, 600000);
  }

  getEventData = () => {
    axios.get("https://api.hackillinois.org/v1/event/location/all")
    .then(response => {
      const data = response.data.data;
      let locations = {};
      data.map(location => {
        const id = location['id'];
        const name = location['name'];
        locations[id] = name
      });
      this.setState({locations: locations});
    })
    .catch(error => {
      console.log(error);
    });

    axios.get("https://api.hackillinois.org/v1/event")
    .then(response => {
      const currentTime = new Date();
      const data = response.data.data;
      // filter events
      let currentEvent = data.filter(event => new Date(event.startTime) < currentTime && new Date(event.endTime) > currentTime);
      let upcomingEvent = data.filter(event => new Date(event.startTime) > currentTime);

      currentEvent.sort(function(a, b) {
          return new Date(a.startTime) - new Date(b.startTime)
      });

      upcomingEvent.sort(function(a, b) {
          return new Date(a.startTime) - new Date(b.startTime)
      });

      this.setState({currentEvent: currentEvent, upcomingEvent: upcomingEvent});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {currentEvent, upcomingEvent, locations} = this.state;

    return (
      <Segment textAlign="center" className="eventsContainer">
        <div className="eventsTitle">
          HAPPENING NOW
        </div>
        {
          currentEvent.length == 0 ?
            <Segment basic textAlign="left" className="cellContainer">
              <div className="cellTitle">
                No events
              </div>
              <div className="cellLocation">

              </div>
            </Segment>
          :
          currentEvent.map((event, index) => {
            return(
              <Segment key={index} basic textAlign="left" className="cellContainer">
                <div className="cellTitle">
                  {event.name}
                </div>
                {
                  event.locations.map((location, index) => {
                    return (
                      <div className="cellLocation">
                        {this.state.locations[location.locationId]}
                      </div>
                    )
                  })
                }
              </Segment>
            )
          })
        }
        <div className="eventsTitle">
          UPCOMING
        </div>
        {
          upcomingEvent.length == 0 ?
            <Segment basic textAlign="left" className="cellContainer">
              <div className="cellTitle">
                No events
              </div>
              <div className="cellLocation">

              </div>
            </Segment>
          :
          upcomingEvent.map((event, index) => {
            return(
              <Segment key={index} basic textAlign="left" className="cellContainer">
                <div className="cellTitle">
                  {event.name}
                </div>
                <div className="cellLocation">
                {
                  event.locations.map((location, index) => {
                    const divider = index != event.locations.length - 1 ? " | ": "";
                    return this.state.locations[location.locationId] + divider
                  })
                }
                </div>
              </Segment>
            )
          })
        }
      </Segment>
    )
  }

}
