import React, { Component } from 'react'
import { Grid, Form, Button} from 'semantic-ui-react';
import styles from './registerSuccess.scss'

export default class RegisterSuccess extends Component {
  render() {

    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row className='verticalCenter'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
          <Grid.Row className='verticalPadding'>
            LOGO
          </Grid.Row>
            <div className='warningMessage verticalPadding'>
              If you click submit, your application will be complete.  If you feel that you are not adequately represented by the contents of your applications, there will be space on the next page for additions.
            </div>

            <Grid.Row className='verticalPadding'>
              <Button>Mentors</Button>
              <Button>Projects</Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
