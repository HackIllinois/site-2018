import React, { Component } from 'react'
import { Grid, Menu, Icon, Image} from 'semantic-ui-react';
import DayOfLayout from '../dayOfLayout/dayOfLayout';

import styles from './maps.scss'

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'ECEB'
    };
  };

  componentWillMount() {

  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const {activeItem} = this.state;

    const content = (
      <div>
        <Menu className="sectionBar" secondary borderless widths={4}>
          <Menu.Item name='ECEB' active={activeItem === 'ECEB'} onClick={this.handleItemClick} />
          <Menu.Item name='Siebel' active={activeItem === 'Siebel'} onClick={this.handleItemClick} />
          <Menu.Item name='Kenny Gym' active={activeItem === 'Kenny Gym'} onClick={this.handleItemClick} />
          <Menu.Item name='Expo' active={activeItem === 'Expo'} onClick={this.handleItemClick} />
        </Menu>

        {
          activeItem === 'ECEB'?
            <div className="mapImagesContainer">
              <Image src='./assets/img/png/maps/ECEB11.png' fluid />
              <Image src='./assets/img/png/maps/ECEB21.png' fluid />
              <Image src='./assets/img/png/maps/ECEB31.png' fluid />
            </div>
          : null
        }

        {
          activeItem === 'Siebel'?
            <div className="mapImagesContainer">
              <Image src='./assets/img/png/maps/Siebel11.png' fluid />
              <Image src='./assets/img/png/maps/Siebel21.png' fluid />
            </div>
          : null
        }

        {
          activeItem === 'Expo'?
            <div className="mapImagesContainer">
              <Image src='./assets/img/png/maps/CompanyExpo.png' fluid />
            </div>
          : null

        }

        {
          activeItem === 'Kenny Gym'?
            <div className="mapImagesContainer">
              <Image src='./assets/img/png/maps/KennyGym.png' fluid />
            </div>
          : null

        }


      </div>
    )

    return(
      <DayOfLayout title='Maps' content={content}/>
    )
  }
}
