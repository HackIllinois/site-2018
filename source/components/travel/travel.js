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
        {
          travels.map((travel, index) => {
            return (
              <div key={index} style={{paddingBottom: '1.5em'}}>
                <div className="travelTitle">
                  {travel.title}
                </div>

                {
                  travel.rides.map((ride, index) => {
                    return (
                      <div>
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
                                  ride.pickup.map((pick, index) => {
                                    return (
                                      <div key={index} class="rideContainer">
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
                                  ride.arrival.map((ride, index) => {
                                    return (
                                      <div key={index} class="rideContainer">
                                        <div className="travelTime">
                                          {ride.time}
                                        </div>
                                        <div className="travelLocation">
                                          {ride.location}
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
