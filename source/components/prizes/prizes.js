import React, { Component } from 'react'
import { Grid, Button, Table} from 'semantic-ui-react';
import DayOfLayout from '../dayOfLayout/dayOfLayout';

import {all_prizes} from './prizesConfig'
import styles from './prizes.scss'

export default class Prizes extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  componentWillMount() {

  };

  render() {


    const content = (
      <div className="prizeContainer">
        {
          all_prizes.map((category, index) => {
            return (
              <div key={index}>
              <div className="prizeTitle">
                {category.title}
              </div>
              <Table stackable className="prizeTable"  basic='very'>
                <Table.Body>
                  {
                    category.prizes.map((prize, index) => {
                      return (
                        <Table.Row className="prizeTableRow">
                          <Table.Cell width='8' verticalAlign='top'>
                            <div class="prizeDetailContainer">
                              <div className="prizeSubTitle">
                                {prize.title_1}
                              </div>
                              <div className="prizeDetailDescription">
                                {prize.content_1}
                              </div>
                              <div className="prizeDetailCompany">
                                {prize.company_1}
                              </div>
                            </div>
                          </Table.Cell>
                          <Table.Cell width='8' verticalAlign='top'>
                            <div class="prizeDetailContainer">
                              <div className="prizeSubTitle">
                                {prize.title_2}
                              </div>
                              <div className="prizeDetailDescription">
                                {prize.content_2}
                              </div>
                              <div className="prizeDetailCompany">
                                {prize.company_2}
                              </div>
                            </div>
                          </Table.Cell>
                        </Table.Row>
                      )
                    })
                  }
                </Table.Body>
              </Table>
              </div>
            )
          })
        }
      </div>
    )

    return(
      <DayOfLayout title='Prizes' content={content}/>
    )
  }
}
