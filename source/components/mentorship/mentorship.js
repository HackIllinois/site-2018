import React, { Component } from 'react'
import { Grid, Segment, Image} from 'semantic-ui-react';
import DayOfLayout from '../dayOfLayout/dayOfLayout';

import {mentorship} from './mentorshipConfig'
import styles from './mentorship.scss'

export default class Mentorship extends Component {
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
          mentorship.map((detail, index)=> {
            return (
              <div key={index} className="mentorshipContainer">
                <div className="mentorshipTitle">
                  {detail.title}
                </div>
                <Grid stackable columns={2}>
                  {
                    detail.mentors.map((mentor, index) => {
                      return (
                        <Grid.Column key={index} phone='16' tablet='8' computer='4' >
                          <Segment basic textAlign='center'>
                            <a href={ "https://www.github.com/" + mentor.github}>
                              <Image className="avatarImg" src={"https://github.com/" + mentor.github + ".png?size=250"} size='medium'/>
                              <div className="textBox">
                                <div className="name"> {mentor.name} </div>
                                <div className="handle"> {mentor.github} </div>
                              </div>
                            </a>
                          </Segment>
                        </Grid.Column>
                      )
                    })
                  }
                </Grid>
              </div>
            )
          })
        }
      </div>
    )

    return(
      <DayOfLayout title='Mentors' content={content}/>
    )
  }
}
