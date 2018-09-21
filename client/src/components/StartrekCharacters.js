import React from 'react'
import {
  Header,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';

class StartrekCharacters extends React.Component {

  render() {
    return(
      <Segment>
        <Header as='h2'>Star Trek</Header>
      </Segment>
    )
  }
}

export default StartrekCharacters;

