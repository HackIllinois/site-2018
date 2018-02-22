import React, { Component } from 'react'
import { Grid, Table, Icon, Segment} from 'semantic-ui-react';
import DayOfLayout from '../dayOfLayout/dayOfLayout';

import {schedules} from './scheduleConfig'
import styles from './schedule.scss'

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  componentWillMount() {

  };

  render() {
    const content = (
      <div>
        {
          schedules.map((schedule, index)=> {
            return (
              <div key={index} className="scheduleTableContainer">
                <div className="scheduleTitle">
                  {schedule.title}
                </div>
                  {
                    schedule.events.map((event, index) => {
                      return (
                        <Grid key={index} columns={2}>
                          <Grid.Column mobile='6' tablet='4' computer='4'>
                            <Segment basic className="timeCell">{event.time}</Segment>
                          </Grid.Column>
                          <Grid.Column mobile='10' tablet='12' computer='12'>
                            <Grid stackable columns={2}>
                              <Grid.Column className='detailCell'>
                                <Segment basic>
                                  <div className="title">
                                    {event.column1.title}
                                  </div>
                                  <div className="location">
                                    {event.column1.location}
                                  </div>
                                </Segment>
                              </Grid.Column>
                              <Grid.Column className='detailCell'>
                                <Segment basic>
                                  <div className="title">
                                    {event.column2.title}
                                  </div>
                                  <div className="location">
                                    {event.column2.location}
                                  </div>
                                </Segment>
                              </Grid.Column>
                            </Grid>
                          </Grid.Column>
                        </Grid>
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
      <DayOfLayout title='Schedule' content={content}/>
    )
  }
}
