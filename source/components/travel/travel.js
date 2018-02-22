import React, { Component } from 'react'
import { Grid, Table, Icon} from 'semantic-ui-react';
import DayOfLayout from '../dayOfLayout/dayOfLayout';

import {travels} from './travelConfig'
import styles from './travel.scss'

export default class Travel extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  componentWillMount() {

  };

  render() {
    const content = (
      <div className="travelContainer">
        <div style={{paddingBottom: '1.5em'}}>
          <div className="travelTitle">
            Parking Information
          </div>
          <div className="travelType">
            If you are driving to HackIllinois, parking is available free after 5pm and over the weekend at the following lots: http://parking.illinois.edu/parking_items/weekday-amp-overnight-parking
          </div>
        </div>
        {
          travels.map((travel, travel_index) => {
            return (
              <div key={travel_index} style={{paddingBottom: '1.5em'}}>
                <div className="travelTitle">
                  {travel.title}
                </div>

                {
                  travel.rides.map((ride, ride_index) => {
                    return (
                      <div key={ride_index}>
                        <div className="travelSubTitle">
                          {ride.title}
                        </div>
                        <Table unstackable className="travelTable"  basic='very'>
                          <Table.Body>
                            <Table.Row className="travelTableRow">
                              <Table.Cell className="travelType" width='3' verticalAlign='top'>
                                Pickup
                              </Table.Cell>
                              <Table.Cell>
                                {
                                  ride.pickup.map((pick, pick_index) => {
                                    return (
                                      <div key={pick_index} className="rideContainer">
                                        <div className="travelTime">
                                          {pick.time}
                                        </div>
                                        <div className="travelLocation">
                                          {pick.location}
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell className="travelType" width='3' verticalAlign='top'>
                                Arrival
                              </Table.Cell>
                              <Table.Cell>
                                {
                                  ride.arrival.map((arrival, arrival_index) => {
                                    return (
                                      <div key={arrival_index} className="rideContainer">
                                        <div className="travelTime">
                                          {arrival.time}
                                        </div>
                                        <div className="travelLocation">
                                          {arrival.location}
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )

    return(
      <DayOfLayout title='Travel' content={content}/>
    )
  }
}
